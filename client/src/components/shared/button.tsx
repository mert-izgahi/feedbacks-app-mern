import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../helpers/utils"
import { Slot } from "@radix-ui/react-slot"
import React from "react";
import {LuLoader} from "react-icons/lu";

const buttonVariants = cva("flex items-center justify-center gap-1 text-sm font-semibold rounded cursor-pointer transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95 ", {
    variants: {
        variant: {
            default: "bg-orange-700 text-white hover:bg-orange-600/90 ",
            outline: "border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-50 hover:bg-stone-900/10 dark:hover:bg-stone-50/10",
            ghost: "bg-transparent",
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-2 rounded-md",
            lg: "h-11 px-8 rounded-md",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
    loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false,loading, ...rest }, ref) => {
        const Comp = asChild ? Slot : "button"

        if (!asChild) {
            return (
                <button disabled={rest.disabled || loading} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...rest}>
                    {loading && <LuLoader className="animate-spin" />}
                    {rest.children}
                </button>
            )
        }

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...rest}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
