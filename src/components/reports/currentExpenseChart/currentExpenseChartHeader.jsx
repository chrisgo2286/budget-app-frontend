import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents";

export default function CurrentExpenseChartHeader ({ monthName, handlePeriodChange }) {
    return (
        <div className="mt-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label={ `${monthName} Expenses` } />
            <NextArrow handleClick={ () => handlePeriodChange("next")} />
        </div>
    )
}