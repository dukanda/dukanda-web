interface ITourType {
  id: number;
  name: string;
  icon: string;
}

interface ITours {
  id?: string;
  title?: string;
  coverImageUrl?: string;
  startDate?: string;
  endDate?: string;
  agencyName?: string;
  cityName?: string;
  tourTypes?: ITourType[];
  agencyLogoUrl?: string;
  basePrice?: number;
  created?: string;
  description?: string;

}

interface IPublishedTours {
  items: ITours[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}