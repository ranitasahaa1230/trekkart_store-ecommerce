import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bags3.3.jpeg?raw=true",
    name: "Casual Bags",
    description:'Travel Bags at Best Deals!',
    alt: "bags",
    newPrice: 299,
    originalPrice: 499,
    ratings: 2.6,
    brand: "Bianyo",
    category: "Suitcases",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/allpack.jpg?raw=true",
    name: "Trekking Bags",
    description: "Stylish Bags at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2899,
    originalPrice: 3999,
    ratings: 4.6,
    brand: "Arnisa",
    category: "Backpacks",
		inStock: true,
    newStock:true
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bagpack2.jpg?raw=true",
    name: "Hiking Bags",
    description: "Hiking Bags at Best Price!",
    alt:"bags",
    newPrice: 1999,
    originalPrice: 3999,
    ratings: 3.5,
    brand: "Celine",
    category: "Backpacks",
		inStock: true,
    newStock:true
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoes6.jpg?raw=true",
    name: "Brown Shoes",
    description:'Travel Bags at Best Deals!',
    alt: "bags",
    newPrice: 799,
    originalPrice: 1999,
    ratings: 3.6,
    brand: "Gucci",
    category: "Shoes",
    inStock:false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/boot5.jpg?raw=true",
    name: "Hiking Boots",
    description: "Stylish Boots at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2099,
    originalPrice: 3999,
    ratings: 5,
    brand: "Gucci",
    category: "Shoes",
		inStock: true,
    newStock:true
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bagpack3.jpg?raw=true",
    name: "Coloured Bags",
    description: "Hiking Bags at Best Price!",
    alt:"bags",
    newPrice: 999,
    originalPrice: 3999,
    ratings: 3.2,
    brand: "Arnisa",
    category: "Backpacks",
		inStock: true,
  }, 
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/jacket4.jpg?raw=true",
    name: "Stylish Jackets",
    description:'Travel Jackets at Best Deals!',
    alt: "bags",
    newPrice: 3999,
    originalPrice: 5999,
    ratings: 4.8,
    brand: "Celine",
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
    brand: "Bianyo",
    category: "Suitcases",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true",
    name: "Stylish Suitcases",
    description: "Hiking Bags at Best Price!",
    alt:"bags",
    newPrice: 999,
    originalPrice: 3999,
    isBestSeller: true,
    ratings: 1.5,
    brand: "Arnisa",
    category: "Suitcases",
		inStock: true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoe4.2.jpeg?raw=true",
    name: "Travel Shoes",
    description:'Travel Shoes at Best Deals!',
    alt: "bags",
    newPrice: 4999,
    originalPrice: 5999,
    isBestSeller: true,
    ratings: 4.9,
    brand: "Gucci",
    category: "Shoes",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/jacket6.jpg?raw=true",
    name: "Black Jackets",
    description: "Stylish Jackets at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2099,
    originalPrice: 3999,
    ratings: 3.0,
    brand: "Bianyo",
    category: "Jackets",
		inStock: false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoes9.jpg?raw=true",
    name: "Coloured Boots",
    description: "Hiking Boots at Best Price!",
    alt:"bags",
    newPrice: 2999,
    originalPrice: 3999,
    ratings: 5,
    brand: "Celine",
    category: "Shoes",
		inStock: true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/nike.jpg?raw=true",
    name: "Casual Shoes",
    description:'Travel Shoes at Best Deals!',
    alt: "bags",
    newPrice: 1899,
    originalPrice: 4899,
    ratings: 3.5,
    brand: "Arnisa",
    category: "Shoes",
    inStock:false,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage.jpg?raw=true",
    name: "Black Suitcases",
    description: "Stylish Suitcases at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 899,
    originalPrice: 1999,
    ratings: 1.4,
    brand: "Gucci",
    category: "Suitcases",
		inStock: true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/essentials.jpg?raw=true",
    name: "Black & White Bags",
    description: "Suitcases at Best Price!",
    alt:"bags",
    newPrice: 3899,
    originalPrice: 4999,
    ratings: 3,
    brand: "Celine",
    category: "Suitcases",
		inStock: true,
    newStock:true
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoes7.jpg?raw=true",
    name: "White Boots",
    description:'Travel Shoes at Best Deals!',
    alt: "bags",
    newPrice: 1299,
    originalPrice: 2499,
    ratings: 3.9,
    brand: "Celine",
    category: "Shoes",
    inStock:true,
  },
  {
    _id: uuid(),
    img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/shoes8.jpg?raw=true",
    name: "Stylish Boots",
    description: "Stylish Boots at Best Deals! Grab it!",
    alt:"bags",
    newPrice: 2599,
    originalPrice: 3599,
    ratings: 4.8,
    brand: "Gucci",
    category: "Shoes",
		inStock: true,
  },
   {
      _id: uuid(),
      img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/jacket5.jpg?raw=true",
      name: "Red Jackets",
      description: "Stylish Jackets at Best Deals! Grab it!",
      alt:"bags",
      newPrice: 1299,
      originalPrice: 2999,
      ratings: 4.3,
      brand: "Bianyo",
      category: "Jackets",
      inStock: true,
    },
    {
      _id: uuid(),
      img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/bagpack4.jpg?raw=true",
      name: "Red Backpacks",
      description:'Travel Bags at Best Deals!',
      alt: "bags",
      newPrice: 499,
      originalPrice: 899,
      ratings: 1,
      brand: "Arnisa",
      category: "Backpacks",
      inStock:true,
    },
    {
      _id: uuid(),
      img: "https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/nike1.jpg?raw=true",
      name: "White & Green Shoes",
      description: "Stylish Shoes at Best Deals! Grab it!",
      alt:"bags",
      newPrice: 699,
      originalPrice: 3999,
      ratings: 2,
      brand: "Bianyo",
      category: "Shoes",
      inStock: true,
      newStock:true
    },
];