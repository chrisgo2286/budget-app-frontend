import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents"
import { MonthlyStatsHeaderProps } from "./monthStatsTypes"

export default function MonthlyStatsHeader ({ 
    monthName, 
    handlePeriodChange 
}: MonthlyStatsHeaderProps): JSX.Element {
    return (
        <div className="my-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label={ `${monthName} Stats`} />
            <NextArrow handleClick={ () => handlePeriodChange("next")}/>
        </div>
    )
}