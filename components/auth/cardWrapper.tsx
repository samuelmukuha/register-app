"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import AuthHeader from "./authHeader"
import BackButton from "./backButton"
  
interface CardWrapperProps {
    title: string
    label: string
    backButtonHref: string
    backButtonLabel: string
    children: React.ReactNode
}
const CardWrapper = ( {title, label, backButtonHref, backButtonLabel, children}: CardWrapperProps) => {
  return (
    <Card className="shadow-lg">
        <CardHeader>
            <AuthHeader label={label} title={title}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref}/>
        </CardFooter>
    </Card>
  )
}

export default CardWrapper
