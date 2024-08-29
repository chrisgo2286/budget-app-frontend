import { BudgetFilterTypes } from "../budget/budgetTypes"

export type BudgetFilterProps = {
    filters: BudgetFilterTypes, 
    setFilters: React.Dispatch<React.SetStateAction<BudgetFilterTypes>>,
    setErrors: React.Dispatch<React.SetStateAction<string[]>>
}