import { StoredContent } from "./storedContent";

export interface Parser {
  sourceId: string;
  getResults: (page: number) => Promise<StoredContent[]>;
}
