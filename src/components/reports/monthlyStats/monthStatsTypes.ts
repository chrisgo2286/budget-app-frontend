export type MonthlyStatsTypes = {
    expenses: string,
    income: string,
    savings: string,
    budgetPercent: string
}

export type MonthlyStatsHeaderProps = {
    monthName: string, 
    handlePeriodChange: (direction: "next" | "prev") => void
}