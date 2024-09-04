import { UserTypes } from "./miscTypes";
import { NavigateFunction } from "react-router-dom";

export function updateLocalStorage (token: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
}

// export function updateUser (
//     token: string, 
//     username: string,
//     oldUser: UserTypes, 
//     setUser: React.Dispatch<React.SetStateAction<UserTypes>>
// ): void {
//     const newUser = {
//         username: username,
//         isLoggedIn: true,
//         token: token,
//     }
//     setUser({ ...oldUser, ...newUser });
// }

export function updateUser (
    newUser: UserTypes,
    setUser: React.Dispatch<React.SetStateAction<UserTypes>>
): void {
    setUser(prevState => ({ ...prevState, ...newUser })) 
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

export function updateLogin (
    newUser: UserTypes, 
    setUser: React.Dispatch<React.SetStateAction<UserTypes>>, 
    navigate: NavigateFunction
): void {
    updateLocalStorage(newUser.token, newUser.username)
    updateUser(newUser, setUser)
    navigate('/');
}