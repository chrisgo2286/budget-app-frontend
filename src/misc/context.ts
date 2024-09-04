import { createContext } from "react";
import { 
    CategoriesContextType, 
    UserContextType, 
    BudgetContextType, 
    LedgerContextType,
    BudgetFiltersContextType,
    ErrorsContextType,
    LedgerFilterContextType
} from "./miscTypes";

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
    budget: [],
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