import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const womenPants = [
  {
    id: 1,
    name: 'Belted Straight Fit Skirt',
    price: 1800,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp1a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp1b.webp?alt=media',
  },
  {
    id: 2,
    name: 'Ruched Bootcut Pants',
    price: 2300,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp2a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp2b.webp?alt=media',
  },
  {
    id: 3,
    name: 'Solid Pleated Trousers',
    price: 2500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp3a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp3b.webp?alt=media',
  },
  {
    id: 4,
    name: 'Side Slit Office Pants',
    price: 2600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp4a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp4b.webp?alt=media',
  },
  {
    id: 5,
    name: 'Flared Palazzo Pants',
    price: 2400,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp5a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp5b.webp?alt=media',
  },
  {
    id: 6,
    name: 'A-Line Mini Skirt',
    price: 2200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp6a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp6b.webp?alt=media',
  },
  {
    id: 7,
    name: 'Textured Flared Pants',
    price: 2900,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp7a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp7b.webp?alt=media',
  },
  {
    id: 8,
    name: 'Pocket Utility Skirt',
    price: 2100,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp8a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp8b.webp?alt=media',
  },
  {
    id: 9,
    name: 'Fringed Hem Skirt',
    price: 2500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp9a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp9b.webp?alt=media',
  },
  {
    id: 10,
    name: 'Satin Midi Pencil Skirt',
    price: 2700,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp10a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp10b.webp?alt=media',
  },
  {
    id: 11,
    name: 'Relaxed Eyelet Pants',
    price: 3000,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp11a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp11b.webp?alt=media',
  },
  {
    id: 12,
    name: 'Cargo Fit Relaxed Pants',
    price: 2600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp12a.webp?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp12b.webp?alt=media',
  },
];

const WomenPants = () => {
  return <CategoriesExpand products={womenPants} />;
};

export default WomenPants;
