import { useContext } from "react"
import FileImportRow from "./fileImportRow"
import { FileImportDataContext } from "../../misc/context"
import { FileImportDataContextType } from "../../misc/miscTypes"
import { NewLedgerItemTypes } from "../ledger/ledgerTypes"
import { isVisible } from "@testing-library/user-event/dist/utils"
import Button from "../miscComponents/button/button"

type FileImportTableTypes = {
    handleChange: (ndx: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    submitForm: () => void
}

export default function FileImportTable ({
    handleChange,
    submitForm
}: FileImportTableTypes): JSX.Element {

    const { parsedData } = useContext(FileImportDataContext)

    return (
        <>
            { (parsedData.length < 1) ? <div></div> : (
                <section>
                    <table className="table-auto w-full mt-10">
                        <FileImportTableHeader />
                        <FileImportTableBody 
                            data={ parsedData }
                            handleChange={ handleChange } />
                    </table>
                    <Button 
                        className="mx-auto mt-10"
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
        <thead className="flex flex-row justify-around border-b border-gray-200">
            <th className="w-1/3 text-center">Date</th>
            <th className="w-1/3 text-center">Category</th>
            <th className="w-1/3 text-center">Amount</th>
        </thead>
    )
}

type FileImportTableBodyProp = {
    data: NewLedgerItemTypes[],
    handleChange: (ndx: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

function FileImportTableBody ({ 
    data,
    handleChange
}: FileImportTableBodyProp): JSX.Element {
    return (
        <tbody>
            { data.map((row, ndx) => (
                <tr className="flex flex-row justify-between border-b border-gray-200" key={ ndx }>
                    <FileImportRow ndx={ ndx } handleChange={ handleChange } />
                </tr>
            ))}
        </tbody>
    )
}