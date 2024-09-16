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
    date: number,
    category: number,
    amount: number
}

export default function FileImport () {
    
    const { categories } = useContext(CategoriesContext)
    const [ data, setData ] = useState<string[][]>([])
    const [ parsedData, setParsedData ] = useState<NewLedgerItemTypes[]>([])
    const [ queriesVisible, setQueriesVisible ] = useState<boolean>(false)

    function handleFile (event: React.ChangeEvent<HTMLInputElement>): void {
        

        if (event.target.files) {
            Papa.parse(event.target.files[0], {
                skipEmptyLines: true,
                complete: function(results: ParseResult<string[]>) {
                    setData(results.data)
                    setQueriesVisible(true)
                }
            })
        }
    }


    function parseData (rowNums: RowNumsTypes): void {
        const newData = data.map((row) => (
            { 
                date: row[rowNums.date - 1], 
                category: row[rowNums.category - 1], 
                amount: row[rowNums.amount - 1] 
            }
        ))
        setParsedData(newData);
        setQueriesVisible(false);
    }

    function submitForm () {
        parsedData.map((item) => (
            addLedgerItem(item)
        ))
        setData([])
    }

    async function addLedgerItem (item: NewLedgerItemTypes): Promise<void> {
        const result = await createLedgerItem(cleanItem(item))
    }

    function cleanItem (item: NewLedgerItemTypes): NewLedgerItemTypes {
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
        const newItem = { ...data[ndx], [newName]: value }
        const newData = data.map((item, index) => (
            index === ndx ? newItem : item
        ))
        setData(newData)
    }

    return (
        <main className="absolute">
            <FileInput onChange={ handleFile }/>
            <FileImportDataContext.Provider value={{ parsedData }}>
                <FileImportTable 
                    handleChange={ handleChange }
                    submitForm={ submitForm } />
            </FileImportDataContext.Provider>
            <RawDataQueries 
                queriesVisible={ queriesVisible }
                parseData={ parseData }/>
        </main>

    )
}