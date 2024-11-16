import { useState } from "react";
import MonthlyExpenseChartBody from "./monthlyExpenseChartBody";
import MonthlyExpenseChartHeader from "./monthlyExpenseChartHeader";
import { getCurrentPeriod, getNewPeriod } from "../../../misc/miscFunctions";
import { PeriodTypes } from "../reports";
import { useGetMonthlyExpenseChart } from "../../../misc/hooks";

export default function MonthlyExpenseChart (): JSX.Element {
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())
    const { data } = useGetMonthlyExpenseChart(period)
    
    function handlePeriodChange (direction: "next" | "prev"): void {
        setPeriod(getNewPeriod(period, direction))
    }

    return (
        <div className="report" data-cy="monthly-expense-report">
            <MonthlyExpenseChartHeader handlePeriodChange={ handlePeriodChange }/>
            <MonthlyExpenseChartBody data={ data }/>
        </div>
    )
}

const dummyData = [
    {"name": "August", "amount": 1200},
    {"name": "July", "amount": 1100},
    {"name": "June", "amount": 1050},
    {"name": "May", "amount": 1250},
    {"name": "April", "amount": 1150},
    {"name": "March", "amount": 1075}
]