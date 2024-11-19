import { z } from "zod"
import { FilterTypes } from "../../ledger"

const LedgerFilterSchema = z.object({
    month: z.string(),
    year: z.string(),
    startDate: z
        .string()
        .length(0, { message: "Please enter a valid start date!"})
        .or(
            z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
                message: "Please enter a valid start date!"
            })
        ),
    endDate: z
        .string()
        .length(0, { message: "Please enter a valid start date!"})
        .or(
            z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
                message: "Please enter a valid end date!"
            })
        ),
    category: z
        .string()
        .refine((value) => value !== "Category", {
            message: "Please choose a valid category!"
        })
        .optional(),
    type: z
        .string()
        .refine((value) => value !== "Type", {
            message: "Please choose a valid type!"
        })
        .optional(),
})

export function validateLedgerFilter (fields: FilterTypes): string | string[] {
    const result = LedgerFilterSchema.safeParse(fields)
    if (result.success) {
        return "Valid"
    }
    return result.error.issues.map((issue) => issue.message)
}