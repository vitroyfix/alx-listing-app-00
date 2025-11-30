import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.8,
    category: ["Luxury", "Pool", "Ocean View"],
    price: 350,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "6",
    },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    discount: "",
    description: "Experience the ultimate luxury in this oceanfront villa. Featuring a private infinity pool, direct beach access, and modern amenities, this is the perfect getaway for families or groups.",
    reviews: [
      {
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        rating: 5,
        comment: "Amazing place! The view is breathtaking.",
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Jane Smith",
        rating: 4,
        comment: "Great amenities, but the wifi was a bit slow.",
      },
    ],
  },
];