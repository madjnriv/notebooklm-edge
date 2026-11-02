import express, { type Express } from "express";

const app: Express = express();

app.disable("x-powered-by");

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Welcome to ingestion service",
  });
});

export { app };
