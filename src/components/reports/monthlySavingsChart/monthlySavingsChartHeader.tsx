import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents";

type MonthlySavingsChartHeaderType = {
    handlePeriodChange: (direction: "next" | "prev") => void
}

export default function MonthlySavingsChartHeader ({ 
    handlePeriodChange 
}: MonthlySavingsChartHeaderType): JSX.Element {
    return (
        <div className="mt-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label="Monthly Savings" />
            <NextArrow handleClick={ () => handlePeriodChange("next")} />
        </div>
    )
}