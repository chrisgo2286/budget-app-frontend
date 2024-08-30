import { useEffect, useState } from "react";
import MonthlyStatsHeader from "./monthlyStatsHeader";
import MonthlyStatsBody from "./monthlyStatsBody";
import { getNewPeriod, monthNumToName, getCurrentPeriod } from "../../../misc/miscFunctions";
import { getMonthlyStats } from "../../../misc/apiCalls";
import { MonthlyStatsTypes } from "./monthStatsTypes";
import { PeriodTypes } from "../reportTypes";

export default function MonthlyStats (): JSX.Element {
    const [ data, setData ] = useState<MonthlyStatsTypes>({
        expenses: "",
        income: "",
        savings: "",
        budgetPercent: ""
    })
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())

    useEffect(() => {
        getMonthlyStats(period).then((data) => setData(data))
    }, [period])

    function handlePeriodChange (direction: "next" | "prev"): void {
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