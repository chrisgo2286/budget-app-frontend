import { useState, useEffect } from "react";
import MonthlyExpenseChartBody from "./monthlyExpenseChartBody";
import MonthlyExpenseChartHeader from "./monthlyExpenseChartHeader";
import { getMonthlyExpenseChart } from "../../../misc/apiCalls";
import { getCurrentPeriod, getNewPeriod } from "../../../misc/miscFunctions";
import { MonthlyExpenseChartTypes } from "./monthlyExpenseChartTypes";
import { PeriodTypes } from "../reportTypes";

export default function MonthlyExpenseChart (): JSX.Element {
    const [ data, setData ] = useState<MonthlyExpenseChartTypes>([])
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())

    useEffect(() => {
        getMonthlyExpenseChart(period).then((data) => setData(data))
    }, [period])
    
    function handlePeriodChange (direction: "next" | "prev"): void {
        setPeriod(getNewPeriod(period, direction))
    }

    return (
        <div className="report">
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