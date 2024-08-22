import { useState, useEffect } from "react";
import MonthlyExpenseChartBody from "./monthlyExpenseChartBody";
import MonthlyExpenseChartHeader from "./monthlyExpenseChartHeader";
import { getMonthlyExpenseChart } from "../../../misc/apiCalls";
import { getCurrentPeriod, getNewPeriod } from "../../../misc/miscFunctions";

export default function MonthlyExpenseChart () {
    const [ data, setData ] = useState([])
    const [ period, setPeriod ] = useState(getCurrentPeriod())

    useEffect(() => {
        getMonthlyExpenseChart(period).then((data) => setData(data))
    }, [period])
    
    function handlePeriodChange (direction) {
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