import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents"

export default function MonthlyStatsHeader ({ monthName, handlePeriodChange }) {
    return (
        <div className="my-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label={ `${monthName} Stats`} />
            <NextArrow handleClick={ () => handlePeriodChange("next")}/>
        </div>
    )
}