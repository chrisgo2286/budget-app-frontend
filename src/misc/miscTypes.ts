import { NewCategoryTypes } from "../components/newCategory/newCategoryTypes";
import { BudgetItemTypes } from "../components/budget/budgetTypes";

export type UserTypes = {
    username: string;
    isLoggedIn: boolean;
    token: string;
}

export type ResponseType = {
    status: number,
    token: string
}

export type StatusType = {
    status: number
}

export type UseGetCategoryTypes = {
    categories: NewCategoryTypes[],
    setCategoryUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

export type UseGetBudgetTypes = {
    budget: BudgetItemTypes[],
    setBudgetUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

export type UserContextType = {
    user: UserTypes,
    setUser: React.Dispatch<React.SetStateAction<UserTypes>>
}

export type CategoriesContextType = {
    categories: NewCategoryTypes[],
    setCategoryUpdate: React.Dispatch<React.SetStateAction<boolean>>
}
