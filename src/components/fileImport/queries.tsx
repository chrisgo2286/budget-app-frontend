import { useState } from "react"
import { RowNumsTypes } from "./fileImport"

type QueriesType = {
    parseData: (rowNums: RowNumsTypes) => void
}

export default function Queries({ 
    parseData 
}: QueriesType): JSX.Element {
    
    const [ rowNums, setRowNums ] = useState<RowNumsTypes>({
        date: 0,
        category: 0,
        amount: 0
    })

    function handleChange (event: React.ChangeEvent<HTMLInputElement> ) {
        setRowNums({ ...rowNums, [event.target.name]: event.target.value })
    }
    
    return (
        <div>
            <div className="grid grid-cols-2">
                <div>What is the column for Date? </div>
                <input 
                    type="number" 
                    name="date"
                    value={ rowNums.date }
                    onChange={ handleChange } />
                <div>What is the column for Category? </div>
                <input 
                    type="number" 
                    name="category"
                    value={ rowNums.category }
                    onChange={ handleChange } />
                <div>What is the column for Amount? </div>
                <input 
                    type="number" 
                    name="amount"
                    value={ rowNums.amount }
                    onChange={ handleChange } />
            </div>
            <button onClick={ () => parseData(rowNums) }>Submit</button>
        </div>
        
    )
}