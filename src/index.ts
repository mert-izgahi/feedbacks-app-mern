import express, { Request, Response } from "express";
import configs from "./configs";
import cors from "cors";
import path from "path";

// Lib
import { connectDB } from "./lib/connect-db";
// Routers
import { feedbackRouter } from "./routers/feedback.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use("/api/feedbacks", feedbackRouter);

// Deployment
if (process.env.NODE_ENV === "production") {
  const staticPath = path.join(__dirname, "../public");
  console.log({ staticPath });
  app.use(express.static(staticPath));
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
}

app.listen(configs.PORT, async () => {
  await connectDB(configs.DATABASE_URI!);
  console.log(`Server is running on port ${configs.PORT}`);
});
