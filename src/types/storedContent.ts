export interface StoredContent {
  sourceId: string;
  contentId: string;
  title: string;
  coverImage: string;
  tags: StoredTag[];
  popularity: number;
}

export interface StoredTag {
  label: string;
  id: string;
  adult: boolean;
}
