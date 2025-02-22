import {
    LuBug,
    LuCode,
    LuHeart,
    LuLightbulb,
} from "react-icons/lu";

export const feedbackCategories = [
    {
        label: "General",
        value: "general",
        icon: <LuLightbulb />,
    },
    {
        label: "Bug",
        value: "bug",
        icon: <LuBug />,
    },
    {
        label: "Feature",
        value: "feature",
        icon: <LuCode />,
    },
    {
        label: "Other",
        value: "other",
        icon: <LuHeart />,
    },
];