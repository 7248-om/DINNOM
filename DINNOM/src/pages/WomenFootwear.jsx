import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

// Import footwear images (make sure you have these files in the folder)
import wf1a from '../assets/women/5_footwear/wf1a.png';
import wf1b from '../assets/women/5_footwear/wf1b.png';
import wf2a from '../assets/women/5_footwear/wf2a.png';
import wf2b from '../assets/women/5_footwear/wf2b.png';
import wf3a from '../assets/women/5_footwear/wf3a.png';
import wf3b from '../assets/women/5_footwear/wf3b.png';
import wf4a from '../assets/women/5_footwear/wf4a.png';
import wf4b from '../assets/women/5_footwear/wf4b.png';
import wf5a from '../assets/women/5_footwear/wf5a.png';
import wf5b from '../assets/women/5_footwear/wf5b.png';
import wf6a from '../assets/women/5_footwear/wf6a.png';
import wf6b from '../assets/women/5_footwear/wf6b.png';
import wf7a from '../assets/women/5_footwear/wf7a.png';
import wf7b from '../assets/women/5_footwear/wf7b.png';
import wf8a from '../assets/women/5_footwear/wf8a.png';
import wf8b from '../assets/women/5_footwear/wf8b.png';
import wf9a from '../assets/women/5_footwear/wf9a.png';
import wf9b from '../assets/women/5_footwear/wf9b.png';
import wf10a from '../assets/women/5_footwear/wf10a.png';
import wf10b from '../assets/women/5_footwear/wf10b.png';

// Array of footwear products with hover images and details
const womenFootwear = [
  {
    id: 1,
    name: 'Twisted Knot Pointed Toe Flats',
    price: 1800,
    image: wf2a,
    hoverImage: wf2b,
  },
  {
    id: 2,
    name: 'Strappy Block Heel Mules',
    price: 2200,
    image: wf10a,
    hoverImage: wf10b,
  },
  {
    id: 3,
    name: 'Espadrille Wedge Slingback Sandals',
    price: 2600,
    image: wf7a,
    hoverImage: wf7b,
  },
  {
    id: 4,
    name: 'Lace-Up Platform Combat Boots',
    price: 4200,
    image: wf9a,
    hoverImage: wf9b,
  },
  {
    id: 5,
    name: 'Classic Ankle Strap Block Heels',
    price: 2700,
    image: wf3a,
    hoverImage: wf3b,
  },
  {
    id: 6,
    name: 'Minimalist Strappy Flat Sandals',
    price: 1500,
    image: wf1a,
    hoverImage: wf1b,
  },
  {
    id: 7,
    name: 'Chunky Sole Chelsea Boots',
    price: 3800,
    image: wf5a,
    hoverImage: wf5b,
  },
  {
    id: 8,
    name: 'All Black Knit Running Sneakers',
    price: 2500,
    image: wf8a,
    hoverImage: wf8b,
  },
  {
    id: 9,
    name: 'Platform Lace-Up Oxford Shoes',
    price: 3000,
    image: wf6a,
    hoverImage: wf6b,
  },
  {
    id: 10,
    name: 'Criss-Cross Lace-Up Flat Sandals',
    price: 1900,
    image: wf4a,
    hoverImage: wf4b,
  },
];

const WomenFootwear = () => {
  return <CategoriesExpand products={womenFootwear} />;
};

export default WomenFootwear;
