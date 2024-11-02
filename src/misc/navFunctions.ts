import { NavigateFunction } from "react-router-dom";
import { LedgerTypes } from "../components/ledger/ledgerTypes";

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

export function navToUpdateLedgerItem (
    navigate: NavigateFunction,
    ledgerItem: LedgerTypes
): void {
    navigate("/updateLedgerItem", {
        state: {
            ledgerItem: ledgerItem
        }
    })
}