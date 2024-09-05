import { useEffect, useState } from "react";
import { getCategories, getBudgetItems, getLedgerItems } from "./apiCalls";
import { NewCategoryTypes } from "../components/budget/newCategory/newCategoryTypes";
import { BudgetFilterTypes, BudgetItemTypes } from "../components/budget/budgetTypes";
import { UseGetCategoryTypes, UseGetBudgetTypes, UseGetLedgerTypes } from "./miscTypes";
import { cleanFilters } from "./miscFunctions";
import { FilterTypes, LedgerTypes } from "../components/ledger/ledgerTypes";

export function useGetCategories (): UseGetCategoryTypes {
    const [ categories, setCategories ] = useState<NewCategoryTypes[]>([])  
    const [ categoryUpdate, setCategoryUpdate ] = useState<boolean>(false)

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    },[categoryUpdate])

    return { categories, setCategoryUpdate }
}

export function useGetBudget (filters: BudgetFilterTypes): UseGetBudgetTypes {
    const [ budget, setBudget ] = useState<BudgetItemTypes[]>([])
    const [ budgetUpdate, setBudgetUpdate ] = useState<boolean>(false)

    useEffect(() => {
        const newFilters = cleanFilters(filters);
        getBudgetItems(newFilters).then((data) => setBudget(data))
    },[budgetUpdate, filters])
    
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

