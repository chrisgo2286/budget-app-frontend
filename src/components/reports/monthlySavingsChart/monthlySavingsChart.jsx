import { useState, useEffect } from "react";
import MonthlySavingsChartHeader from "./monthlySavingsChartHeader";
import MonthlySavingsChartBody from "./monthlySavingsChartBody";
import { getMonthlySavingsChart } from "../../../misc/apiCalls";
import { getCurrentPeriod, getNewPeriod } from "../../../misc/miscFunctions";

export default function MonthlySavingsChart () {
    const [ data, setData ] = useState([])
    const [ period, setPeriod ] = useState(getCurrentPeriod())

    useEffect(() => {
        getMonthlySavingsChart(period).then((data) => setData(data))
    }, [period])

    function handlePeriodChange (direction) {
        setPeriod(getNewPeriod(period, direction))
    }

    return (
        <div className="report">
            <MonthlySavingsChartHeader handlePeriodChange={ handlePeriodChange } />
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