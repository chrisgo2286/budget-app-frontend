import { BudgetItemTypes } from "../budget/budgetTypes"
import { NewCategoryTypes } from "../newCategory/newCategoryTypes"

export type BudgetItemProps = {
    budgetItem: BudgetItemTypes, 
    categories: NewCategoryTypes[],
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>,
    setErrors: React.Dispatch<React.SetStateAction<string[]>>
}

export type InputBudgetItemProps = {
    budgetItem: BudgetItemTypes,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>,
    setErrors: React.Dispatch<React.SetStateAction<string[]>>
}

export type SelectBudgetItemProps = {
    budgetItem: BudgetItemTypes,
    categories: NewCategoryTypes[],
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}