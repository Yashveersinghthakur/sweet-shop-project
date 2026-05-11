import express from "express";
import authRoutes from "./routes/auth";
import sweetsRoutes from "./routes/sweets";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetsRoutes);

export default app;
