import { NewCategoryTypes } from "./newCategory/newCategoryTypes"

export type BudgetFilterTypes = {
    month: string | number,
    year: string | number
}

export type BudgetDataTypes = {
    expense: {
        budget: string,
        ledger: string
    },
    income: {
        budget: string,
        ledger: string
    },
    items: BudgetItemTypes[]
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
    section_type: string
}

export type BudgetHeaderProps = {
    handlePeriodChange: (direction: "prev" | "next") => void
}

export const DefaultBudget = {
    "expense": {
        "budget": "",
        "ledger": ""
    },
    "income": {
        "budget": "",
        "ledger": "",
    },
    "items": []
}

