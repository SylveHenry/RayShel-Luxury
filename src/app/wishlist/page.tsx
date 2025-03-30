import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionTitle } from '@/components/UI';
import styles from './page.module.css';

export default function WishlistPage() {
  // Mock wishlist data - in a real app, this would come from an API or state management
  const wishlistItems = [
    {
      id: '1',
      name: 'Silk Evening Gown',
      brand: 'Rayshel Collection',
      price: 2800,
      image: '/images/product-1.jpg',
      color: 'Black',
      inStock: true
    },
    {
      id: '4',
      name: 'Diamond Pendant Necklace',
      brand: 'Rayshel Jewelry',
      price: 4200,
      image: '/images/product-4.jpg',
      color: 'Silver',
      inStock: true
    },
    {
      id: '6',
      name: 'Wool Tailored Blazer',
      brand: 'Rayshel Collection',
      price: 2400,
      originalPrice: 3200,
      image: '/images/product-6.jpg',
      color: 'Navy',
      inStock: false
    }
  ];

  const emptyWishlist = wishlistItems.length === 0;

  return (
    <div className={styles.wishlistPage}>
      <div className={styles.container}>
        <SectionTitle 
          title="My Wishlist" 
          subtitle="Your curated collection of favorites" 
        />

        {emptyWishlist ? (
          <div className={styles.emptyWishlist}>
            <div className={styles.emptyIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3>Your wishlist is empty</h3>
            <p>Add items you love to your wishlist. Review them anytime and easily move them to your bag.</p>
            <Link href="/" className={styles.continueButton}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.wishlistHeader}>
              <div className={styles.headerCell}>Product</div>
              <div className={styles.headerCell}>Price</div>
              <div className={styles.headerCell}>Stock Status</div>
              <div className={styles.headerCell}>Actions</div>
            </div>

            <div className={styles.wishlistItems}>
              {wishlistItems.map(item => (
                <div key={item.id} className={styles.wishlistItem}>
                  <div className={styles.productCell}>
                    <div className={styles.productImage}>
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        width={100} 
                        height={120}
                        unoptimized={true}
                        style={{ backgroundColor: '#f8f8f8' }}
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>
                        <Link href={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <h4 className={styles.productBrand}>{item.brand}</h4>
                      <p className={styles.productColor}>Color: {item.color}</p>
                    </div>
                  </div>
                  
                  <div className={styles.priceCell}>
                    {item.originalPrice ? (
                      <>
                        <span className={styles.salePrice}>${item.price.toLocaleString()}</span>
                        <span className={styles.originalPrice}>${item.originalPrice.toLocaleString()}</span>
                      </>
                    ) : (
                      <span className={styles.price}>${item.price.toLocaleString()}</span>
                    )}
                  </div>
                  
                  <div className={styles.stockCell}>
                    {item.inStock ? (
                      <span className={styles.inStock}>In Stock</span>
                    ) : (
                      <span className={styles.outOfStock}>Out of Stock</span>
                    )}
                  </div>
                  
                  <div className={styles.actionsCell}>
                    <button 
                      className={`${styles.actionButton} ${styles.addToCartButton}`}
                      disabled={!item.inStock}
                    >
                      Add to Cart
                    </button>
                    <button className={styles.actionButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.wishlistActions}>
              <Link href="/" className={styles.continueButton}>
                Continue Shopping
              </Link>
              <button className={styles.addAllButton}>
                Add All to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 