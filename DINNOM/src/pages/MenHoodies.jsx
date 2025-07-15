import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

// ✅ Updated imports with correct folder name
import mj1a from '../assets/Men/3sweatshirts/mj1a.png';
import mj1b from '../assets/Men/3sweatshirts/ mj1b.png';
import mj2a from '../assets/Men/3sweatshirts/mj2a.png';
import mj2b from '../assets/Men/3sweatshirts/mj2b.png';
import mj3a from '../assets/Men/3sweatshirts/mj3a.png';
import mj3b from '../assets/Men/3sweatshirts/mj3b.png';
import mj4a from '../assets/Men/3sweatshirts/mj4a.png';
import mj4b from '../assets/Men/3sweatshirts/mj4b.png';
import mj5a from '../assets/Men/3sweatshirts/mj5a.png';
import mj5b from '../assets/Men/3sweatshirts/mj5b.png';
import mj6a from '../assets/Men/3sweatshirts/mj6a.png';
import mj6b from '../assets/Men/3sweatshirts/mj6b.png';
import mj7a from '../assets/Men/3sweatshirts/mj7a.png';
import mj7b from '../assets/Men/3sweatshirts/mj7b.png';
import mj8a from '../assets/Men/3sweatshirts/mj8a.png';
import mj8b from '../assets/Men/3sweatshirts/mj8b.png';

const menHoodies = [
  { id: 1, name: 'Zip-Up Urban Hoodie', price: 2700, image: mj1a, hoverImage: mj1b },
  { id: 2, name: 'Heavyweight Pullover Hoodie', price: 3000, image: mj2a, hoverImage: mj2b },
  { id: 3, name: 'Everyday Basic Hoodie', price: 2500, image: mj3a, hoverImage: mj3b },
  { id: 4, name: 'Quilted Bomber Jacket', price: 3200, image: mj4a, hoverImage: mj4b },
  { id: 5, name: 'Varsity Style Jacket', price: 3400, image: mj5a, hoverImage: mj5b },
  { id: 6, name: 'Color Block Street Hoodie', price: 2600, image: mj6a, hoverImage: mj6b },
  { id: 7, name: 'Fleece-Lined Zip Hoodie', price: 3100, image: mj7a, hoverImage: mj7b },
  { id: 8, name: 'Athleisure Full-Zip Hoodie', price: 2900, image: mj8a, hoverImage: mj8b },
];

const MenHoodies = () => {
  return <CategoriesExpand products={menHoodies} />;
};

export default MenHoodies;
