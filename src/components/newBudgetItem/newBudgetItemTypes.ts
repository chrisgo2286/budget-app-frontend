import { BudgetItemTypes } from "../budget/budgetTypes"
import { CategoriesType } from "../newCategory/newCategoryTypes"

export type NewBudgetItemTypes = {
    owner?: number,
    category: string,
    amount: string
}

export type NewBudgetItemProps = {
    budget: BudgetItemTypes[], 
    categories: CategoriesType,
    setErrors: React.Dispatch<React.SetStateAction<string[]>>,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}

