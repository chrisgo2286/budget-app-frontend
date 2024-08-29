import { useState, useEffect } from "react";
import CurrentExpenseChartBody from "./currentExpenseChartBody";
import CurrentExpenseChartHeader from "./currentExpenseChartHeader";
import { monthNumToName, getCurrentPeriod, getNewPeriod } from "../../../misc/miscFunctions";
import { getCurrentExpenseChart } from "../../../misc/apiCalls";
import { CurrentExpenseChartTypes } from "./currentExpenseChartTypes";
import { PeriodTypes } from "../reportTypes";

export default function CurrentExpenseChart (): JSX.Element {
    const [ data, setData ] = useState<CurrentExpenseChartTypes>([])
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())

    useEffect(() => {
        getCurrentExpenseChart(period).then((data) => setData(data))
    }, [period])
    
    function handlePeriodChange (direction: "next" | "prev"): void {
        setPeriod(getNewPeriod(period, direction))
    }

    return (
        <div className="report">
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