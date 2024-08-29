export type CurrentExpenseChartTypes = CurrentExpenseItemTypes[]

type CurrentExpenseItemTypes = {
    name: string,
    amount: number
}

export type CurrentExpenseChartHeaderProps = {
    monthName: string,
    handlePeriodChange: (direction: "next" | "prev") => void 
}