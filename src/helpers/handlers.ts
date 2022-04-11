import { ErrorRequestHandler, RequestHandler } from "express";
import { logger } from "../utils/logger";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  logger.error(err.message);

  if (res.headersSent) {
    return;
  }

  res.status(500).send({ msg: "server error" });
};

export const badRouteHandler: RequestHandler = (_req, res) => {
  res.status(404).send({ msg: "not found" });
};
