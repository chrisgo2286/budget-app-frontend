import { useState, useEffect } from "react";
import YearlyStatsBody from "./yearlyStatsBody";
import YearlyStatsHeader from "./yearlyStatsHeader";
import { getYearlyStats } from "../../../misc/apiCalls";
import { YearlyStatsTypes } from "./yearlyStatsTypes";

export default function YearlyStats (): JSX.Element {
    const curDate = new Date()
    const [ data, setData ] = useState<YearlyStatsTypes>()
    const [ year, setYear ] = useState<number>(curDate.getFullYear())

    function handleYearChange (direction: "next" | "prev") {
        const newYear = (direction === "next") ? year + 1 : year - 1;
        setYear(newYear);
    }
    
    useEffect(() => {
        getYearlyStats(year).then((data) => setData(data))
    }, [year])

    return (
        <div className="report">
            <YearlyStatsHeader 
                year={ year } 
                handleYearChange={ handleYearChange }
            />
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