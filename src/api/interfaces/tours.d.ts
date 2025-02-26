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

// Get Tour By Id

interface Itinerary {
  id: string;
  tourId: string;
  date: string;
  title: string;
  description: string;
  displayOrder: number;
}

interface Attraction {
  id: string;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  isFeatured: boolean;
  cityName: string;
}

interface Benefit {
  id: string;
  name: string;
  description: string;
}

interface Package {
  id: string;
  name: string;
  price: number;
  tourId: string;
  benefits: Benefit[];
}

interface TourType {
  id: number;
  name: string;
  icon: string;
}

interface ITour {
id?:string;
title?:string;
description?:string;
basePrice?:number;
startDate?:string;
endDate?:string;
agencyName?:string;
agencyLogoUrl?:string;
cityName?:string;
coverImageUrl?:string;
created?:string;
itineraries?:Itinerary[];
attractions?:Attraction[];
packages?:Package[];
tourTypes?:TourType[];
}
// id: string;
// title: string;
// description: string;
// basePrice: number;
// startDate: string;
// endDate: string;
// agencyName: string;
// agencyLogoUrl: string;
// cityName: string;
// coverImageUrl: string;
// created: string;
// itineraries: Itinerary[];
// attractions: Attraction[];
// packages: Package[];
// tourTypes: TourType[];