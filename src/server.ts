import app from "./app";
import { logger } from "./utils/logger";
import { ENVIRONMENT, PORT } from "./utils/secrets";

const server = app.listen("PRT", () => {
  logger.info(
    `Suwatte Server is running on port ${PORT} in ${ENVIRONMENT} mode`
  );
});

export default server;
