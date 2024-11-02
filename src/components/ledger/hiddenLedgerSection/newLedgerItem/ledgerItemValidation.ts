import { z } from "zod";
import { NewLedgerItemTypes } from "../../ledgerTypes";
import { UpdateLedgerItemTypes } from "../../updateLedgerItem/updateLedgerItem";

const LedgerItemSchema = z.object({
    date: z
        .string()
        .min(1, { message: "Please enter a date!"}),
    category: z
        .string()
        .min(1, { message: "Please choose a valid category!"})
        .refine((value) => value !== "Category", {
            message: "Please choose a valid category!"
        }),
    amount: z
        .number()
        .min(1, { message: "Please enter an amount!"})
})

export function validateLedgerItemFields (fields: NewLedgerItemTypes | UpdateLedgerItemTypes) {
    const result = LedgerItemSchema.safeParse(fields)
    if (result.success) {
        return "Valid"
    }
    return result.error.issues.map((issue) => issue.message)
}