import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(compression());
app.use(cors());

// Routes

// Default Handlers

app.use("*", (req, res) => {
  res.status(404).send({ msg: "not found" });
});

export default app;
