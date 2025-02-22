import { Button } from "./shared/button"
import { LuEllipsisVertical, LuPencil, LuTrash } from "react-icons/lu";
import { Menu, MenuContent, MenuItem } from "./shared/menu";
import { useCallback, useState } from "react";
import useFeedbacksStore from "../hooks/use-feedbacks-store";
interface FeedbackItemProps {
  _id: string
  title: string
  category: string
  description: string
}

function FeedbackItem({ _id, title, description, category }: FeedbackItemProps) {
  const [open, setOpen] = useState(false);
  const { setSelectedFeedback, deleteFeedback } = useFeedbacksStore()

  const onOpenChange = useCallback(() => {
    setOpen((open) => !open);
  }, [open]);

  return (
    <div className="flex items-center justify-between w-full bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-950 p-4">
      <div className="flex flex-col justify-start items-start space-y-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-xs border border-stone-100 bg-stone-200 dark:border-stone-700 dark:bg-stone-800 px-2 rounded-3xl">{category}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-row items-end space-x-2">
        <Menu>
          <Button size={"icon"} variant={"outline"} type="button" onClick={onOpenChange}>
            <LuEllipsisVertical />
          </Button>

          <MenuContent open={open} onClose={() => setOpen(false)}>
            <MenuItem onClick={() => setSelectedFeedback({ _id, title, description, category })}>
              <LuPencil className="mr-2" />
              Edit
            </MenuItem>

            <MenuItem onClick={() => deleteFeedback(_id)}>
              <LuTrash className="mr-2" />
              Delete
            </MenuItem>
          </MenuContent>
        </Menu>
      </div>
    </div>
  )
}

export default FeedbackItem