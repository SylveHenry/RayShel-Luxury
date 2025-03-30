"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  hover_image?: string;
};

const ProductCard = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  image,
  isNew = false,
  isSale = false,
  hover_image
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isWishlist, setIsWishlist] = React.useState(false);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const formattedOriginalPrice = originalPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(originalPrice)
    : null;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className={styles.productCard}>
      <Link href={`/product/${id}`} passHref>
        <div 
          className={styles.imageContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered && hover_image ? hover_image : image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.productImage}
            priority={false}
            unoptimized={true}
            style={{ backgroundColor: '#f8f8f8' }}
          />
          {isNew && <span className={styles.badgeNew}>New</span>}
          {isSale && <span className={styles.badgeSale}>Sale</span>}
          <button 
            className={`${styles.wishlistButton} ${isWishlist ? styles.active : ''}`}
            onClick={handleWishlistToggle}
            aria-label={isWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19.7501C11.731 19.7501 11.462 19.6781 11.223 19.5331C10.269 18.9841 9.28702 18.3841 8.38902 17.8001L8.38298 17.7961C6.05981 16.2373 3.99987 14.8755 2.58302 13.5001C1.01802 11.9761 0.166016 10.4241 0.166016 8.67513C0.166016 6.98213 0.756016 5.41713 1.80102 4.28013C2.85902 3.12913 4.33702 2.44613 5.95502 2.44613C7.14402 2.44613 8.22402 2.84313 9.15302 3.62813C9.61902 4.03213 10.033 4.52513 10.384 5.0961C10.734 4.52513 11.147 4.03213 11.614 3.62813C12.543 2.84313 13.623 2.44613 14.812 2.44613C16.428 2.44613 17.908 3.12913 18.966 4.28013C20.011 5.41713 20.601 6.98213 20.601 8.67513C20.601 10.4241 19.75 11.9751 18.185 13.5001C16.7682 14.8751 14.7097 16.2373 12.389 17.7951C11.489 18.3811 10.505 18.9831 9.54802 19.5331C9.30902 19.6781 9.03902 19.7501 8.77002 19.7501H8.77102H8.77002Z" fill="currentColor"/>
            </svg>
          </button>
          <div className={styles.quickActions}>
            <button className={styles.quickAdd}>Quick Add</button>
          </div>
        </div>
      </Link>
      <div className={styles.productInfo}>
        <h3 className={styles.brand}>{brand}</h3>
        <Link href={`/product/${id}`} passHref>
          <h2 className={styles.productName}>{name}</h2>
        </Link>
        <div className={styles.priceContainer}>
          <span className={`${styles.price} ${originalPrice ? styles.salePrice : ''}`}>
            {formattedPrice}
          </span>
          {originalPrice && (
            <>
              <span className={styles.originalPrice}>{formattedOriginalPrice}</span>
              <span className={styles.discount}>-{discount}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 