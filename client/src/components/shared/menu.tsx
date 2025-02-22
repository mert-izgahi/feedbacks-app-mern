import React, { useRef } from "react";
import { cn } from "../../helpers/utils";

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> { }



interface MenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean
    onClose?: () => void
}

interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean
}


const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={cn("relative", className!)} />
    )
})
Menu.displayName = "Menu"




const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(({ className, ...props }, ref) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const combinedRef = ref || menuRef as any;
    // Handle Click Outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log("clicked outside");
            
            if (combinedRef.current && !combinedRef.current.contains(event.target as Node)) {
                props.onClose?.()
            }
        }
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [combinedRef]);

    return (
        <div ref={menuRef} {...props} className={cn("min-w-[8rem] absolute z-50 origin-top-right translate-y-2 right-0 bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-md p-1 shadow", className!, {
            "hidden": !props.open
        })} />
    )
})
MenuContent.displayName = "MenuContent"

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className={cn("relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-stone-100 dark:focus:bg-stone-800 cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-800", className!)} />
    )
})
MenuItem.displayName = "MenuItem"


export { Menu, MenuContent, MenuItem }