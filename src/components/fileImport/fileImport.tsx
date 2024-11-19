import { useContext, useState } from "react"
import Papa, { ParseResult } from "papaparse";
import FileInput from "./fileInput";
import FileImportTable from "./fileImportTable";
import RawDataQueries from "./rawDataQueries";
import { CategoriesContext, FileImportDataContext } from "../../misc/context";
import { NewLedgerItemTypes } from "../ledger/hiddenLedgerSection/newLedgerItem/newLedgerItem";
import { createLedgerItem } from "../../misc/apiCalls";
import { findCategoryID } from "../../misc/miscFunctions";
import { validateQueryFields } from "./fileImportValidation";
import Validation from "../validation/validation";
import { useNavigate } from "react-router-dom";

export type QueryFieldsTypes = {
    date: number | null,
    description: number | null,
    amount: number | null,
    isHeader: string
}

export type ParsedDataItemType = {
    date: string,
    description: string,
    amount: string,
    category: string
}

// Should convert other file types to CSV with openpyxl
// Need Testing
// Need to be able to create new categories
// Validations

export default function FileImport () {
    
    const navigate = useNavigate()
    const { categories } = useContext(CategoriesContext)
    const [ rawData, setRawData ] = useState<string[][]>([])
    const [ parsedData, setParsedData ] = useState<ParsedDataItemType[]>([])
    const [ queriesVisible, setQueriesVisible ] = useState<boolean>(false)
    const [ errors, setErrors ] = useState<string[]>([])

    function handleFile (event: React.ChangeEvent<HTMLInputElement>): void {
        
        if (event.target.files) {
            Papa.parse(event.target.files[0], {
                skipEmptyLines: true,
                complete: function(results: ParseResult<string[]>) {
                    setRawData(results.data)
                    setQueriesVisible(true)
                }
            })
        }
    }

    function parseData (queryFields: QueryFieldsTypes): void {
        const result = validateQueryFields(cleanQueryFields(queryFields))
        if (result === "Valid") {
            let newData = rawData.map((row) => (
                { 
                    date: row[(queryFields.date) ? queryFields.date - 1: 0], 
                    description: row[(queryFields.description) ? queryFields.description - 1: 1], 
                    amount: row[(queryFields.amount) ? queryFields.amount - 1: 2],
                    category: "Category",
                }
            ))
            
            if (queryFields.isHeader === "Yes") {
                newData = newData.slice(1, newData.length + 1)
            }
            setErrors([])
            setParsedData(newData);
            setQueriesVisible(false);
        } else if (Array.isArray(result)) {
            setErrors(result)
        }
    }
        

    function handleDeleteRow (ndx: number) {
        const firstArray = parsedData.slice(0, ndx)
        const secondArray = parsedData.slice(ndx + 1, parsedData.length)
        const newData = firstArray.concat(secondArray)
        setParsedData(newData)
    }

    function submitForm () {
        parsedData.map((item) => (
            addLedgerItem(item)
        ))
        navigate("/ledger")
    }

    async function addLedgerItem (item: ParsedDataItemType): Promise<void> {
        const result = await createLedgerItem(cleanItem(item))
    }

    function cleanItem (item: ParsedDataItemType): NewLedgerItemTypes {
        const dateArray = item.date.split("-")
        const categoryId = findCategoryID(item.category, categories)
        const newItem = {
            date: `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`,
            category: (categoryId) ? categoryId: item.category,
            amount: item.amount
        }
        return newItem;
    }

    function cleanQueryFields(fields: QueryFieldsTypes): QueryFieldsTypes {
        return {
            date: (typeof fields.date === "string") ? parseFloat(fields.date) : fields.date,
            description: (typeof fields.description === "string") ? parseFloat(fields.description) : fields.description,
            amount: (typeof fields.amount === "string") ? parseFloat(fields.amount) : fields.amount,
            isHeader: fields.isHeader
        }
    }

    function handleChange (ndx: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
        const { value, name } = event.target
        const newName = name.split("-")[0]
        const newItem = { ...parsedData[ndx], [newName]: value }
        const newData = parsedData.map((item, index) => (
            index === ndx ? newItem : item
        ))
        setParsedData(newData)
    }

    return (
        <main className="flex flex-col justify-center items-center mt-10">
            <FileInput onChange={ handleFile }/>
            <Validation errors={ errors } />
            <FileImportDataContext.Provider value={{ parsedData }}>
                <FileImportTable 
                    handleChange={ handleChange }
                    submitForm={ submitForm } 
                    handleDeleteRow={ handleDeleteRow }/>
            </FileImportDataContext.Provider>
            <RawDataQueries 
                queriesVisible={ queriesVisible }
                parseData={ parseData }
                rawData={ rawData }/>
        </main>

    )
}