import { Stat } from "../miscReportComponents"
import { YearlyStatsTypes } from "./yearlyStatsTypes"

export default function YearlyStatsBody ({ 
    data 
}: { data: YearlyStatsTypes}): JSX.Element {
    return (
        <div className="flex flex-col items-center px-4">
            <Stat label="Spent" data={ data?.expenses } />
            <Stat label="Earned" data={ data?.income } />
            <Stat label="Saved" data={ data?.savings } />
            <Stat label="Percent of Budget" data={ data?.budgetPercent } />
        </div>
    )
}