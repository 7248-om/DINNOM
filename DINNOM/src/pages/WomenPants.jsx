import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

// Import images from 2_pants_skirts
import wp1a from '../assets/women/2_pants_skirts/wp1a.webp';
import wp1b from '../assets/women/2_pants_skirts/wp1b.webp';
import wp2a from '../assets/women/2_pants_skirts/wp2a.webp';
import wp2b from '../assets/women/2_pants_skirts/wp2b.webp';
import wp3a from '../assets/women/2_pants_skirts/wp3a.webp';
import wp3b from '../assets/women/2_pants_skirts/wp3b.webp';
import wp4a from '../assets/women/2_pants_skirts/wp4a.webp';
import wp4b from '../assets/women/2_pants_skirts/wp4b.webp';
import wp5a from '../assets/women/2_pants_skirts/wp5a.webp';
import wp5b from '../assets/women/2_pants_skirts/wp5b.webp';
import wp6a from '../assets/women/2_pants_skirts/wp6a.webp';
import wp6b from '../assets/women/2_pants_skirts/wp6b.webp';
import wp7a from '../assets/women/2_pants_skirts/wp7a.webp';
import wp7b from '../assets/women/2_pants_skirts/wp7b.webp';
import wp8a from '../assets/women/2_pants_skirts/wp8a.webp';
import wp8b from '../assets/women/2_pants_skirts/wp8b.webp';
import wp9a from '../assets/women/2_pants_skirts/wp9a.webp';
import wp9b from '../assets/women/2_pants_skirts/wp9b.webp';
import wp10a from '../assets/women/2_pants_skirts/wp10a.webp';
import wp10b from '../assets/women/2_pants_skirts/wp10b.webp';
import wp11a from '../assets/women/2_pants_skirts/wp11a.webp';
import wp11b from '../assets/women/2_pants_skirts/wp11b.webp';
import wp12a from '../assets/women/2_pants_skirts/wp12a.webp';
import wp12b from '../assets/women/2_pants_skirts/wp12b.webp';


const womenPants = [
  { id: 1, name: 'Belted Straight Fit Skirt', price: 1800, image: wp1a, hoverImage: wp1b },
  { id: 2, name: 'Ruched Bootcut Pants', price: 2300, image: wp2a, hoverImage: wp2b },
  { id: 3, name: 'Solid Pleated Trousers', price: 2500, image: wp3a, hoverImage: wp3b },
  { id: 4, name: 'Side Slit Office Pants', price: 2600, image: wp4a, hoverImage: wp4b },
  { id: 5, name: 'Flared Palazzo Pants', price: 2400, image: wp5a, hoverImage: wp5b },
  { id: 6, name: 'A-Line Mini Skirt', price: 2200, image: wp6a, hoverImage: wp6b },
  { id: 7, name: 'Textured Flared Pants', price: 2900, image: wp7a, hoverImage: wp7b },
  { id: 8, name: 'Pocket Utility Skirt', price: 2100, image: wp8a, hoverImage: wp8b },
  { id: 9, name: 'Fringed Hem Skirt', price: 2500, image: wp9a, hoverImage: wp9b },
  { id: 10, name: 'Satin Midi Pencil Skirt', price: 2700, image: wp10a, hoverImage: wp10b },
  { id: 11, name: 'Relaxed Eyelet Pants', price: 3000, image: wp11a, hoverImage: wp11b },
  { id: 12, name: 'Cargo Fit Relaxed Pants', price: 2600, image: wp12a, hoverImage: wp12b },
];

const WomenPants = () => {
  return <CategoriesExpand products={womenPants} />;
};

export default WomenPants;
