import { z } from "zod";

const DeleteCategorySchema = z.string()
    .min(1, { message: "Please choose a valid category!"})
    .refine((value) => value !== "Category", {
        message: "Please choose a valid category!"
    })

export function validateDeleteCategory (category: string) {
    const result = DeleteCategorySchema.safeParse(category)
    if (result.success) {
        return "Valid"
    }
    return result.error.issues.map((issue) => issue.message)
}