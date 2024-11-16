import { useState } from "react";
import CurrentExpenseChartBody from "./currentExpenseChartBody";
import CurrentExpenseChartHeader from "./currentExpenseChartHeader";
import { monthNumToName, getCurrentPeriod, getNewPeriod } from "../../../misc/miscFunctions";
import { PeriodTypes } from "../reports";
import { useGetCurrentExpenseChart } from "../../../misc/hooks";

export default function CurrentExpenseChart (): JSX.Element {
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())
    const { data } = useGetCurrentExpenseChart(period)
    
    function handlePeriodChange (direction: "next" | "prev"): void {
        setPeriod(getNewPeriod(period, direction))
    }

    return (
        <div className="report" data-cy="current-expense-report">
            <CurrentExpenseChartHeader 
                monthName={ monthNumToName(period.month)}
                handlePeriodChange={ handlePeriodChange } />
            <CurrentExpenseChartBody data={ data }/>
        </div>
    )
}

const dummyData = [
    {"name": "Rent", "amount": 1000.00},
    {"name": "Grocery", "amount": 100.00},
    {"name": "Gas", "amount": 150.00},
    {"name": "Insurance", "amount": 75.00}
]