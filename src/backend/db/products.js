import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bags3.3.jpeg?raw=true",
    name: "Travel Bags",
    description:'Travel Bags at Best Deals!',
    alt: "bags",
    newPrice: 299,
    originalPrice: 499,
    isBestSeller: true,
    ratings: 2.6,
    brand: "arnisa",
    category: "Suitcases",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/allpack.jpg?raw=true",
    name: "Stylish Bags",
    description: "Stylish Bags at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2899,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 4.6,
    brand: "gucci",
    category: "Backpacks",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bagpack2.jpg?raw=true",
    name: "Hiking Bags",
    description: "Hiking Bags at Best Price!",
    alt:"bags",
    newPrice: 1999,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 3.5,
    brand: "arnisa",
    category: "Backpacks",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoes6.jpg?raw=true",
    name: "Travel Shoes",
    description:'Travel Bags at Best Deals!',
    alt: "bags",
    newPrice: 799,
    originalPrice: 1999,
    isBestSeller: true,
    ratings: 3.6,
    brand: "arnisa",
    category: "Shoes",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/boot5.jpg?raw=true",
    name: "Hiking Boots",
    description: "Stylish Bags at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2099,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 4,
    brand: "gucci",
    category: "Shoes",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bagpack3.jpg?raw=true",
    name: "Hiking Bags",
    description: "Hiking Bags at Best Price!",
    alt:"bags",
    newPrice: 999,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 3.2,
    brand: "arnisa",
    category: "Backpacks",
		inStock: false,
  }, 
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/jacket4.jpg?raw=true",
    name: "Stylish Jackets",
    description:'Travel Bags at Best Deals!',
    alt: "bags",
    newPrice: 3999,
    originalPrice: 5999,
    isBestSeller: true,
    ratings: 4.8,
    brand: "arnisa",
    category: "Jackets",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage1.jpg?raw=true",
    name: "Suitcases",
    description: "Stylish Bags at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2999,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 4.2,
    brand: "gucci",
    category: "Suitcases",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true",
    name: "Hiking Bags",
    description: "Hiking Bags at Best Price!",
    alt:"bags",
    newPrice: 1999,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 3.5,
    brand: "arnisa",
    category: "Suitcases",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoe4.2.jpeg?raw=true",
    name: "Travel Bags",
    description:'Travel Bags at Best Deals!',
    alt: "bags",
    newPrice: 299,
    originalPrice: 499,
    isBestSeller: true,
    ratings: 2.6,
    brand: "arnisa",
    category: "travel bags",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/jacket6.jpg?raw=true",
    name: "Combo Offer(Bags and Shoes)",
    description: "Stylish Bags at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2899,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 4.6,
    brand: "gucci",
    category: "travel bags",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoes9.jpg?raw=true",
    name: "Hiking Bags",
    description: "Hiking Bags at Best Price!",
    alt:"bags",
    newPrice: 1999,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 3.5,
    brand: "arnisa",
    category: "travel bags",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/nike.jpg?raw=true",
    name: "Travel Bags",
    description:'Travel Bags at Best Deals!',
    alt: "bags",
    newPrice: 299,
    originalPrice: 499,
    isBestSeller: true,
    ratings: 2.6,
    brand: "arnisa",
    category: "travel bags",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage.jpg?raw=true",
    name: "Combo Offer(Bags and Shoes)",
    description: "Stylish Bags at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2899,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 4.6,
    brand: "gucci",
    category: "travel bags",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/essentials.jpg?raw=true",
    name: "Hiking Bags",
    description: "Hiking Bags at Best Price!",
    alt:"bags",
    newPrice: 1999,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 3.5,
    brand: "arnisa",
    category: "travel bags",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoes7.jpg?raw=true",
    name: "Travel Bags",
    description:'Travel Bags at Best Deals!',
    alt: "bags",
    newPrice: 299,
    originalPrice: 499,
    isBestSeller: true,
    ratings: 2.6,
    brand: "arnisa",
    category: "travel bags",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoes8.jpg?raw=true",
    name: "Combo Offer(Bags and Shoes)",
    description: "Stylish Bags at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2899,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 4.6,
    brand: "gucci",
    category: "travel bags",
		inStock: false,
  },
   {
      _id: uuid(),
      img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/jacket5.jpg?raw=true",
      name: "Travel Bags",
      description:'Travel Bags at Best Deals!',
      alt: "bags",
      newPrice: 299,
      originalPrice: 499,
      isBestSeller: true,
      ratings: 2.6,
      brand: "arnisa",
      category: "travel bags",
      inStock:true,
    },
    {
      _id: uuid(),
      img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bagpack4.jpg?raw=true",
      name: "Combo Offer(Bags and Shoes)",
      description: "Stylish Bags at Best Deals! Grab it!",
      alt:"bags",
      newPrice: 2899,
      originalPrice: 3999,
      isBestSeller: true,
      ratings: 4.6,
      brand: "gucci",
      category: "travel bags",
      inStock: false,
    },
    {
      _id: uuid(),
      img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/nike1.jpg?raw=true",
      name: "Combo Offer(Bags and Shoes)",
      description: "Stylish Bags at Best Deals! Grab it!",
      alt:"bags",
      newPrice: 2899,
      originalPrice: 3999,
      isBestSeller: true,
      ratings: 4.6,
      brand: "gucci",
      category: "travel bags",
      inStock: false,
    },
];
