import { Request, Response } from "express";
import { Feedback } from "../models/feedback.model";

export const getAllFeedbacks = async (req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching feedbacks" });
  }
};

export const createFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(201).json(feedback);
  } catch (error: any) {
    res.status(500).json({ message: "Error creating feedback" });
  }
};

export const updateFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(feedback);
  } catch (error: any) {
    res.status(500).json({ message: "Error updating feedback" });
  }
};

export const deleteFeedback = async (req: Request, res: Response) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Error deleting feedback" });
  }
};

export const getFeedbackById = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    res.status(200).json(feedback);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching feedback" });
  }
};