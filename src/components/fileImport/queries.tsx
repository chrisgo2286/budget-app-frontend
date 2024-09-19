import { RowNumsTypes } from "./fileImport"

type QueriesType = {
    rowNums: RowNumsTypes,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Queries({
    rowNums, 
    handleChange 
}: QueriesType): JSX.Element {
    
    return (
        <div className="mt-10">
            <div className="">
                <QueryInputPair 
                    name="date"
                    value={ rowNums.date }
                    onChange={ (event) => handleChange(event) } />
                <QueryInputPair
                    name="category"
                    value={ rowNums.category }
                    onChange={ (event) => handleChange(event)} />
                <QueryInputPair
                    name="amount"
                    value={ rowNums.amount }
                    onChange={ (event) => handleChange(event)} />
            </div>
        </div>
        
    )
}

type QueryInputPairTypes = {
    name: string,
    value: number | null,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function QueryInputPair ({ 
    name, value, onChange 
}: QueryInputPairTypes): JSX.Element {
    return (
        <div className="grid grid-cols-2 mt-5">
            <span className="text-right">What is the column for { name }? </span>
            <input
                className="ml-8 w-16 rounded-md text-center border border-gray-300" 
                type="number" 
                name={ name }
                value={ (value) ? value: 0 }
                onChange={ onChange } />
        </div>
                
    )
}