import { useEffect, useState } from "react";
import { 
    getCategories, 
    getBudgetItems, 
    getLedgerItems,
    getCurrentExpenseChart, 
    getMonthlyExpenseChart,
    getMonthlySavingsChart,
    getMonthlyStats,
    getYearlyStats 
} from "./apiCalls";
import { NewCategoryTypes } from "../components/budget/newCategory/newCategory";
import { BudgetDataTypes, DefaultBudget } from "../components/budget/budgetTypes";
import { UseGetCategoryTypes, UseGetBudgetTypes, UseGetLedgerTypes } from "./miscTypes";
import { LedgerTypes } from "../components/ledger/ledgerTypes";
import { PeriodTypes } from "../components/reports/reports";
import { getCurrentYear, getCurrentMonth, getLastDay } from "./miscFunctions";
import { FilterTypes } from "../components/ledger/ledger";
import { UserTypes } from "./miscTypes";

export function useGetCategories (user: UserTypes): UseGetCategoryTypes {
    const [ categories, setCategories ] = useState<NewCategoryTypes[]>([])  
    const [ categoryUpdate, setCategoryUpdate ] = useState<boolean>(false)

    useEffect(() => {
        if (user.isLoggedIn) {
            getCategories().then((data) => setCategories(data))
        }
    },[categoryUpdate, user])

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
    
    function updateFilters (filters: FilterTypes): FilterTypes {
        if (filters.startDate === "" && filters.endDate === "") {
            const startDate = `${getCurrentYear()}-${getCurrentMonth()}-01`
            const endDate = `${getLastDay().getFullYear()}-${getLastDay().getMonth()}-${getLastDay().getDate()}`
            return { ...filters, "startDate": startDate, "endDate": endDate }
        }
        return filters
    }

    useEffect(() => {
        const newFilters = updateFilters(filters)
        getLedgerItems(filters, categories).then((ledger) => setLedger(ledger));
        setLedgerUpdate(false);
    }, [ledgerUpdate])

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

//REPORT HOOKS AND TYPES

export type CurrentExpenseItemTypes = {
    name: string,
    amount: number
}

export function useGetCurrentExpenseChart (
    period: PeriodTypes
): { data: CurrentExpenseItemTypes[] } {
    const [ data, setData ] = useState<CurrentExpenseItemTypes[]>([])

    useEffect(() => {
        getCurrentExpenseChart(period).then((data) => setData(data))
    }, [period])

    return { data }
}

export type MonthlyExpenseItemTypes = {
    name: string,
    amount: number
}

export function useGetMonthlyExpenseChart (
    period: PeriodTypes
): { data: MonthlyExpenseItemTypes[] } {
    const [ data, setData ] = useState<MonthlyExpenseItemTypes[]>([])

    useEffect(() => {
        getMonthlyExpenseChart(period).then((data) => setData(data))
    }, [period])

    return { data }
}

export type MonthlySavingsItemTypes = {
    name: string,
    amount: number
}

export function useGetMonthlySavingsChart (
    period: PeriodTypes
): { data: MonthlySavingsItemTypes[] } {
    const [ data, setData ] = useState<MonthlySavingsItemTypes[]>([])

    useEffect(() => {
        getMonthlySavingsChart(period).then((data) => setData(data))
    }, [period])

    return { data }
}

export type MonthlyStatsTypes = {
    expenses: string,
    income: string,
    savings: string,
    budgetPercent: string
}

export function useGetMonthlyStats (
    period: PeriodTypes
): { data: MonthlyStatsTypes } {
    const [ data, setData ] = useState<MonthlyStatsTypes>({
        expenses: "",
        income: "",
        savings: "",
        budgetPercent: ""
    })
    useEffect(() => {
        getMonthlyStats(period).then((data) => setData(data))
    }, [period])
    return { data }
}

export type YearlyStatsTypes = {
    expenses: string,
    income: string,
    savings: string,
    budgetPercent: string
}

export function useGetYearlyStats (
    year: number
): { data: YearlyStatsTypes } {
    const [ data, setData ] = useState<YearlyStatsTypes>({
        expenses: "",
        income: "",
        savings: "",
        budgetPercent: ""
    })
    useEffect(() => {
        getYearlyStats(year).then((data) => setData(data))
    }, [year])
    return { data }
}