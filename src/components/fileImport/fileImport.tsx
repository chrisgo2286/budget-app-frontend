import { useContext, useState } from "react"
import Papa, { ParseResult } from "papaparse";
import FileInput from "./fileInput";
import FileImportTable from "./fileImportTable";
import RawDataQueries from "./rawDataQueries";
import { CategoriesContext, FileImportDataContext } from "../../misc/context";
import { NewLedgerItemTypes } from "../ledger/ledgerTypes";
import { createLedgerItem } from "../../misc/apiCalls";
import { findCategoryID } from "../../misc/miscFunctions";

export type RowNumsTypes = {
    date: number | null,
    category: number | null,
    amount: number | null
}

export type ParsedDataItemType = {
    date: string,
    description: string,
    amount: string,
    category: string
}

export default function FileImport () {
    
    const { categories } = useContext(CategoriesContext)
    const [ rawData, setRawData ] = useState<string[][]>([])
    const [ parsedData, setParsedData ] = useState<ParsedDataItemType[]>([])
    const [ queriesVisible, setQueriesVisible ] = useState<boolean>(false)

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

    function parseData (rowNums: RowNumsTypes): void {
        const newData = rawData.map((row) => (
            { 
                date: row[(rowNums.date) ? rowNums.date - 1: 0], 
                description: row[(rowNums.category) ? rowNums.category - 1: 1], 
                amount: row[(rowNums.amount) ? rowNums.amount - 1: 2],
                category: "Category",
            }
        ))
        setParsedData(newData);
        setQueriesVisible(false);
    }

    function submitForm () {
        parsedData.map((item) => (
            addLedgerItem(item)
        ))
        setParsedData([])
    }

    async function addLedgerItem (item: ParsedDataItemType): Promise<void> {
        const result = await createLedgerItem(cleanItem(item))
    }

    function cleanItem (item: ParsedDataItemType): NewLedgerItemTypes {
        const dateObj = new Date(item.date)
        const newDate = `${ dateObj.getFullYear() }-${ dateObj.getMonth()+1 }-${ dateObj.getDate() }`
        const categoryId = findCategoryID(item.category, categories)
        const newItem = {
            date: newDate,
            category: (categoryId) ? categoryId: item.category,
            amount: item.amount
        }
        return newItem;
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
        <main className="flex flex-col justify-center items-center mt-10 border border-gray-100">
            <FileInput onChange={ handleFile }/>
            <FileImportDataContext.Provider value={{ parsedData }}>
                <FileImportTable 
                    handleChange={ handleChange }
                    submitForm={ submitForm } />
            </FileImportDataContext.Provider>
            <RawDataQueries 
                queriesVisible={ queriesVisible }
                parseData={ parseData }
                rawData={ rawData }/>
        </main>

    )
}