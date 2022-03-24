import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Jackets",
    description: "Get your Jackets now at Best Price. For Limited Period Only.",
    image:
      "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/feature-1.jpg?raw=true",
    },
  {
    _id: uuid(),
    categoryName: "Suitcases",
    description:
      "Get your Travel Bags now at Best Price. Offer only for Today!",
    image:
      "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/feature-3.jpg?raw=true",
  },
  {
    _id: uuid(),
    categoryName: "Backpacks",
    description: "Get your Hiking Bags now at Best Price. Grab it now.",
    image:
      "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/feature-2.jpg?raw=true",
  },
  {
    _id: uuid(),
    categoryName: "Travelling Shoes",
    description:
      "Get your Hiking Boots now at Best Price. For Limited Period Only.",
    image:
      "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/feature-4.jpg?raw=true",
  },
];
