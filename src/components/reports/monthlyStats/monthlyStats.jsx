import { useEffect, useState } from "react";
import MonthlyStatsHeader from "./monthlyStatsHeader";
import MonthlyStatsBody from "./monthlyStatsBody";
import { getNewPeriod, monthNumToName, getCurrentPeriod } from "../../../misc/miscFunctions";
import { getMonthlyStats } from "../../../misc/apiCalls";

export default function MonthlyStats () {
    const [ data, setData ] = useState()
    const [ period, setPeriod ] = useState(getCurrentPeriod())

    useEffect(() => {
        getMonthlyStats(period).then((data) => setData(data))
    }, [period])

    function handlePeriodChange (direction) {
        setPeriod(getNewPeriod(period, direction))
    }
    
    return (
        <div className="report">
            <MonthlyStatsHeader 
                monthName={ monthNumToName(period.month) }
                handlePeriodChange={ handlePeriodChange } />
            <MonthlyStatsBody data={ data }/>
        </div>
    )
}

const dummyData = {
    "expenses": "1000.00",
    "income": "1200.00",
    "savings": "200.00",
    "budgetPercent": "80"
}