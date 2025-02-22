
import { IFeedback } from "../helpers/types"
import Container from "./shared/container"
import FeedbackItem from "./feedback-item"

interface FeedbackListProps {
  feedbacks: IFeedback[]
}


function FeedbacksList({ feedbacks }: FeedbackListProps) {
  return (
    <Container className="flex flex-col gap-12 bg-stone-50 dark:bg-stone-900 py-12">
      {feedbacks && feedbacks.map((feedback) => (
        <FeedbackItem key={feedback._id} {...feedback} />
      ))}
    </Container>
  )
}

export default FeedbacksList