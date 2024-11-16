import { useState, useEffect } from "react";
import MonthlySavingsChartHeader from "./monthlySavingsChartHeader";
import MonthlySavingsChartBody from "./monthlySavingsChartBody";
import { getCurrentPeriod, getNewPeriod } from "../../../misc/miscFunctions";
import { PeriodTypes } from "../reports";
import { useGetMonthlySavingsChart } from "../../../misc/hooks";

export default function MonthlySavingsChart (): JSX.Element {
    const [ period, setPeriod ] = useState<PeriodTypes>(getCurrentPeriod())
    const { data } = useGetMonthlySavingsChart(period)

    function handlePeriodChange (direction: "next" | "prev"): void {
        setPeriod(getNewPeriod(period, direction))
    }

    return (
        <div className="report" data-cy="monthly-savings-report">
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