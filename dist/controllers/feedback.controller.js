"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeedbackById = exports.deleteFeedback = exports.updateFeedback = exports.createFeedback = exports.getAllFeedbacks = void 0;
const feedback_model_1 = require("../models/feedback.model");
const getAllFeedbacks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedbacks = yield feedback_model_1.Feedback.find();
        res.status(200).json(feedbacks);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching feedbacks" });
    }
});
exports.getAllFeedbacks = getAllFeedbacks;
const createFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedback = yield feedback_model_1.Feedback.create(req.body);
        res.status(201).json(feedback);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating feedback" });
    }
});
exports.createFeedback = createFeedback;
const updateFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedback = yield feedback_model_1.Feedback.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(feedback);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating feedback" });
    }
});
exports.updateFeedback = updateFeedback;
const deleteFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield feedback_model_1.Feedback.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Feedback deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting feedback" });
    }
});
exports.deleteFeedback = deleteFeedback;
const getFeedbackById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedback = yield feedback_model_1.Feedback.findById(req.params.id);
        res.status(200).json(feedback);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching feedback" });
    }
});
exports.getFeedbackById = getFeedbackById;
