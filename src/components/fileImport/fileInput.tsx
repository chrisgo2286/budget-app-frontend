import { useRef, useState } from "react"
import Button from "../miscComponents/button/button";

type FileInputProp = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput ({ 
    onChange 
}: FileInputProp): JSX.Element {

    const [ filename, setFilename ] = useState<string>("")
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    function handleChange (event: React.ChangeEvent<HTMLInputElement>): void {
        onChange(event);
        setFilename((event.target.files) ? event.target.files[0].name: "")
    }
    return (
        <div className="flex flex-col">
            <Button
                dataCy="upload-btn"
                onClick={ () => hiddenFileInput.current?.click() } >
                Upload
            </Button>
            <div 
                className="text-center mt-2 font-bold"
                data-cy="filename">
                { filename }
            </div>
            <input
                className="hidden"
                data-cy="file-input"
                type="file"
                name="file"
                accept=".csv"
                ref={ hiddenFileInput }
                onChange={ handleChange } />
        </div>
            
        )
}