import React from "react";
import { cn } from "../../helpers/utils";

// Form Field
interface FormFieldProps extends React.InputHTMLAttributes<HTMLDivElement> {
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={cn("flex flex-col gap-1.5 w-full", className!)} />
    )
})


// Form Label
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    className?: string
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(({ className, ...props }, ref) => {
    return (
        <label ref={ref} {...props} className={cn("text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className!)} />
    )
})



// Form Message
interface FormMessageProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
}

const FormMessage = React.forwardRef<HTMLDivElement, FormMessageProps>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={cn("text-sm text-red-600", className!)} />
    )
})


// Text Input
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    invalid?: boolean
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
    const { className, invalid, ...rest } = props
    return (
        <input className={cn("w-full text-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded px-2 py-1 h-9 text-stone-900 dark:text-stone-50 placeholder:text-stone-900/50 dark:placeholder:text-stone-50/50 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-orange-700", className!, invalid ? "border-red-500" : "")} {...rest} ref={ref} />
    )
})

// TextArea
interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string
    invalid?: boolean
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>((props, ref) => {
    const { className, invalid, ...rest } = props
    return (
        <textarea className={cn("w-full text-sm bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded px-2 py-1 text-stone-900 dark:text-stone-50 placeholder:text-stone-900/50 dark:placeholder:text-stone-50/50 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-orange-700", className!, invalid ? "border-red-500" : "")} {...rest} ref={ref!} />
    )
})




export { FormField, FormLabel, FormInput, FormMessage, FormTextarea }