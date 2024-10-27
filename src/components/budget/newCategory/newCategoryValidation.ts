import { z } from "zod";
import { NewCategoryTypes } from "./newCategory";

const CategorySchema = z.object({
    name: z
        .string()
        .min(1, { message: "Please enter a category name!" })
        .refine(value => value !== "Category", {
            message: "Please enter a valid category name!"
        }),
    type: z
        .string()
        .min(1, { message: "Please choose a type!" })
})

export function validateCategory (fields: NewCategoryTypes, categories: string[]) {
    const isDuplicateValue = categories.includes(fields.name)
    const result = CategorySchema.safeParse(fields)
    if (result.success && !isDuplicateValue) {
        return "Valid"
    } else if (result.success && isDuplicateValue) {
        return ["Please enter a unique category!"]
    } else if (!result.success && !isDuplicateValue) {
        return result.error.issues.map((issue) => issue.message)
    } else if (result.error) {
        return result.error.issues.map((issue) => issue.message).concat([
            "Please enter a unique category!"
        ])
    }

}