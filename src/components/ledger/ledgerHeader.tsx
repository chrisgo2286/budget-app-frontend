import { PrevArrow, NextArrow, ReportHeader } from "../reports/miscReportComponents"
import { monthNumToName } from "../../misc/miscFunctions"
import { useContext } from "react"
import { LedgerFiltersContext } from "../../misc/context"

type LedgerHeaderProps = {
    handlePeriodChange: (dir: "prev" | "next") => void
}

export default function LedgerHeader ({ handlePeriodChange }: LedgerHeaderProps): JSX.Element {

    const { filters } = useContext(LedgerFiltersContext)

    return (
        <div className="mt-4 flex justify-between">
            <PrevArrow handleClick={ () => handlePeriodChange("prev")} />
            <ReportHeader label={ `${monthNumToName(parseInt(filters.month))} ${filters.year} Ledger` } />
            <NextArrow handleClick={ () => handlePeriodChange("next")} />
        </div>
    )
}