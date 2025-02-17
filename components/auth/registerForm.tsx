"use client"

import CardWrapper from "./cardWrapper"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { RegisterSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { z } from "zod"
import { useFormStatus } from "react-dom"
import { useState } from "react"


const RegisterForm = () => {
    const[loading, setLoading] = useState(false)
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: ""
        }
    })
    const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
        setLoading(true)
        console.log(data)
    }

    const { pending } = useFormStatus()
  return (
    <CardWrapper
    title= 'Create an Account'
    label='Register'
    backButtonHref='/auth/login'
    backButtonLabel='Already have an account? Login here.'
    >
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} type="email" placeholder="samuelmukuha@gmail.com"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="name"
                    render = {({field})=>(
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Samuel Mukuha"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="password"
                    render = {({field})=>(
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} type="password" placeholder="******"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="confirmPassword"
                    render = {({field})=>(
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input {...field} type="confirmPassword" placeholder="******"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                </div>
                <Button className="w-full" disabled={pending}>
                    {loading ?'loading' : 'Register'}
                </Button>
            </form>
        </Form>
    </CardWrapper>
  )
}

export default RegisterForm
