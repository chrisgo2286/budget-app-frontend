import { BudgetItemTypes } from "../budget/budgetTypes"
import { CategoriesType, NewCategoryTypes } from "../newCategory/newCategoryTypes"

export type NewBudgetItemTypes = {
    owner?: number,
    category: string,
    amount: string
}

export type NewBudgetItemProps = {
    budget: BudgetItemTypes[], 
    categories: NewCategoryTypes[],
    setErrors: React.Dispatch<React.SetStateAction<string[]>>,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}

