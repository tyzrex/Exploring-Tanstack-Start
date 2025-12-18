import z from "zod";

export const signUpSchema = z.object({
    fullName: z.string({
        required_error: "Full name is required",
    }).min(2, "Full name must be at least 2 characters"),
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    password: z.string({
        required_error: "Password is required",
    }).min(8, "Password must be at least 8 characters").refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter",
    }).refine((val) => /[a-z]/.test(val), {
        message: "Password must contain at least one lowercase letter",
    }).refine((val) => /[0-9]/.test(val), {
        message: "Password must contain at least one number",
    }).refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
        message: "Password must contain at least one special character",
    }),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;