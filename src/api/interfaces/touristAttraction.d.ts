interface TouristAttraction {
  items: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    isFeatured: boolean;
    cityId: number;
    cityName: string;
    latitude: number;
    longitude: number;
  }[]
}

interface ITouristAttraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isFeatured: boolean;
  cityId: number;
  cityName: string;
  latitude: number;
  longitude: number;
}