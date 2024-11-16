import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents"

export type MonthlyStatsHeaderProps = {
    monthName: string, 
    handlePeriodChange: (direction: "next" | "prev") => void
}

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