import { useEffect, useState } from "react";
import { getCategories, getBudgetItems } from "./apiCalls";
import { NewCategoryTypes } from "../components/newCategory/newCategoryTypes";
import { BudgetFilterTypes, BudgetItemTypes } from "../components/budget/budgetTypes";
import { UseGetCategoryTypes, UseGetBudgetTypes } from "./miscTypes";
import { cleanFilters } from "./miscFunctions";

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