export type MonthlyExpenseChartTypes = MonthlyExpenseItemTypes[]

type MonthlyExpenseItemTypes = {
    name: string,
    amount: number
}

export type MonthlyExpenseChartHeaderProp = {
    handlePeriodChange: (direction: "next" | "prev") => void
}