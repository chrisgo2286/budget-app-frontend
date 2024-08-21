import { useEffect, useState } from "react";
import MonthlyStatsHeader from "./monthlyStatsHeader";
import MonthlyStatsBody from "./monthlyStatsBody";
import { monthNumToName } from "../../../misc/miscFunctions";
import { getMonthlyStats } from "../../../misc/apiCalls";

export default function MonthlyStats () {
    const curDate = new Date()
    const [ data, setData ] = useState()
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear(),
    })

    useEffect(() => {
        getMonthlyStats(period).then((data) => setData(data))
    }, [period])

    return (
        <div className="report">
            <MonthlyStatsHeader 
                period={ period }
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