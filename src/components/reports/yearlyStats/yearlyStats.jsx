import { useState, useEffect } from "react";
import YearlyStatsBody from "./yearlyStatsBody";
import YearlyStatsHeader from "./yearlyStatsHeader";
import { getYearlyStats } from "../../../misc/apiCalls";

export default function YearlyStats () {
    const curDate = new Date()
    const [ data, setData ] = useState()
    const [ year, setYear ] = useState(curDate.getFullYear())

    useEffect(() => {
        getYearlyStats(year).then((data) => setData(data))
    }, [year])

    return (
        <div className="report">
            <YearlyStatsHeader year={ year } setYear={ setYear }/>
            <YearlyStatsBody data={ data } />
        </div>
    )
}

const dummyData = {
    "expenses": "12000.00",
    "income": "14000.00",
    "savings": "2000.00",
    "budgetPercent": "85"
}