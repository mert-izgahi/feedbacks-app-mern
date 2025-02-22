import { cn } from "../helpers/utils"
import Container from "./shared/container"
import { Button } from "./shared/button"
import { FormInput } from "./shared/form"
import { Menu, MenuContent, MenuItem } from "./shared/menu"
import { feedbackCategories } from "../constants/feedbak-categories"
import { useCallback, useState } from "react"
import useFeedbacksStore from "../hooks/use-feedbacks-store"
import {LuLayers} from "react-icons/lu"
interface FeedbacksSearchAndFilterProps {
    className?: string
}

function FeedbacksSearchAndFilter(props: FeedbacksSearchAndFilterProps) {
    const [open, setOpen] = useState(false);
    const onOpenChange = useCallback(() => {
        setOpen((open) => !open);
    }, [open]);

    const { filterFeedbacks, searchFeedbacks } = useFeedbacksStore();

    const [query, setQuery] = useState("");

    const onSearch = (e: React.FormEvent) => {
        e.preventDefault();
        searchFeedbacks(query);
    }


    return (
        <Container className={cn("flex items-center justify-between rounded h-16 border border-stone-200 dark:border-stone-800", props.className!)}>
            <form className="flex items-center gap-2" onSubmit={onSearch}>
                <FormInput type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <Button size="sm" variant="outline" type="submit">Search</Button>
            </form>

            <Menu>
                <Button size={"sm"} variant={"outline"} type="button" onClick={onOpenChange}>
                    Select Category
                </Button>

                <MenuContent open={open} onClose={() => setOpen(false)}>
                    <MenuItem onClick={() => filterFeedbacks("all")} className="flex items-center gap-2">
                        <LuLayers />
                        All
                    </MenuItem>
                    {feedbackCategories.map((category) => (
                        <MenuItem key={category.label} onClick={() => {
                            filterFeedbacks(category.value)
                            setOpen(false)
                        }} className="flex items-center gap-2">
                            {category.icon} {category.label}
                        </MenuItem>
                    ))}
                </MenuContent>
            </Menu>
        </Container>
    )
}

export default FeedbacksSearchAndFilter