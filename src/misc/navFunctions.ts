import { NavigateFunction } from "react-router-dom";

export function navToConfirmDeleteCategory (
    navigate: NavigateFunction, 
    categoryId: string
): void {
    navigate("/confirmDeleteCategory", {
        state: {
            categoryId: categoryId
        }
    })
}