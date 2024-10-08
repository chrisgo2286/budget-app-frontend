import { CategoriesType, NewCategoryTypes } from "../budget/newCategory/newCategoryTypes"

export type FilterTypes = {
    startDate: string,
    endDate: string, 
    category: string,
    type: string,
}

export type LedgerTypes = {
    id: string,
    date: string,
    category__name: string,
    category__type: string,
    amount: string
}

export type NewLedgerItemTypes = {
    owner?: number,
    date: string,
    category: string,
    amount: string
}

export type LedgerItemProps = {
    item: LedgerTypes
}