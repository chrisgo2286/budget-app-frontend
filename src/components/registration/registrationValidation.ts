import { z } from "zod";
import { RegistrationTypes } from "./registration";

const RegistrationSchema = z.object({
    username: z
        .string()
        .min(8, { message: "Username must be 8 characters or more!"}),
    password1: z
        .string()
        .min(8, { message: "Password must be 8 characters or more!"}),
    password2: z
        .string()
        .min(1, { message: "Please reenter your password!"})
}).refine(schema => schema.password1 === schema.password2, 
    { message: "Both passwords must match!" },
)

export function validateRegistration (fields: RegistrationTypes) {
    const result = RegistrationSchema.safeParse(fields)
    if (result.success) {
        return "Valid"
    }
    return result.error.issues.map((issue) => issue.message)
}