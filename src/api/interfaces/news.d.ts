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

interface NewsDetails {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string;
  gallery: string[];
  coverImageUrl: string;
  isFeatured: boolean;
  publishedAt: string | null;
  publishedByName: string | null;
  viewCount: number;
}