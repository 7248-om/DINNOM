import React from 'react';
import CategoriesExpand from '../components/CategoriesExpand';

const womenDresses = [
  {
    id: 1,
    name: 'Sophisticated Black Mini Skirt Suit Set',
    price: 4000,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd1a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd1b.png?alt=media',
  },
  {
    id: 2,
    name: 'Casual Short Sleeve T-Shirt Dress',
    price: 2300,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd2a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd2b.png?alt=media',
  },
  {
    id: 3,
    name: 'Chic V-Neck Belted Jumpsuit',
    price: 3500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd3a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd3b.png?alt=media',
  },
  {
    id: 4,
    name: 'Elegant Mesh Sleeve Mini Dress',
    price: 2500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd4a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd4b.png?alt=media',
  },
  {
    id: 5,
    name: 'Simple Square Neck Midi Dress',
    price: 2800,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd5a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd5b.png?alt=media',
  },
  {
    id: 6,
    name: 'Classic Pleated Midi Shirt Dress',
    price: 3200,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd6a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd6b.png?alt=media',
  },
  {
    id: 7,
    name: 'Satin Trim Off-Shoulder Gown',
    price: 4500,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd7a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd7b.png?alt=media',
  },
  {
    id: 8,
    name: 'Elegant Lace Overlay Midi Dress',
    price: 2900,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd8a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd8b.png?alt=media',
  },
  {
    id: 9,
    name: 'Off-Shoulder Beach Maxi Dress',
    price: 3800,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd9a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd9b.png?alt=media',
  },
  {
    id: 10,
    name: 'Halter Neck Skater Mini Dress',
    price: 2400,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd10a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd10b.png?alt=media',
  },
  {
    id: 11,
    name: 'Cutout Statement Dress',
    price: 2799,
    image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd11a.png?alt=media',
    hoverImage: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd11b.png?alt=media',
  },
];

const WomenDresses = () => {
  return <CategoriesExpand products={womenDresses} />;
};

export default WomenDresses;
