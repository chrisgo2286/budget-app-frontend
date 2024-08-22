import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents";

export default function MonthlyExpenseChartHeader ({ handlePeriodChange }) {
    return (
        <div className="mt-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label="Monthly Expenses" />
            <NextArrow handleClick={ () => handlePeriodChange("next")} />
        </div>
    )
}