import { useContext } from "react"
import { PrevArrow, NextArrow, ReportHeader } from "../reports/miscReportComponents"
import { BudgetPeriodContext } from "../../misc/context"
import { monthNumToName } from "../../misc/miscFunctions"
import { BudgetHeaderProps } from "./budgetTypes"

export default function BudgetHeader ({ handlePeriodChange }: BudgetHeaderProps): JSX.Element {

    const { period } = useContext(BudgetPeriodContext)

    return (
        <div className="mt-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label={ `${monthNumToName(period.month)} ${period.year} Budget` } />
            <NextArrow handleClick={ () => handlePeriodChange("next")} />
        </div>
    )
}