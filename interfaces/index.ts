export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Review {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
  reviews: Review[];
}