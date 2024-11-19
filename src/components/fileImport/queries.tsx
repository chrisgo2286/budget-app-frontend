import { useState } from "react"
import { QueryFieldsTypes } from "./fileImport"

type QueriesProps = {
    queryFields: QueryFieldsTypes,
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export default function Queries({
    queryFields, 
    handleChange 
}: QueriesProps): JSX.Element {
    
    const [ choice, setChoice ] = useState<string>("No")

    function handleIsHeaderChoice (event: React.ChangeEvent<HTMLSelectElement>) {
        handleChange(event)
        const newChoice = (event.target.value === "Yes") ? "Yes": "No";
        setChoice(newChoice)
    }
    return (
        <div className="mt-10">
            <div className="">
                <QueryInputPair 
                    name="date"
                    value={ queryFields.date }
                    onChange={ (event) => handleChange(event) } />
                <QueryInputPair
                    name="description"
                    value={ queryFields.description }
                    onChange={ (event) => handleChange(event)} />
                <QueryInputPair
                    name="amount"
                    value={ queryFields.amount }
                    onChange={ (event) => handleChange(event)} />
                <div className="grid grid-cols-2 mt-5" data-cy="query-headers">
                    <span className="text-right">Does your data have headers?</span>
                    <select 
                        className="ml-8 w-16 rounded-md text-center border border-gray-300"
                        data-cy="query-select-headers"
                        name="isHeader"
                        value={ choice }
                        onChange={ handleIsHeaderChoice }>
                        <option value="Yes">Yes</option>      
                        <option value="No">No</option>
                    </select>
                </div>
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
        <div className="grid grid-cols-2 mt-5" data-cy={`query-${name}`}>
            <span className="text-right">What is the column for { name }? </span>
            <input
                className="ml-8 w-16 rounded-md text-center border border-gray-300" 
                data-cy={ `query-input-${name}` }
                type="number" 
                name={ name }
                value={ (value) ? value: 0 }
                onChange={ onChange } />
        </div>
                
    )
}