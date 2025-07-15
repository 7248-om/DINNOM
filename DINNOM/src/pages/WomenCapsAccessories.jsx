import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

import wc1a from '../assets/women/6_caps_access/wc1a.png';
import wc1b from '../assets/women/6_caps_access/wc1b.png'; // If no hover image, use same as wc1a

import wc2a from '../assets/women/6_caps_access/wc2a.png';
import wc2b from '../assets/women/6_caps_access/wc2b.png';

import wc3a from '../assets/women/6_caps_access/wc3a.png';
import wc3b from '../assets/women/6_caps_access/wc3b.png'; // if none, use wc3a

import wc4a from '../assets/women/6_caps_access/wc4a.png';
import wc4b from '../assets/women/6_caps_access/wc4b.png';

import wc5a from '../assets/women/6_caps_access/wc5a.png';
import wc5b from '../assets/women/6_caps_access/wc5b.png';

import wc6a from '../assets/women/6_caps_access/wc6a.png';
import wc6b from '../assets/women/6_caps_access/wc6b.png';

import wc7a from '../assets/women/6_caps_access/wc7a.png';
import wc7b from '../assets/women/6_caps_access/wc7b.png';

import wc8a from '../assets/women/6_caps_access/wc8a.png';
import wc8b from '../assets/women/6_caps_access/wc8b.png';

import wc9a from '../assets/women/6_caps_access/wc9a.png';
import wc9b from '../assets/women/6_caps_access/wc9b.png';

import wc10a from '../assets/women/6_caps_access/wc10a.png';
import wc10b from '../assets/women/6_caps_access/wc10b.png';

import wc11a from '../assets/women/6_caps_access/wc11a.png';
import wc11b from '../assets/women/6_caps_access/wc11b.png';

import wc12a from '../assets/women/6_caps_access/wc12a.png';
import wc12b from '../assets/women/6_caps_access/wc12b.png';

const womenCapsAccessories = [
  {
    id: 1,
    name: 'Distressed Ripped Baseball Cap',
    price: 1000,
    image: wc1a,
    hoverImage: wc1b,
  },
  {
    id: 2,
    name: `"Killin' It" Statement Baseball Cap`,
    price: 950,
    image: wc2a,
    hoverImage: wc2b,
  },
  {
    id: 3,
    name: 'Faux Leather Baker Boy Cap',
    price: 1100,
    image: wc3a,
    hoverImage: wc3b,
  },
  {
    id: 4,
    name: 'Heart Embroidered Baseball Cap',
    price: 900,
    image: wc4a,
    hoverImage: wc4b,
  },
  {
    id: 5,
    name: 'Washed Black Baseball Cap',
    price: 850,
    image: wc5a,
    hoverImage: wc5b,
  },
  {
    id: 6,
    name: 'Rectangular Frame Black Sunglasses',
    price: 1200,
    image: wc6a,
    hoverImage: wc6b,
  },
  {
    id: 7,
    name: 'Double Layered Heart & Bead Anklet',
    price: 400,
    image: wc7a,
    hoverImage: wc7b,
  },
  {
    id: 8,
    name: 'Bohemian Beaded Cord Anklet',
    price: 350,
    image: wc8a,
    hoverImage: wc8b,
  },
  {
    id: 9,
    name: `"Absolutely Not" Slogan Baseball Cap`,
    price: 950,
    image: wc9a,
    hoverImage: wc9b,
  },
  {
    id: 10,
    name: 'Matching Infinity Charm Bracelets (Set of 2)',
    price: 600,
    image: wc10a,
    hoverImage: wc10b,
  },
  {
    id: 11,
    name: 'Wide Elastic Cinch Belt with Round Buckle',
    price: 950,
    image: wc11a,
    hoverImage: wc11b,
  },
  {
    id: 12,
    name: 'Clover Charm Layered Gold Anklet',
    price: 550,
    image: wc12a,
    hoverImage: wc12b,
  },
];

const WomenCapsAccessories = () => {
  return <CategoriesExpand products={womenCapsAccessories} />;
};

export default WomenCapsAccessories;
