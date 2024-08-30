export type YearlyStatsTypes = {
    expenses: string,
    income: string,
    savings: string,
    budgetPercent: string
}

export type YearlyStatsHeaderProps = {
    year: number, 
    handleYearChange: (direction: "next" | "prev") => void
}