import { NewCategoryTypes } from "../newCategory/newCategoryTypes"

export type BudgetFilterTypes = {
    month: string | number,
    year: string | number
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
    categories: NewCategoryTypes[],
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>,
    setErrors: React.Dispatch<React.SetStateAction<string[]>>
}