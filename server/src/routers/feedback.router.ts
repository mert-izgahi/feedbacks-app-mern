import { Router } from "express";
import { createFeedback, deleteFeedback, getAllFeedbacks, getFeedbackById, updateFeedback } from "../controllers/feedback.controller";

const router = Router();

router.get("/", getAllFeedbacks);
router.get("/:id", getFeedbackById);
router.post("/", createFeedback);
router.put("/:id", updateFeedback);
router.delete("/:id", deleteFeedback);

export {router as feedbackRouter}