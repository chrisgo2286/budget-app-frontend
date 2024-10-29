import { z } from "zod";
import { NewBudgetItemTypes } from "./newBudgetItem";
import { BudgetItemTypes } from "../budgetTypes";
import { categoryIsInBudget } from "../../../misc/miscFunctions";

const BudgetItemSchema = z.object({
    category: z
        .string()
        .min(1, { message: "Please choose a valid category!"})
        .refine((value) => value !== "Category", {
            message: "Please choose a valid category!"
        }),
    amount: z
        .string()
        .min(1, { message: "Please enter an amount!"})
})

export function validateBudgetItem (fields: NewBudgetItemTypes, budgetItems: BudgetItemTypes[]) {
    let errors = []
    const isDuplicateCategory = (categoryIsInBudget(fields.category, budgetItems))
    if (isDuplicateCategory) {
        errors.push("Please choose a unique category!")
    }
    const result = BudgetItemSchema.safeParse(fields)
    if (!result.success) {
        const newErrors = result.error.issues.map((issue) => issue.message)
        errors = newErrors.concat(errors)
    }
    
    if (result.success && !isDuplicateCategory) {
        return "Valid"
    } else {
        return errors
    } 
}