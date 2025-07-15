import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

//Import images
import wt1a from '../assets/women/1_shirts_tops_tees/wt1a.webp';
import wt1b from '../assets/women/1_shirts_tops_tees/wt1b.webp';
import wt2a from '../assets/women/1_shirts_tops_tees/wt2a.webp';
import wt2b from '../assets/women/1_shirts_tops_tees/wt2b.webp';
import wt3a from '../assets/women/1_shirts_tops_tees/wt3a.avif';
import wt3b from '../assets/women/1_shirts_tops_tees/wt3b.avif';
import wt4a from '../assets/women/1_shirts_tops_tees/wt4a.webp';
import wt4b from '../assets/women/1_shirts_tops_tees/wt4b.webp';
import wt5a from '../assets/women/1_shirts_tops_tees/wt5a.webp';
import wt5b from '../assets/women/1_shirts_tops_tees/wt5b.webp';
import wt6a from '../assets/women/1_shirts_tops_tees/wt6a.avif';
import wt6b from '../assets/women/1_shirts_tops_tees/wt6b.avif';
import wt7a from '../assets/women/1_shirts_tops_tees/wt7a.avif';
import wt7b from '../assets/women/1_shirts_tops_tees/wt7b.avif';
import wt8a from '../assets/women/1_shirts_tops_tees/wt8a.avif';
import wt8b from '../assets/women/1_shirts_tops_tees/wt8b.avif';
import wt9a from '../assets/women/1_shirts_tops_tees/wt9a.webp';
import wt9b from '../assets/women/1_shirts_tops_tees/wt9b.webp';
import wt10a from '../assets/women/1_shirts_tops_tees/wt10a.avif';
import wt10b from '../assets/women/1_shirts_tops_tees/wt10b.avif';
import wt11a from '../assets/women/1_shirts_tops_tees/wt11a.webp';
import wt11b from '../assets/women/1_shirts_tops_tees/wt11b.webp';
import wt12a from '../assets/women/1_shirts_tops_tees/wt12a.webp';
import wt12b from '../assets/women/1_shirts_tops_tees/wt12b.webp';

const womenTeesTops = [
  { id: 1, name: 'Classic Black Polo Shirt', price: 1800, image: wt1a, hoverImage: wt1b },
  { id: 2, name: 'Back Cutout Black Top', price: 1600, image: wt2a, hoverImage: wt2b },
  { id: 3, name: 'Pearl Neck Detail Tee', price: 2000, image: wt3a, hoverImage: wt3b },
  { id: 4, name: 'Sheer Sleeve V-Neck Shirt', price: 2200, image: wt4a, hoverImage: wt4b },
  { id: 5, name: 'Black Collared Button Shirt', price: 2100, image: wt5a, hoverImage: wt5b },
  { id: 6, name: 'Relaxed V-Neck Pullover', price: 1900, image: wt6a, hoverImage: wt6b },
  { id: 7, name: 'Textured Collared Crop Top', price: 2500, image: wt7a, hoverImage: wt7b },
  { id: 8, name: 'Asymmetric Drape Neck Sleeveless Top', price: 2700, image: wt8a, hoverImage: wt8b },
  { id: 9, name: 'Button-Front Sleeveless Vest Top', price: 1600, image: wt9a, hoverImage: wt9b },
  { id: 10, name: 'Peplum Strap Cami Top', price: 2400, image: wt10a, hoverImage: wt10b },
  { id: 11, name: 'Satin Draped Side Top', price: 2600, image: wt11a, hoverImage: wt11b },
  { id: 12, name: 'Black Collar Detail Shirt', price: 2300, image: wt12a, hoverImage: wt12b },
];


const WomenTeesTops = () => {
  return <CategoriesExpand products={womenTeesTops} />;
};

export default WomenTeesTops;
