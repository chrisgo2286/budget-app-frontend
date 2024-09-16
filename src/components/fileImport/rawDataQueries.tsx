import RawData from "./rawData";
import Queries from "./queries";
import { RowNumsTypes } from "./fileImport";

type RawDataQueryTypes = {
    queriesVisible: boolean,
    parseData: (rowNums: RowNumsTypes) => void
}
export default function RawDataQueries ({
    queriesVisible,
    parseData
}: RawDataQueryTypes): JSX.Element {
    function handleClassName (): string {
        return (queriesVisible) ?  queriesVisibleClass : queriesNotVisibleClass;
    }

    return (
        <div className={ handleClassName() } >
            <Queries parseData={ parseData }/>
            <RawData />
        </div>

    )
}

const queriesVisibleClass = ""
const queriesNotVisibleClass = "invisible"