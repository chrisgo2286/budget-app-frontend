import { useState, useEffect } from "react";
import MonthlySavingsChartHeader from "./monthlySavingsChartHeader";
import MonthlySavingsChartBody from "./monthlySavingsChartBody";

export default function MonthlySavingsChart () {
    const curDate = new Date()
    const [ data, setData ] = useState([])
    const [ period, setPeriod ] = useState({
        month: curDate.getMonth() + 1,
        year: curDate.getFullYear(),
    })

    useEffect(() => {
        setData(dummyData)
    }, [period])

    return (
        <div className="report">
            <MonthlySavingsChartHeader setPeriod={ setPeriod } />
            <MonthlySavingsChartBody data={ data }/>
        </div>
    )
}

const dummyData = [
    {"name": "August", "amount": 100},
    {"name": "July", "amount": 0},
    {"name": "June", "amount": 50},
    {"name": "May", "amount": 150},
    {"name": "April", "amount": 50},
    {"name": "March", "amount": 75}
]