import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

// Import images from 3_sweatshirts,hoodies,jackets,sweaters
import ws1a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws1a.avif';
import ws1b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws1b.avif';
import ws2a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws2a.webp';
import ws2b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws2b.webp';
import ws3a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws3a.avif';
import ws3b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws3b.avif';
import ws4a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws4a.avif';
import ws4b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws4b.avif';
import ws5a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws5a.webp';
import ws5b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws5b.webp';
import ws6a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws6a.webp';
import ws6b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws6b.webp';
import ws7a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws7a.jpg';
import ws7b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws7b.jpg';
import ws8a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws8a.webp';
import ws8b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws8b.webp';
import ws9a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws9a.webp';
import ws9b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws9b.webp';
import ws10a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws10a.webp';
import ws10b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws10b.webp';
import ws11a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws11a.webp';
import ws11b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws11b.webp';
import ws12a from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws12a.webp';
import ws12b from '../assets/women/3_sweatshirts,hoodies,jackets,sweaters/ws12b.webp';

const womenHoodies = [
  { id: 1, name: 'Minimal Zip-Up Hoodie', price: 2600, image: ws1a, hoverImage: ws1b },
  { id: 2, name: 'Cropped Hoodie with Corset Detail', price: 3200, image: ws2a, hoverImage: ws2b },
  { id: 3, name: 'Everyday Drawstring Hoodie', price: 2600, image: ws3a, hoverImage: ws3b },
  { id: 4, name: 'Cropped Zip Hoodie', price: 2500, image: ws4a, hoverImage: ws4b },
  { id: 5, name: 'Zipped Leather Jacket', price: 2800, image: ws5a, hoverImage: ws5b },
  { id: 6, name: 'Versatile Button-Up Shacket', price: 2700, image: ws6a, hoverImage: ws6b },
  { id: 7, name: 'Basic Everyday Oversized Hoodie', price: 2200, image: ws7a, hoverImage: ws7b },
  { id: 8, name: 'Zippered Streetwear Hoodie', price: 2900, image: ws8a, hoverImage: ws8b },
  { id: 9, name: 'Textured V-neck Knit Cardigan', price: 3000, image: ws9a, hoverImage: ws9b },
  { id: 10, name: 'Cropped Cable Knit Sweater', price: 3100, image: ws10a, hoverImage: ws10b },
  { id: 11, name: 'Oversized Pullover Hoodie', price: 3300, image: ws11a, hoverImage: ws11b },
  { id: 12, name: 'Sporty Graphic Hoodie', price: 2400, image: ws12a, hoverImage: ws12b },
];

const WomenHoodies = () => {
  return <CategoriesExpand products={womenHoodies} />;
};

export default WomenHoodies;
