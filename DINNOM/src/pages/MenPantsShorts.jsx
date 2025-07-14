// MenPantsShorts.jsx
import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

// ✅ Updated import paths and variable names (mp → mb)
import mb1a from '../assets/Men/2pants/mb1a.png';
import mb1b from '../assets/Men/2pants/mb1b.png';
import mb2a from '../assets/Men/2pants/mb2a.png';
import mb2b from '../assets/Men/2pants/mb2b.png';
import mb3a from '../assets/Men/2pants/mb3a.png';
import mb3b from '../assets/Men/2pants/mb3b.png';
import mb4a from '../assets/Men/2pants/mb4a.png';
import mb4b from '../assets/Men/2pants/mb4b.png';
import mb5a from '../assets/Men/2pants/mb5a.png';
import mb5b from '../assets/Men/2pants/mb5b.png';
import mb6a from '../assets/Men/2pants/mb6a.png';
import mb6b from '../assets/Men/2pants/mb6b.png';
import mb7a from '../assets/Men/2pants/mb7a.png';
import mb7b from '../assets/Men/2pants/mb7b.png';
import mb8a from '../assets/Men/2pants/mb8a.png';
import mb8b from '../assets/Men/2pants/mb8b.png';
import mb9a from '../assets/Men/2pants/mb9a.png';
import mb9b from '../assets/Men/2pants/mb9b.png';
import mb10a from '../assets/Men/2pants/mb10a.png';
import mb10b from '../assets/Men/2pants/mb10b.png';

const menPantsShorts = [
  { id: 1, name: 'Slim Fit Formal Trousers', price: 2100, image: mb1a, hoverImage: mb1b },
  { id: 2, name: 'Straight Fit Chinos', price: 1900, image: mb2a, hoverImage: mb2b },
  { id: 3, name: 'Cotton Cargo Joggers', price: 2200, image: mb3a, hoverImage: mb3b },
  { id: 4, name: 'Relaxed Fit Sweatpants', price: 2300, image: mb4a, hoverImage: mb4b },
  { id: 5, name: 'Denim Distressed Shorts', price: 1700, image: mb5a, hoverImage: mb5b },
  { id: 6, name: 'Twill Flat-Front Shorts', price: 1500, image: mb6a, hoverImage: mb6b },
  { id: 7, name: 'Tapered Fit Jogger Pants', price: 2000, image: mb7a, hoverImage: mb7b },
  { id: 8, name: 'Printed Cotton Lounge Shorts', price: 1300, image: mb8a, hoverImage: mb8b },
  { id: 9, name: 'Tailored Pinstripe Trousers', price: 2500, image: mb9a, hoverImage: mb9b },
  { id: 10, name: 'Linen Blend Drawstring Pants', price: 2400, image: mb10a, hoverImage: mb10b },
];

const MenPantsShorts = () => {
  return <CategoriesExpand products={menPantsShorts} />;
};

export default MenPantsShorts;
