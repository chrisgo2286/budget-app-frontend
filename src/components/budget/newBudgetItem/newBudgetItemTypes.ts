import { BudgetItemTypes } from "../budgetTypes"
import { CategoriesType, NewCategoryTypes } from "../newCategory/newCategoryTypes"

export type NewBudgetItemTypes = {
    owner?: number,
    month?: number,
    year?: number,
    category: string,
    amount: string
}
