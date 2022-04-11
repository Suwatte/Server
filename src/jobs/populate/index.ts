import { content } from "../../database";
import { logger } from "../../utils/logger";
import { sources } from "./sources";
export default async function populate() {
  let iteration = 0;
  for (const source of sources) {
    while (iteration <= 100) {
      try {
        const results = await source.getResults(iteration);
        results.forEach(async (res) => {
          content
            .upsert(res)
            .then((c) => {
              if (require.main === module) {
                logger.info(`Added ${res.title}`);
              }
            })
            .catch((err) => {
              logger.error(err.message);
            });
        });
      } catch (error: any) {
        logger.error(error.message);
        break;
      }
      logger.debug(`Iteration Complete : ${iteration}`);

      await new Promise((r) => setTimeout(r, 2000));

      iteration++;
    }
  }

  logger.info("DB Population Complete");
}

if (require.main === module) {
  main();
}

async function main() {
  populate();
}
