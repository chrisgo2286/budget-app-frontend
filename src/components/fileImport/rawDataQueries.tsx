import { useState } from "react";
import RawData from "./rawData";
import Queries from "./queries";
import Button from "../miscComponents/button/button";
import { RowNumsTypes } from "./fileImport";

type RawDataQueryTypes = {
    queriesVisible: boolean,
    parseData: (rowNums: RowNumsTypes) => void,
    rawData: string[][]
}
export default function RawDataQueries ({
    queriesVisible,
    parseData,
    rawData
}: RawDataQueryTypes): JSX.Element {

    const [ rowNums, setRowNums ] = useState<RowNumsTypes>({
        date: 1,
        category: 2,
        amount: 3
    })

    function handleClassName (): string {
        return (queriesVisible) ?  queriesVisibleClass : queriesNotVisibleClass;
    }

    function handleChange (event: React.ChangeEvent<HTMLInputElement> ) {
        setRowNums({ ...rowNums, [event.target.name]: event.target.value })
    }

    return (
        <div className={ handleClassName() } >
            <Queries rowNums={ rowNums } handleChange={ (event) => handleChange(event) }/>
            <RawData rawData={ rawData }/>
            <Button
                className="mx-auto mt-10" 
                onClick={ () => parseData(rowNums) }>
                Next
            </Button>  
        </div>
    )
}

const queriesVisibleClass = "w-full"
const queriesNotVisibleClass = "invisible"