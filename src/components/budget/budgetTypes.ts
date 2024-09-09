import { NewCategoryTypes } from "./newCategory/newCategoryTypes"

export type BudgetFilterTypes = {
    month: string | number,
    year: string | number
}

export type BudgetDataTypes = {
    variable_expense: {
        budget: string,
        ledger: string
    },
    fixed_expense: {
        budget: string,
        ledger: string,
    }
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
    "variable_expense": {
        "budget": "",
        "ledger": ""
    },
    "fixed_expense": {
        "budget": "",
        "ledger": ""
    },
    "income": {
        "budget": "",
        "ledger": "",
    },
    "items": []
}

