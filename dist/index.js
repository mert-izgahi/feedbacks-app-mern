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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = __importDefault(require("./configs"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// Lib
const connect_db_1 = require("./lib/connect-db");
// Routers
const feedback_router_1 = require("./routers/feedback.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api/feedbacks", feedback_router_1.feedbackRouter);
// Deployment
if (process.env.NODE_ENV === "production") {
    const staticPath = path_1.default.join(__dirname, "../public");
    console.log({ staticPath });
    app.use(express_1.default.static(staticPath));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.join(staticPath, "index.html"));
    });
}
app.listen(configs_1.default.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connect_db_1.connectDB)(configs_1.default.DATABASE_URI);
    console.log(`Server is running on port ${configs_1.default.PORT}`);
}));
