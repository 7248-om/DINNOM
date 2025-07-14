import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

import wc1a from '../assets/women/6_caps-accessories/wc1a.jpg';
import wc1b from '../assets/women/6_caps-accessories/wc1b.jpg'; // If no hover image, use same as wc1a

import wc2a from '../assets/women/6_caps-accessories/wc2a.jpg';
import wc2b from '../assets/women/6_caps-accessories/wc2b.jpg';

import wc3a from '../assets/women/6_caps-accessories/wc3a.jpg';
import wc3b from '../assets/women/6_caps-accessories/wc3b.jpg'; // if none, use wc3a

import wc4a from '../assets/women/6_caps-accessories/wc4a.jpg';
import wc4b from '../assets/women/6_caps-accessories/wc4b.jpg';

import wc5a from '../assets/women/6_caps-accessories/wc5a.jpg';
import wc5b from '../assets/women/6_caps-accessories/wc5b.jpg';

import wc6a from '../assets/women/6_caps-accessories/wc6a.jpg';
import wc6b from '../assets/women/6_caps-accessories/wc6b.jpg';

import wc7a from '../assets/women/6_caps-accessories/wc7a.jpg';
import wc7b from '../assets/women/6_caps-accessories/wc7b.jpg';

import wc8a from '../assets/women/6_caps-accessories/wc8a.jpg';
import wc8b from '../assets/women/6_caps-accessories/wc8b.jpg';

import wc9a from '../assets/women/6_caps-accessories/wc9a.jpg';
import wc9b from '../assets/women/6_caps-accessories/wc9b.jpg';

import wc10a from '../assets/women/6_caps-accessories/wc10a.jpg';
import wc10b from '../assets/women/6_caps-accessories/wc10b.jpg';

import wc11a from '../assets/women/6_caps-accessories/wc11a.jpg';
import wc11b from '../assets/women/6_caps-accessories/wc11b.jpg';

import wc12a from '../assets/women/6_caps-accessories/wc12a.jpg';
import wc12b from '../assets/women/6_caps-accessories/wc12b.jpg';

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
