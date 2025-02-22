import React from "react";
import { cn } from "../../helpers/utils";

interface CategoryButtonProps {
    className?: string;
    label: string;
    icon: React.ReactNode;
    selected?: boolean;
    onSelect: () => void;
}

const CategoryButton = ({ className, label, icon, selected, onSelect }: CategoryButtonProps) => {
    return (
        <button
            type="button"
            className={cn(
                "flex items-center cursor-pointer gap-2 w-24 h-24 rounded flex-col justify-center text-sm  text-stone-900 dark:text-stone-50 transition-colors duration-200 ease-in-out hover:bg-orange-700 hover:text-white",
                className!,
                selected && "bg-orange-700 text-white"
            )}
            onClick={onSelect}
        >
            {icon}
            <span className="text-xs">{label}</span>
        </button>
    );
};

export {CategoryButton};