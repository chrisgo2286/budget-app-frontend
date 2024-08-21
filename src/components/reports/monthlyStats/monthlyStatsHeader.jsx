import { getNextPeriod, getPreviousPeriod, monthNumToName } from "../../../misc/miscFunctions"

export default function MonthlyStatsHeader ({ period, setPeriod }) {

    function handleClickPrevious () {
        setPeriod(getPreviousPeriod(period))
    }

    function handleClickNext () {
        setPeriod(getNextPeriod(period))
    }

    return (
        <div className="my-4 flex justify-between">
            <span 
                className="hover:cursor-pointer material-icons"
                onClick={ handleClickPrevious }>
                navigate_before
            </span>
            <span className="text-3xl font-bold">{ monthNumToName(period.month) } Stats</span>
            <span 
                className="hover:cursor-pointer material-icons"
                onClick={ handleClickNext }>
                navigate_next
            </span>
        </div>
    )
}