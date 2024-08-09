import { z } from "zod"

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(1,{
        message: "Please enter your name"
    }),
    password: z.string().min(6,{
        message: "Password must be atleast 6 characters"
    }),
    confirmPassword: z.string().min(6,{
        message: "Password must be atleast 6 characters"
    })

})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6, {
        message: "Please enter a valid email address"
    })
})