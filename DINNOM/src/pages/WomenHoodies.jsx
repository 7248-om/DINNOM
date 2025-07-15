import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const womenHoodies = [
  {
    id: 1,
    name: 'Minimal Zip-Up Hoodie',
    price: 2600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws1a.avif?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws1b.avif?alt=media',
  },
  {
    id: 2,
    name: 'Cropped Hoodie with Corset Detail',
    price: 3200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws2a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws2b.webp?alt=media',
  },
  {
    id: 3,
    name: 'Everyday Drawstring Hoodie',
    price: 2600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws3a.avif?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws3b.avif?alt=media',
  },
  {
    id: 4,
    name: 'Cropped Zip Hoodie',
    price: 2500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws4a.avif?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws4b.avif?alt=media',
  },
  {
    id: 5,
    name: 'Zipped Leather Jacket',
    price: 2800,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws5a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws5b.webp?alt=media',
  },
  {
    id: 6,
    name: 'Versatile Button-Up Shacket',
    price: 2700,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws6a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws6b.webp?alt=media',
  },
  {
    id: 7,
    name: 'Basic Everyday Oversized Hoodie',
    price: 2200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws7a.jpg?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws7b.jpg?alt=media',
  },
  {
    id: 8,
    name: 'Zippered Streetwear Hoodie',
    price: 2900,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws8a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws8b.webp?alt=media',
  },
  {
    id: 9,
    name: 'Textured V-neck Knit Cardigan',
    price: 3000,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws9a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws9b.webp?alt=media',
  },
  {
    id: 10,
    name: 'Cropped Cable Knit Sweater',
    price: 3100,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws10a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws10b.webp?alt=media',
  },
  {
    id: 11,
    name: 'Oversized Pullover Hoodie',
    price: 3300,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws11a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws11b.webp?alt=media',
  },
  {
    id: 12,
    name: 'Sporty Graphic Hoodie',
    price: 2400,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws12a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F3sweatshirts%2Fws12b.webp?alt=media',
  },
];

const WomenHoodies = () => {
  return <CategoriesExpand products={womenHoodies} />;
};

export default WomenHoodies;
