import { createContext } from "react";
import { CategoriesContextType, UserContextType } from "./miscTypes";
import { NewCategoryTypes } from "../components/newCategory/newCategoryTypes";



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
    setCategoryUpdate: () => console.log("Ooops, categories not loaded")
})
