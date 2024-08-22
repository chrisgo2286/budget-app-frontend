import { useState, useEffect } from "react";
import CurrentExpenseChartBody from "./currentExpenseChartBody";
import CurrentExpenseChartHeader from "./currentExpenseChartHeader";
import { monthNumToName, getCurrentPeriod, getNewPeriod } from "../../../misc/miscFunctions";
import { getCurrentExpenseChart } from "../../../misc/apiCalls";

export default function CurrentExpenseChart () {
    const [ data, setData ] = useState([])
    const [ period, setPeriod ] = useState(getCurrentPeriod())

    useEffect(() => {
        getCurrentExpenseChart(period).then((data) => setData(data))
    }, [period])
    
    function handlePeriodChange (direction) {
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