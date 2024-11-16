import { Stat } from "../miscReportComponents"
import { YearlyStatsTypes } from "../../../misc/hooks"

export default function YearlyStatsBody ({ 
    data 
}: { data: YearlyStatsTypes}): JSX.Element {
    return (
        <div className="flex flex-col items-center px-4">
            <Stat label="Spent" dataCy="yearly-stats-expense" data={ data?.expenses } />
            <Stat label="Earned" dataCy="yearly-stats-income" data={ data?.income } />
            <Stat label="Saved" dataCy="yearly-stats-savings" data={ data?.savings } />
            <Stat label="Percent of Budget" dataCy="yearly-stats-percent" data={ data?.budgetPercent } />
        </div>
    )
}