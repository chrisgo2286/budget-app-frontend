import { useState } from "react";
import MonthlyStatsHeader from "./monthlyStatsHeader";
import MonthlyStatsBody from "./monthlyStatsBody";
import { getNewPeriod, monthNumToName, getCurrentPeriod } from "../../../misc/miscFunctions";
import { PeriodTypes } from "../reports";
import { useGetMonthlyStats } from "../../../misc/hooks";

export default function MonthlyStats (): JSX.Element {
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())
    const { data } = useGetMonthlyStats(period)

    function handlePeriodChange (direction: "next" | "prev"): void {
        setPeriod(getNewPeriod(period, direction))
    }
    
    return (
        <div className="report" data-cy="monthly-stats-report">
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