import { useContext } from "react"
import FileImportRow from "./fileImportRow"
import { FileImportDataContext } from "../../misc/context"
import { NewLedgerItemTypes } from "../ledger/hiddenLedgerSection/newLedgerItem/newLedgerItem"
import Button from "../miscComponents/button/button"

type FileImportTableTypes = {
    handleChange: (ndx: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    submitForm: () => void,
    handleDeleteRow: (ndx: number) => void
}

export default function FileImportTable ({
    handleChange,
    submitForm,
    handleDeleteRow
}: FileImportTableTypes): JSX.Element {

    const { parsedData } = useContext(FileImportDataContext)

    return (
        <>
            { (parsedData.length < 1) ? <div></div> : (
                <section className="flex flex-col items-center">
                    <table className="min-w-140 mt-10 border-b border-gray-200" data-cy="parsed-data-table">
                        <FileImportTableHeader />
                        <FileImportTableBody 
                            data={ parsedData }
                            handleChange={ handleChange }
                            handleDeleteRow={ handleDeleteRow } />
                    </table>
                    <Button 
                        className="mx-auto mt-10"
                        dataCy="submit-btn"
                        onClick={ submitForm }>
                        Submit
                    </Button>
                </section>
            )} 
        </>
        
    )
}

function FileImportTableHeader () {
    return (
        <thead data-cy="parsed-data-table-header">
            <tr className="flex flex-row justify-around border-b border-gray-200">
                <th className="w-1/5 text-left">Date</th>
                <th className="w-1/5 text-left">Description</th>
                <th className="w-1/5 text-left">Amount</th>
                <th className="w-1/5 text-left">Category</th>
                <th className="w-1/5 text-center">Delete</th>
            </tr>
        </thead>
    )
}

type FileImportTableBodyProp = {
    data: NewLedgerItemTypes[],
    handleChange: (ndx: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    handleDeleteRow: (ndx: number) => void
}

function FileImportTableBody ({ 
    data,
    handleChange,
    handleDeleteRow
}: FileImportTableBodyProp): JSX.Element {
    return (
        <tbody>
            { data.map((row, ndx) => (
                <tr className="flex flex-row justify-between border-b border-gray-200" key={ ndx }>
                    <FileImportRow 
                        ndx={ ndx } 
                        handleChange={ handleChange } 
                        handleDeleteRow={ () => handleDeleteRow(ndx) }/>
                </tr>
            ))}
        </tbody>
    )
}