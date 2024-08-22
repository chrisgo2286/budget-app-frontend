import { Stat } from "../miscReportComponents"

export default function MonthlyStatsBody ({ data }) {
    return (
        <div className="flex flex-col items-center px-4">
            <Stat label="Spent" data={ data?.expenses } />
            <Stat label="Earned" data={ data?.income } />
            <Stat label="Saved" data={ data?.savings } />
            <Stat label="Percent of Budget" data={ data?.budgetPercent } />
        </div>
    )
}