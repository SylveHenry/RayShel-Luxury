import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/UI';
import { ProductGrid } from '@/components/Products';
import styles from './page.module.css';
import { QuantitySelector } from '@/components/UI';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  // Mock product data
  const { slug } = params;
  
  // In a real app, you would fetch product data based on the slug
  console.log(`Fetching product details for slug: ${slug}`);
  
  const product = {
    id: 1,
    slug: 'quilted-leather-handbag',
    name: 'Quilted Leather Handbag',
    brand: 'Rayshel',
    description: 'Crafted from the finest Italian leather, this quilted handbag exemplifies luxury and timeless elegance. Each stitch is meticulously placed by our artisans, resulting in a piece that will remain a treasured addition to your collection for years to come.',
    details: [
      'Premium Italian full-grain leather',
      'Signature quilted pattern',
      'Gold-tone hardware with anti-tarnish coating',
      'Interior zippered compartment',
      'Dual interior slip pockets',
      'Custom jacquard lining',
      'Adjustable leather shoulder strap',
      'Handcrafted in our Milan atelier'
    ],
    price: 2450,
    originalPrice: 2850,
    currency: '$',
    isNew: true,
    isSale: true,
    stock: 12,
    sku: 'RLH-QL-2023-BLK',
    color: 'Black',
    colors: ['Black', 'Ivory', 'Burgundy', 'Navy'],
    images: [
      '/images/product-detail-1.jpg',
      '/images/product-detail-2.jpg',
      '/images/product-detail-3.jpg',
      '/images/product-detail-4.jpg',
    ],
    ratings: {
      average: 4.8,
      count: 127
    },
    dimensions: '11" x 8" x 4"',
    weight: '1.8 lbs'
  };

  // Mock related products
  const relatedProducts = [
    {
      id: '2',
      name: 'Classic Leather Tote',
      brand: 'Rayshel',
      price: 1890,
      currency: '$',
      isNew: false,
      isSale: false,
      image: '/images/product-2.jpg',
      hover_image: '/images/product-2-hover.jpg'
    },
    {
      id: '3',
      name: 'Mini Crossbody Bag',
      brand: 'Rayshel',
      price: 1290,
      originalPrice: 1490,
      currency: '$',
      isNew: false,
      isSale: true,
      image: '/images/product-3.jpg',
      hover_image: '/images/product-3-hover.jpg'
    },
    {
      id: '4',
      name: 'Structured Leather Clutch',
      brand: 'Rayshel',
      price: 890,
      currency: '$',
      isNew: true,
      isSale: false,
      image: '/images/product-4.jpg',
      hover_image: '/images/product-4-hover.jpg'
    },
    {
      id: '5',
      name: 'Woven Handle Shoulder Bag',
      brand: 'Rayshel',
      price: 2190,
      currency: '$',
      isNew: false,
      isSale: false,
      image: '/images/product-5.jpg',
      hover_image: '/images/product-5-hover.jpg'
    }
  ];

  return (
    <div className={styles.productPage}>
      <div className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link> / <Link href="/category/handbags">Handbags</Link> / <span>{product.name}</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.productDetail}>
          {/* Product Gallery */}
          <div className={styles.productGallery}>
            <div className={styles.mainImage}>
              <Image 
                src={product.images[0]} 
                alt={product.name} 
                width={600} 
                height={600} 
                priority
                className={styles.image}
              />
            </div>
            <div className={styles.thumbnails}>
              {product.images.map((image, index) => (
                <div key={index} className={index === 0 ? styles.thumbnailActive : styles.thumbnail}>
                  <Image 
                    src={image} 
                    alt={`${product.name} - View ${index + 1}`} 
                    width={100} 
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className={styles.productInfo}>
            <div className={styles.productMeta}>
              <h4 className={styles.productBrand}>{product.brand}</h4>
              <h1 className={styles.productName}>{product.name}</h1>
              
              <div className={styles.productRating}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.ratings.average) ? styles.filledStar : styles.emptyStar}>
                      ★
                    </span>
                  ))}
                </div>
                <span className={styles.ratingCount}>{product.ratings.average} ({product.ratings.count} reviews)</span>
              </div>
              
              <div className={styles.productPrice}>
                {product.isSale && (
                  <span className={styles.salePrice}>
                    <span className={styles.originalPrice}>{product.currency}{product.originalPrice.toLocaleString()}</span>
                    {product.currency}{product.price.toLocaleString()}
                  </span>
                )}
                {!product.isSale && (
                  <span>{product.currency}{product.price.toLocaleString()}</span>
                )}
              </div>
            </div>

            <div className={styles.productDescription}>
              <p>{product.description}</p>
            </div>

            <div className={styles.productOptions}>
              <div className={styles.colorOptions}>
                <h4>Color: <span>{product.color}</span></h4>
                <div className={styles.colorSwatches}>
                  {product.colors.map((color, index) => (
                    <button 
                      key={index} 
                      className={color === product.color ? styles.colorSwatchActive : styles.colorSwatch}
                      title={color}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.quantitySelector}>
                <h4>Quantity</h4>
                <QuantitySelector />
              </div>
            </div>

            <div className={styles.productActions}>
              <button className={styles.addToCartBtn}>Add to Cart</button>
              <button className={styles.wishlistBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" 
                    stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </button>
            </div>

            <div className={styles.productDetails}>
              <div className={styles.detailsTab}>
                <h3>Details & Care</h3>
                <ul className={styles.detailsList}>
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <div className={styles.productSpecs}>
                  <p><strong>Dimensions:</strong> {product.dimensions}</p>
                  <p><strong>Weight:</strong> {product.weight}</p>
                  <p><strong>SKU:</strong> {product.sku}</p>
                </div>
              </div>
              
              <div className={styles.shippingInfo}>
                <div className={styles.infoItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 18.5H7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 8.5V16.5C20 19.5 19 20.5 16 20.5H8C5 20.5 4 19.5 4 16.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.5 5.5L14.6 12.4C13.5 13.5 11.7 13.5 10.6 12.4L5.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 3.5H20C21.1 3.5 22 4.4 22 5.5V7.5H2V5.5C2 4.4 2.9 3.5 4 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <h4>Shipping & Returns</h4>
                    <p>Free shipping and returns on all orders</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M12 6.5V12H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <h4>Authenticity</h4>
                    <p>All items authenticated and verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className={styles.relatedProducts}>
          <SectionTitle
            title="You May Also Like"
            subtitle="Complete your collection with these complementary pieces"
            alignment="center"
          />
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
} 