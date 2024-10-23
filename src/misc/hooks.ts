import { useEffect, useState } from "react";
import { getCategories, getBudgetItems, getLedgerItems } from "./apiCalls";
import { NewCategoryTypes } from "../components/budget/newCategory/newCategoryTypes";
import { BudgetDataTypes, DefaultBudget } from "../components/budget/budgetTypes";
import { UseGetCategoryTypes, UseGetBudgetTypes, UseGetLedgerTypes } from "./miscTypes";
import { FilterTypes, LedgerTypes } from "../components/ledger/ledgerTypes";
import { PeriodTypes } from "../components/reports/reportTypes";

export function useGetCategories (): UseGetCategoryTypes {
    const [ categories, setCategories ] = useState<NewCategoryTypes[]>([])  
    const [ categoryUpdate, setCategoryUpdate ] = useState<boolean>(false)

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    },[categoryUpdate])

    return { categories, setCategoryUpdate }
}

export function useGetBudget (period: PeriodTypes): UseGetBudgetTypes {
    const [ budget, setBudget ] = useState<BudgetDataTypes>(DefaultBudget)
    const [ budgetUpdate, setBudgetUpdate ] = useState<boolean>(false)

    useEffect(() => {
        getBudgetItems(period).then((data) => setBudget(data))
        setBudgetUpdate(false)
    },[budgetUpdate, period])
    
    return { budget, setBudgetUpdate }
}

export function useGetLedger (
    filters: FilterTypes, 
    categories: NewCategoryTypes[]
): UseGetLedgerTypes {
    const [ ledger, setLedger ] = useState<LedgerTypes[]>([])
    const [ ledgerUpdate, setLedgerUpdate ] = useState<boolean>(false)

    useEffect(() => {
        getLedgerItems(filters, categories).then((ledger) => setLedger(ledger));
        setLedgerUpdate(false);
    }, [ledgerUpdate, filters])

    return { ledger, setLedgerUpdate }
}

export function useGetCategoryLedger (
    filters: FilterTypes,
    categories: NewCategoryTypes[]
): { ledger: LedgerTypes[]} {
    const [ ledger, setLedger ] = useState<LedgerTypes[]>([])

    useEffect(() => {
        getLedgerItems(filters, categories).then((ledger) => setLedger(ledger));
    }, [])

    return { ledger }
}

