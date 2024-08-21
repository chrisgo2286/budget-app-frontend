import { useState, useEffect } from "react";
import CurrentExpenseChartBody from "./currentExpenseChartBody";
import CurrentExpenseChartHeader from "./currentExpenseChartHeader";
import { monthNumToName } from "../../../misc/miscFunctions";
import { getCurrentExpenseChart } from "../../../misc/apiCalls";

export default function CurrentExpenseChart () {
    const curDate = new Date()
    const [ data, setData ] = useState([])
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear(),
    })

    useEffect(() => {
        getCurrentExpenseChart(period).then((data) => setData(data))
    }, [period])
    
    return (
        <div className="report">
            <CurrentExpenseChartHeader 
                monthName={ monthNumToName(period.month)}
                setPeriod={ setPeriod } />
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