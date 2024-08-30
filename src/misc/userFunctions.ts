import { UserTypes } from "./miscTypes";

export function updateLocalStorage (token: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
}

export function updateUser (
    token: string, 
    username: string,
    oldUser: UserTypes, 
    setUser: React.Dispatch<React.SetStateAction<UserTypes>>
): void {
    const newUser = {
        username: username,
        isLoggedIn: true,
        token: token,
    }
    setUser({ ...oldUser, ...newUser });
}

export function clearUser (
    user: UserTypes, 
    setUser: React.Dispatch<React.SetStateAction<UserTypes>>
): void {
    localStorage.clear();
    const newUser = {
        username: '',
        isLoggedIn: false,
        token: ''
    }
    setUser({ ...user, ...newUser });
}