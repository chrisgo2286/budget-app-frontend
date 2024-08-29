import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents";
import { CurrentExpenseChartHeaderProps } from "./currentExpenseChartTypes";

export default function CurrentExpenseChartHeader ({ 
    monthName, 
    handlePeriodChange 
}: CurrentExpenseChartHeaderProps): JSX.Element {
    return (
        <div className="mt-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label={ `${monthName} Expenses` } />
            <NextArrow handleClick={ () => handlePeriodChange("next")} />
        </div>
    )
}