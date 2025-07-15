import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const womenCapsAccessories = [
  {
    id: 1,
    name: 'Distressed Ripped Baseball Cap',
    price: 1000,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc1a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc1b.png?alt=media',
  },
  {
    id: 2,
    name: `"Killin' It" Statement Baseball Cap`,
    price: 950,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc2a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc2b.png?alt=media',
  },
  {
    id: 3,
    name: 'Faux Leather Baker Boy Cap',
    price: 1100,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc3a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc3b.png?alt=media',
  },
  {
    id: 4,
    name: 'Heart Embroidered Baseball Cap',
    price: 900,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc4a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc4b.png?alt=media',
  },
  {
    id: 5,
    name: 'Washed Black Baseball Cap',
    price: 850,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc5a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc5b.png?alt=media',
  },
  {
    id: 6,
    name: 'Rectangular Frame Black Sunglasses',
    price: 1200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc6a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc6b.png?alt=media',
  },
  {
    id: 7,
    name: 'Double Layered Heart & Bead Anklet',
    price: 400,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc7a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc7b.png?alt=media',
  },
  {
    id: 8,
    name: 'Bohemian Beaded Cord Anklet',
    price: 350,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc8a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc8b.png?alt=media',
  },
  {
    id: 9,
    name: `"Absolutely Not" Slogan Baseball Cap`,
    price: 950,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc9a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc9b.png?alt=media',
  },
  {
    id: 10,
    name: 'Matching Infinity Charm Bracelets (Set of 2)',
    price: 600,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc10a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc10b.png?alt=media',
  },
  {
    id: 11,
    name: 'Wide Elastic Cinch Belt with Round Buckle',
    price: 950,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc11a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc11b.png?alt=media',
  },
  {
    id: 12,
    name: 'Clover Charm Layered Gold Anklet',
    price: 550,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc12a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc12b.png?alt=media',
  },
];

const WomenCapsAccessories = () => {
  return <CategoriesExpand products={womenCapsAccessories} />;
};

export default WomenCapsAccessories;
