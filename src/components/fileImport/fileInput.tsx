type FileInputProp = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput ({ 
    onChange 
}: FileInputProp): JSX.Element {
    return (
        <input
            className=""
            type="file"
            name="file"
            accept=".csv"
            onChange={ onChange } />
    )
}