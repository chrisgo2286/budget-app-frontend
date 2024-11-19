import { useState } from "react";
import RawData from "./rawData";
import Queries from "./queries";
import Button from "../miscComponents/button/button";
import { QueryFieldsTypes } from "./fileImport";

type RawDataQueryTypes = {
    queriesVisible: boolean,
    parseData: (rowNums: QueryFieldsTypes) => void,
    rawData: string[][]
}
export default function RawDataQueries ({
    queriesVisible,
    parseData,
    rawData
}: RawDataQueryTypes): JSX.Element {

    const [ queryFields, setQueryFields ] = useState<QueryFieldsTypes>({
        date: 1,
        description: 2,
        amount: 3,
        isHeader: "No"
    })

    function handleClassName (): string {
        return (queriesVisible) ?  queriesVisibleClass : queriesNotVisibleClass;
    }

    function handleChange (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) {
        setQueryFields({ ...queryFields, [event.target.name]: event.target.value })
    }

    return (
        <div className={ handleClassName() } >
            <Queries 
                queryFields={ queryFields } 
                handleChange={ (event) => handleChange(event) } />
            <RawData rawData={ rawData }/>
            <Button
                className="mx-auto mt-10"
                dataCy="next-btn" 
                onClick={ () => parseData(queryFields) }>
                Next
            </Button>
        </div>
    )
}

const queriesVisibleClass = "w-full"
const queriesNotVisibleClass = "invisible"