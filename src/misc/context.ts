import { createContext } from "react";
import { 
    CategoriesContextType, 
    UserContextType, 
    BudgetContextType, 
    LedgerContextType,
    BudgetFiltersContextType,
    ErrorsContextType,
    LedgerFilterContextType,
    BudgetPeriodContextType,
    FileImportDataContextType
} from "./miscTypes";
import { DefaultBudget } from "../components/budget/budgetTypes";

export const UserContext = createContext<UserContextType>({
    user: {
        username: "",
        isLoggedIn: false,
        token: ""
    },
    setUser: () => console.log("Oops, default value used!")
});

export const CategoriesContext = createContext<CategoriesContextType>({
    categories: [],
    setCategoryUpdate: () => console.log("Ooops, categories not loaded!")
})

export const BudgetContext = createContext<BudgetContextType>({
    budget: DefaultBudget,
    setBudgetUpdate: () => console.log("Ooops, budget not loaded!")
})

export const LedgerContext = createContext<LedgerContextType>({
    ledger: [],
    setLedgerUpdate: () => console.log("Ooops, legder not loaded!")
})

export const BudgetFiltersContext = createContext<BudgetFiltersContextType>({
    filters: { month: 1, year: 2024},
    setFilters: () => console.log("Ooops, default value used!")
})

export const ErrorsContext = createContext<ErrorsContextType>({
    errors: [],
    setErrors: () => console.log("Ooops, default value used!")
})

export const LedgerFiltersContext = createContext<LedgerFilterContextType>({
    filters: {
        startDate: "",
        endDate: "",
        category: "",
        type: ""
    },
    setFilters: () => console.log("Ooops, default value used!")
})

export const BudgetPeriodContext = createContext<BudgetPeriodContextType>({
    period: { month: 1, year: 2024 },
    setPeriod: () => console.log("Ooops, default value used!")
})

export const FileImportDataContext = createContext<FileImportDataContextType>({
    parsedData: []
})