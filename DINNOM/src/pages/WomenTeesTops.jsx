import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const womenTeesTops = [
  {
    id: 1,
    name: 'Classic Black Polo Shirt',
    price: 1800,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt1a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt1b.webp?alt=media',
  },
  {
    id: 2,
    name: 'Back Cutout Black Top',
    price: 1600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt2a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt2b.webp?alt=media',
  },
  {
    id: 3,
    name: 'Pearl Neck Detail Tee',
    price: 2000,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt3a.avif?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt3b.avif?alt=media',
  },
  {
    id: 4,
    name: 'Sheer Sleeve V-Neck Shirt',
    price: 2200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt4a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt4b.webp?alt=media',
  },
  {
    id: 5,
    name: 'Black Collared Button Shirt',
    price: 2100,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt5a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt5b.webp?alt=media',
  },
  {
    id: 6,
    name: 'Relaxed V-Neck Pullover',
    price: 1900,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt6a.avif?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt6b.avif?alt=media',
  },
  {
    id: 7,
    name: 'Textured Collared Crop Top',
    price: 2500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt7a.avif?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt7b.avif?alt=media',
  },
  {
    id: 8,
    name: 'Asymmetric Drape Neck Sleeveless Top',
    price: 2700,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt8a.avif?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt8b.avif?alt=media',
  },
  {
    id: 9,
    name: 'Button-Front Sleeveless Vest Top',
    price: 1600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt9a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt9b.webp?alt=media',
  },
  {
    id: 10,
    name: 'Peplum Strap Cami Top',
    price: 2400,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt10a.avif?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt10b.avif?alt=media',
  },
  {
    id: 11,
    name: 'Satin Draped Side Top',
    price: 2600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt11a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt11b.webp?alt=media',
  },
  {
    id: 12,
    name: 'Black Collar Detail Shirt',
    price: 2300,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt12a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt12b.webp?alt=media',
  },
];

const WomenTeesTops = () => {
  return <CategoriesExpand products={womenTeesTops} />;
};

export default WomenTeesTops;
