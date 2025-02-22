import { create } from "zustand";
import { IFeedback, IFeedbackArgs } from "../helpers/types";
import { api } from "../lib/axios";

interface FeedbacksStore {
  isLoading: boolean;
  isPending: boolean;
  error: string | null;
  mode: "create" | "update";
  feedbacks: IFeedback[];
  selectedFeedback: IFeedback | null;
  setSelectedFeedback: (feedback: IFeedback) => void;
  fetchFeedbacks: () => void;
  addFeedback: (feedback: IFeedbackArgs) => void;
  updateFeedback: (id: string, feedback: IFeedbackArgs) => void;
  deleteFeedback: (id: string) => void;
  filterFeedbacks: (category: string) => void;
  searchFeedbacks: (query: string) => void;
}

const useFeedbacksStore = create<FeedbacksStore>((set, get) => ({
  isLoading: false,
  isPending: false,
  error: null,
  mode: "create",
  feedbacks: [],
  selectedFeedback: null,
  setSelectedFeedback: (feedback) => {
    set({ selectedFeedback: feedback, mode: "update" });
  },
  fetchFeedbacks: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get("/feedbacks");
      set({ feedbacks: response.data });
    } catch (error: any) {
      console.log(error);
      set({ error: "Error fetching feedbacks" });
    } finally {
      set({ isLoading: false });
    }
  },
  addFeedback: async (feedback) => {
    set({ isLoading: true });
    try {
      const response = await api.post("/feedbacks", feedback);
      set({ feedbacks: [...get().feedbacks, response.data] });
    } catch (error: any) {
      console.log(error);
      set({ error: "Error adding feedback" });
    } finally {
      set({ isLoading: false });
    }
  },
  updateFeedback: async (id, feedback) => {
    set({ isLoading: true });
    try {
      const response = await api.put(`/feedbacks/${id}`, feedback);
      set({
        feedbacks: get().feedbacks.map((f) =>
          f._id === id ? response.data : f
        ),
      });
    } catch (error: any) {
      console.log(error);
      set({ error: "Error updating feedback" });
    } finally {
      set({ isLoading: false });
    }
  },
  deleteFeedback: async (id) => {
    set({ isLoading: true });
    try {
      await api.delete(`/feedbacks/${id}`);
      set({ feedbacks: get().feedbacks.filter((f) => f._id !== id) });
    } catch (error: any) {
      console.log(error);
      set({ error: "Error deleting feedback" });
    } finally {
      set({ isLoading: false });
    }
  },
  filterFeedbacks: (category) => {
    if (category === "all") {
      get().fetchFeedbacks();
      set({ feedbacks: get().feedbacks });
      return;
    }
    set({ feedbacks: get().feedbacks.filter((f) => f.category === category) });
  },

  searchFeedbacks: (query) => {
    if (query === "") {
      // Refetch
      get().fetchFeedbacks();
      set({ feedbacks: get().feedbacks });
      return;
    }
    set({
      feedbacks: get().feedbacks.filter((f) =>
        f.title.toLowerCase().includes(query.toLowerCase())
      ),
    });
  },
}));

export default useFeedbacksStore;
