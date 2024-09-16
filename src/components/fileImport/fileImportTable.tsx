import { useContext } from "react"
import FileImportRow from "./fileImportRow"
import { FileImportDataContext } from "../../misc/context"

type FileImportTableTypes = {
    handleChange: (ndx: number, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    submitForm: () => void
}

export default function FileImportTable ({
    handleChange,
    submitForm
}: FileImportTableTypes): JSX.Element {

    const { parsedData } = useContext(FileImportDataContext)
    
    function handleSubmitBtn () {
        if (parsedData.length > 0) {
            return <button type="submit" onClick={ submitForm }>Submit</button>
        }
    }

    return (
        <section>
            <div>
                { parsedData.map((row, ndx) => (
                    <div key={ ndx }>
                        <FileImportRow ndx={ ndx } handleChange={ handleChange } />
                    </div>
                ))}
            </div>
            <div>{ handleSubmitBtn() }</div>
        </section>
        
        
    )
}