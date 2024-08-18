import { useEffect, useState } from "react";
import MonthlyStatsHeader from "./monthlyStatsHeader";
import MonthlyStatsBody from "./monthlyStatsBody";
import { monthNumToName } from "../../../misc/miscFunctions";

export default function MonthlyStats () {
    const curDate = new Date()
    const [ data, setData ] = useState()
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear(),
    })

    useEffect(() => {
        setData(dummyData)
    }, [period])

    return (
        <div className="report">
            <MonthlyStatsHeader 
                monthName={ monthNumToName(period.month) }
                setPeriod={ setPeriod } />
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