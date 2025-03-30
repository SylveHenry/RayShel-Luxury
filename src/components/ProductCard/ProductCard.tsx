"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  currency: string;
  image: string;
  hover_image?: string;
  isNew?: boolean;
  isSale?: boolean;
  originalPrice?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  brand,
  price,
  currency,
  image,
  hover_image,
  isNew = false,
  isSale = false,
  originalPrice,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a slug from the product name
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div 
      className={styles.productCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${slug}`} className={styles.productLink}>
        <div className={styles.imageContainer}>
          <Image
            src={isHovered && hover_image ? hover_image : image}
            alt={name}
            width={400}
            height={500}
            className={styles.productImage}
            unoptimized={true}
            style={{ backgroundColor: '#f8f8f8' }}
          />
          
          {isNew && <span className={styles.newBadge}>New</span>}
          {isSale && <span className={styles.saleBadge}>Sale</span>}
          
          <div className={styles.quickActions}>
            <button className={styles.actionButton} title="Add to cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.05 2.05H4.05L6.71 14.47C6.81653 14.9248 7.08403 15.3315 7.46903 15.6198C7.85403 15.9082 8.33421 16.0603 8.82 16.05H18.33C18.81 16.05 19.27 15.9 19.65 15.62C20.03 15.34 20.3 14.94 20.4 14.48L22 7.05H5.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.actionButton} title="Add to wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </button>
            <button className={styles.actionButton} title="Quick view">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5C7.45 5 3.73 8.11 2.18 12.5C3.73 16.89 7.45 20 12 20C16.55 20 20.27 16.89 21.82 12.5C20.27 8.11 16.55 5 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className={styles.productInfo}>
          <h4 className={styles.productBrand}>{brand}</h4>
          <h3 className={styles.productName}>{name}</h3>
          <div className={styles.productPrice}>
            {isSale && originalPrice && (
              <span className={styles.priceContainer}>
                <span className={styles.originalPrice}>{currency}{originalPrice.toLocaleString()}</span>
                <span className={styles.salePrice}>{currency}{price.toLocaleString()}</span>
              </span>
            )}
            {(!isSale || !originalPrice) && (
              <span>{currency}{price.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}; 