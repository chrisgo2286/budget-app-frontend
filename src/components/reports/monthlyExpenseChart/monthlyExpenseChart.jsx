import { useState, useEffect } from "react";
import MonthlyExpenseChartBody from "./monthlyExpenseChartBody";
import MonthlyExpenseChartHeader from "./monthlyExpenseChartHeader";
import { getMonthlyExpenseChart } from "../../../misc/apiCalls";

export default function MonthlyExpenseChart () {
    const curDate = new Date()
    const [ data, setData ] = useState([])
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear(),
    })

    useEffect(() => {
        getMonthlyExpenseChart(period).then((data) => setData(data))
    }, [period])
    
    return (
        <div className="report">
            <MonthlyExpenseChartHeader setPeriod={ setPeriod }/>
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