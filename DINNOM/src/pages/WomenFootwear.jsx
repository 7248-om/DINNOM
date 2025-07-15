import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const womenFootwear = [
  {
    id: 1,
    name: 'Twisted Knot Pointed Toe Flats',
    price: 1800,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf2a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf2b.png?alt=media',
  },
  {
    id: 2,
    name: 'Strappy Block Heel Mules',
    price: 2200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf10a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf10b.png?alt=media',
  },
  {
    id: 3,
    name: 'Espadrille Wedge Slingback Sandals',
    price: 2600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf7a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf7b.png?alt=media',
  },
  {
    id: 4,
    name: 'Lace-Up Platform Combat Boots',
    price: 4200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf9a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf9b.png?alt=media',
  },
  {
    id: 5,
    name: 'Classic Ankle Strap Block Heels',
    price: 2700,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf3a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf3b.png?alt=media',
  },
  {
    id: 6,
    name: 'Minimalist Strappy Flat Sandals',
    price: 1500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf1a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf1b.png?alt=media',
  },
  {
    id: 7,
    name: 'Chunky Sole Chelsea Boots',
    price: 3800,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf5a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf5b.png?alt=media',
  },
  {
    id: 8,
    name: 'All Black Knit Running Sneakers',
    price: 2500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf8a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf8b.png?alt=media',
  },
  {
    id: 9,
    name: 'Platform Lace-Up Oxford Shoes',
    price: 3000,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf6a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf6b.png?alt=media',
  },
  {
    id: 10,
    name: 'Criss-Cross Lace-Up Flat Sandals',
    price: 1900,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf4a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf4b.png?alt=media',
  },
];

const WomenFootwear = () => {
  return <CategoriesExpand products={womenFootwear} />;
};

export default WomenFootwear;
