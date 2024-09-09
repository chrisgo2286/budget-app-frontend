import { NewCategoryTypes } from "../components/budget/newCategory/newCategoryTypes";
import { BudgetDataTypes, BudgetItemTypes } from "../components/budget/budgetTypes";
import { FilterTypes, LedgerTypes } from "../components/ledger/ledgerTypes";
import { BudgetFilterTypes } from "../components/budget/budgetTypes";
import { PeriodTypes } from "../components/reports/reportTypes";

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
    budget: BudgetDataTypes,
    setBudgetUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

export type UseGetLedgerTypes = {
    ledger: LedgerTypes[],
    setLedgerUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

export type UserContextType = {
    user: UserTypes,
    setUser: React.Dispatch<React.SetStateAction<UserTypes>>
}

export type CategoriesContextType = {
    categories: NewCategoryTypes[],
    setCategoryUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

export type BudgetContextType = {
    budget: BudgetDataTypes,
    setBudgetUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

export type LedgerContextType = {
    ledger: LedgerTypes[],
    setLedgerUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

export type BudgetFiltersContextType = {
    filters: BudgetFilterTypes,
    setFilters: React.Dispatch<React.SetStateAction<BudgetFilterTypes>>
}

export type ErrorsContextType = {
    errors: string[],
    setErrors: React.Dispatch<React.SetStateAction<string[]>>
}

export type ExpandIconTypes = {
    children: string,
    handleClick: () => void
}

export type LedgerFilterContextType = {
    filters: FilterTypes,
    setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>
}

export type BudgetPeriodContextType = {
    period: PeriodTypes,
    setPeriod: React.Dispatch<React.SetStateAction<PeriodTypes>>
}