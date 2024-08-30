import { PrevArrow, NextArrow, ReportHeader } from "../miscReportComponents";
import { MonthlyExpenseChartHeaderProp } from "./monthlyExpenseChartTypes";

export default function MonthlyExpenseChartHeader ({ 
    handlePeriodChange 
}: MonthlyExpenseChartHeaderProp ): JSX.Element {
    return (
        <div className="mt-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label="Monthly Expenses" />
            <NextArrow handleClick={ () => handlePeriodChange("next")} />
        </div>
    )
}