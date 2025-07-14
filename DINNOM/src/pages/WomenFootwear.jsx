import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

// Import footwear images (make sure you have these files in the folder)
import wf1a from '../assets/women/5_footwear/wf1a.jpg';
import wf1b from '../assets/women/5_footwear/wf1b.jpg';
import wf2a from '../assets/women/5_footwear/wf2a.jpg';
import wf2b from '../assets/women/5_footwear/wf2b.jpg';
import wf3a from '../assets/women/5_footwear/wf3a.jpg';
import wf3b from '../assets/women/5_footwear/wf3b.jpg';
import wf4a from '../assets/women/5_footwear/wf4a.jpg';
import wf4b from '../assets/women/5_footwear/wf4b.jpg';
import wf5a from '../assets/women/5_footwear/wf5a.jpg';
import wf5b from '../assets/women/5_footwear/wf5b.jpg';
import wf6a from '../assets/women/5_footwear/wf6a.jpg';
import wf6b from '../assets/women/5_footwear/wf6b.jpg';
import wf7a from '../assets/women/5_footwear/wf7a.jpg';
import wf7b from '../assets/women/5_footwear/wf7b.jpg';
import wf8a from '../assets/women/5_footwear/wf8a.jpg';
import wf8b from '../assets/women/5_footwear/wf8b.jpg';
import wf9a from '../assets/women/5_footwear/wf9a.jpg';
import wf9b from '../assets/women/5_footwear/wf9b.jpg';
import wf10a from '../assets/women/5_footwear/wf10a.jpg';
import wf10b from '../assets/women/5_footwear/wf10b.jpg';

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
