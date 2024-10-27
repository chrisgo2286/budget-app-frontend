import { z } from "zod";
import { LoginFieldsTypes } from "./login";

const LoginSchema = z.object({
    username: z
        .string()
        .min(1, { message: "Please enter your username!"}),
    password: z
        .string()
        .min(1, { message: "Please enter your password!"})
})

export function validateLogin (fields: LoginFieldsTypes) {
    const result = LoginSchema.safeParse(fields)
    if (result.success) {
        return "Valid"
    }
    return result.error.issues.map((issue) => issue.message)
}