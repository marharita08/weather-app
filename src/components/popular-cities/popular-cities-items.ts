import { type PopularCity } from "@/types/popular-city.type";
import newYorkImage from "@/assets/new-york.png";
import londonImage from "@/assets/london.png";
import dubaiImage from "@/assets/dubai.png";
import parisImage from "@/assets/paris.png";

const popularCities: PopularCity[] = [
  {
    id: 5128581,
    name: "New York",
    image: newYorkImage
  },
  {
    id: 2643743,
    name: "London",
    image: londonImage
  },
  {
    id: 292223,
    name: "Dubai",
    image: dubaiImage
  },
  {
    id: 2988507,
    name: "Paris",
    image: parisImage
  }
];

export { popularCities };
