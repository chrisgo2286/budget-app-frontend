import { useState } from "react";
import YearlyStatsBody from "./yearlyStatsBody";
import YearlyStatsHeader from "./yearlyStatsHeader";
import { useGetYearlyStats } from "../../../misc/hooks";

export default function YearlyStats (): JSX.Element {
    const curDate = new Date()
    const [ year, setYear ] = useState<number>(curDate.getFullYear())
    const { data } = useGetYearlyStats(year)

    function handleYearChange (direction: "next" | "prev") {
        const newYear = (direction === "next") ? year + 1 : year - 1;
        setYear(newYear);
    }
    
    return (
        <div className="report" data-cy="yearly-stats-report">
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