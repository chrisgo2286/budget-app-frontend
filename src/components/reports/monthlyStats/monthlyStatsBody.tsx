import { Stat } from "../miscReportComponents"
import { MonthlyStatsTypes } from "../../../misc/hooks"

export default function MonthlyStatsBody ({ 
    data 
}: { data: MonthlyStatsTypes }): JSX.Element {
    return (
        <div className="flex flex-col items-center px-4">
            <Stat label="Spent" dataCy="monthly-stats-expense" data={ data?.expenses } />
            <Stat label="Earned" dataCy="monthly-stats-income" data={ data?.income } />
            <Stat label="Saved" dataCy="monthly-stats-savings" data={ data?.savings } />
            <Stat label="Percent of Budget" dataCy="monthly-stats-percent" data={ data?.budgetPercent } />
        </div>
    )
}