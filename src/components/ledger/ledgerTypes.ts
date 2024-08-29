import { CategoriesType } from "../newCategory/newCategoryTypes"

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

export type LedgerFilterProps = {
    categories: CategoriesType, 
    filters: FilterTypes,
    setFilters: React.Dispatch<React.SetStateAction<LedgerTypes>>,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}

export type LedgerItemProps = {
    item: LedgerTypes,
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>
}

export type NewLedgerItemProps = {
    categories: CategoriesType, 
    setUpdateRequired: React.Dispatch<React.SetStateAction<boolean>>,
    setErrors: React.Dispatch<React.SetStateAction<string[]>>
}