export type MonthlySavingsChartTypes = MonthlySavingsItemTypes[]

type MonthlySavingsItemTypes = {
    name: string,
    amount: number
}

export type MonthlySavingsChartHeaderType = {
    handlePeriodChange: (direction: "next" | "prev") => void
}