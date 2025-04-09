

interface News {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  isFeatured: boolean;
  publishedAt: string | null;
  publishedByName: string | null;
  viewCount: number;
}