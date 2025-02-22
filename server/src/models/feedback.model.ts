import mongoose, {Document} from "mongoose";

export interface IFeedback extends Document {
    title: string;
    category: string;
    description: string;
}

const feedbackSchema = new mongoose.Schema<IFeedback>({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
})

export const Feedback = mongoose.model<IFeedback>("Feedback", feedbackSchema);