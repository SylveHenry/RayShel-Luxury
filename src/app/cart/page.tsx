import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function CartPage() {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: 'Quilted Leather Handbag',
      brand: 'Rayshel',
      price: 2450,
      originalPrice: 2850,
      currency: '$',
      quantity: 1,
      color: 'Black',
      image: '/images/product-detail-1.jpg',
    },
    {
      id: 3,
      name: 'Mini Crossbody Bag',
      brand: 'Rayshel',
      price: 1290,
      originalPrice: 1490,
      currency: '$',
      quantity: 2,
      color: 'Burgundy',
      image: '/images/product-3.jpg',
    }
  ];

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07; // 7% tax
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;

  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className={styles.cartContent}>
            <div className={styles.cartItems}>
              <div className={styles.cartHeader}>
                <div className={styles.productCol}>Product</div>
                <div className={styles.priceCol}>Price</div>
                <div className={styles.quantityCol}>Quantity</div>
                <div className={styles.totalCol}>Total</div>
                <div className={styles.removeCol}></div>
              </div>

              {cartItems.map(item => (
                <div className={styles.cartItem} key={item.id}>
                  <div className={styles.productCol}>
                    <div className={styles.productInfo}>
                      <div className={styles.productImage}>
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          width={100} 
                          height={100}
                          className={styles.image}
                        />
                      </div>
                      <div className={styles.productDetails}>
                        <h3 className={styles.productName}>{item.name}</h3>
                        <p className={styles.productBrand}>{item.brand}</p>
                        <p className={styles.productColor}>Color: {item.color}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.priceCol}>
                    {item.originalPrice ? (
                      <div className={styles.priceInfo}>
                        <span className={styles.originalPrice}>{item.currency}{item.originalPrice.toLocaleString()}</span>
                        <span className={styles.currentPrice}>{item.currency}{item.price.toLocaleString()}</span>
                      </div>
                    ) : (
                      <span>{item.currency}{item.price.toLocaleString()}</span>
                    )}
                  </div>

                  <div className={styles.quantityCol}>
                    <div className={styles.quantityControl}>
                      <button className={styles.quantityBtn}>-</button>
                      <input 
                        type="text" 
                        value={item.quantity} 
                        className={styles.quantityInput} 
                        readOnly 
                      />
                      <button className={styles.quantityBtn}>+</button>
                    </div>
                  </div>

                  <div className={styles.totalCol}>
                    <span>{item.currency}{(item.price * item.quantity).toLocaleString()}</span>
                  </div>

                  <div className={styles.removeCol}>
                    <button className={styles.removeBtn}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              <div className={styles.cartActions}>
                <div className={styles.couponCode}>
                  <input 
                    type="text" 
                    placeholder="Coupon code" 
                    className={styles.couponInput} 
                  />
                  <button className={styles.couponBtn}>Apply Coupon</button>
                </div>
                <div className={styles.cartButtons}>
                  <Link href="/category/handbags" className={styles.continueShoppingBtn}>
                    Continue Shopping
                  </Link>
                  <button className={styles.updateCartBtn}>Update Cart</button>
                </div>
              </div>
            </div>

            <div className={styles.cartSummary}>
              <h2 className={styles.summaryTitle}>Cart Summary</h2>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{cartItems[0].currency}{subtotal.toLocaleString()}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Tax (7%)</span>
                <span>{cartItems[0].currency}{tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                <span>Total</span>
                <span>{cartItems[0].currency}{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <button className={styles.checkoutBtn}>Proceed to Checkout</button>
              <div className={styles.paymentMethods}>
                <p>We Accept:</p>
                <div className={styles.paymentIcons}>
                  <span className={styles.paymentIcon}>Visa</span>
                  <span className={styles.paymentIcon}>MC</span>
                  <span className={styles.paymentIcon}>Amex</span>
                  <span className={styles.paymentIcon}>PayPal</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <div className={styles.emptyCartIcon}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.05 2.05H4.05L6.71 14.47C6.81653 14.9248 7.08403 15.3315 7.46903 15.6198C7.85403 15.9082 8.33421 16.0603 8.82 16.05H18.33C18.81 16.05 19.27 15.9 19.65 15.62C20.03 15.34 20.3 14.94 20.4 14.48L22 7.05H5.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven&apos;t added any products to your cart yet.</p>
            <Link href="/" className={styles.shopNowBtn}>
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 