import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

// Import images
import wd1a from '../assets/Women/4_dresses,jumpsuits/wd1a.png';
import wd1b from '../assets/Women/4_dresses,jumpsuits/wd1b.png';
import wd2a from '../assets/Women/4_dresses,jumpsuits/wd2a.png';
import wd2b from '../assets/Women/4_dresses,jumpsuits/wd2b.png';
import wd3a from '../assets/Women/4_dresses,jumpsuits/wd3a.png';
import wd3b from '../assets/Women/4_dresses,jumpsuits/wd3b.png';
import wd4a from '../assets/Women/4_dresses,jumpsuits/wd4a.png';
import wd4b from '../assets/Women/4_dresses,jumpsuits/wd4b.png';
import wd5a from '../assets/Women/4_dresses,jumpsuits/wd5a.png';
import wd5b from '../assets/Women/4_dresses,jumpsuits/wd5b.png';
import wd6a from '../assets/Women/4_dresses,jumpsuits/wd6a.png';
import wd6b from '../assets/Women/4_dresses,jumpsuits/wd6b.png';
import wd7a from '../assets/Women/4_dresses,jumpsuits/wd7a.png';
import wd7b from '../assets/Women/4_dresses,jumpsuits/wd7b.png';
import wd8a from '../assets/Women/4_dresses,jumpsuits/wd8a.png';
import wd8b from '../assets/Women/4_dresses,jumpsuits/wd8b.png';
import wd9a from '../assets/Women/4_dresses,jumpsuits/wd9a.png';
import wd9b from '../assets/Women/4_dresses,jumpsuits/wd9b.png';
import wd10a from '../assets/Women/4_dresses,jumpsuits/wd10a.png';
import wd10b from '../assets/Women/4_dresses,jumpsuits/wd10b.png';
import wd11a from '../assets/Women/4_dresses,jumpsuits/wd11a.png';
import wd11b from '../assets/Women/4_dresses,jumpsuits/wd11b.png';

// Define product list
const womenDresses = [
  { id: 1, name: 'Sophisticated Black Mini Skirt Suit Set', price: 4000, image: wd1a, hoverImage: wd1b },
  { id: 2, name: 'Casual Short Sleeve T-Shirt Dress', price: 2300, image: wd2a, hoverImage: wd2b },
  { id: 3, name: 'Chic V-Neck Belted Jumpsuit', price: 3500, image: wd3a, hoverImage: wd3b },
  { id: 4, name: ' Elegant Mesh Sleeve Mini Dress', price: 2500, image: wd4a, hoverImage: wd4b },
  { id: 5, name: 'Simple Square Neck Midi Dress', price: 2800, image: wd5a, hoverImage: wd5b },
  { id: 6, name: 'Classic Pleated Midi Shirt Dress', price: 3200, image: wd6a, hoverImage: wd6b },
  { id: 7, name: 'Satin Trim Off-Shoulder Gown', price: 4500, image: wd7a, hoverImage: wd7b },
  { id: 8, name: 'Elegant Lace Overlay Midi Dress', price: 2900, image: wd8a, hoverImage: wd8b },
  { id: 9, name: 'Off-Shoulder Beach Maxi Dress', price: 3800, image: wd9a, hoverImage: wd9b },
  { id: 10, name: 'Halter Neck Skater Mini Dress', price: 2400, image: wd10a, hoverImage: wd10b },
  { id: 11, name: 'Cutout Statement Dress', price: 2799, image: wd11a, hoverImage: wd11b },
];

const WomenDresses = () => {
  return <CategoriesExpand products={womenDresses} />;
};

export default WomenDresses;
