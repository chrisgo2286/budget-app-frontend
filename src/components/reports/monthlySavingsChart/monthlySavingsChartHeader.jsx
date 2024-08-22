import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents";

export default function MonthlySavingsChartHeader ({ handlePeriodChange }) {
    return (
        <div className="mt-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label="Monthly Savings" />
            <NextArrow handleClick={ () => handlePeriodChange("next")} />
        </div>
    )
}