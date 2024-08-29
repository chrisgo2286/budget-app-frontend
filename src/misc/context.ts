import { createContext } from "react";
import { UserTypes } from "./miscTypes";

export type UserContextType = {
    user: UserTypes,
    setUser: React.Dispatch<React.SetStateAction<UserTypes>>
}

export const UserContext = createContext<UserContextType>({
    user: {
        username: "",
        isLoggedIn: false,
        token: ""
    },
    setUser: () => console.log("Oops, default value used!")
});
