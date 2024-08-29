export type BudgetFilterTypes = {
    month: number | string,
    year: number | string
}

export type BudgetItemTypes = {
    id: string,
    category: string,
    type: string,
    budget_amount: string,
    actual_amount: string,
    percent: string
}

export type BudgetSectionProps = {
    section_type: string, 
    budget: BudgetItemTypes[],
    categories: string[],
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>,
    setErrors: React.Dispatch<React.SetStateAction<string[]>>
}