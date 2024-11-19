import { z } from "zod";
import { QueryFieldsTypes } from "./fileImport";

const QueryFieldsSchema = z.object({
    date: z
        .number({ message: "Date must be an integer greater than zero!"})
        .int({ message: "Date must be an integer!"})
        .gt(0, { message: "Date must be greater than zero!"}),
    description: z
        .number({ message: "Description must be an integer greater than zero!"})
        .int({ message: "Description must be an integer!"})
        .gt(0, { message: "Description must be greater than zero!"}),
    amount: z
        .number({ message: "Amount must be an integer greater than zero!"})
        .int({ message: "Amount must be an integer!"})
        .gt(0, { message: "Amount must be greater than zero!"}),
    isHeader: z
        .enum(["Yes", "No"])
})

export function validateQueryFields (fields: QueryFieldsTypes): string | string[] {
    const result = QueryFieldsSchema.safeParse(fields)
    if (result.success) {
        return "Valid"
    } else {
        return result.error.issues.map((issue) => issue.message)
    }
    
}