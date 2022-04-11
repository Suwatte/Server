import { Content } from "@prisma/client";
import { database } from "../../helpers";
import { similar } from "../../queries/similar";

export const getSimilarTitles = async (
  sourceId: string,
  contentId: string,
  page: number
) => {
  // Get Content
  const content = await database.content.findUnique({
    where: {
      id: {
        sourceId,
        contentId,
      },
    },
    include: {
      linkedTags: true,
    },
  });

  if (!content) return [];

  // Get Tags
  let tagIds = content.linkedTags.map((v) => v.tagId);
  let offset = (page - 1) * 30;
  // Get matching source and in list
  let query = similar(content.sourceId, content.contentId, tagIds, offset);
  const value: Content & { pct: number }[] = await database.$queryRawUnsafe(
    query
  );
  return value;
};
