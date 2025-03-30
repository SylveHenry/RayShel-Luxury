import React from 'react';
import { ProductGrid } from '@/components/Products';
import { SectionTitle } from '@/components/UI';
import styles from './page.module.css';
import Link from 'next/link';

// Mock product data - in a real app, this would come from an API or database
const products = [
  {
    id: '1',
    name: 'Silk Evening Gown',
    brand: 'Rayshel Collection',
    price: 2800,
    image: '/images/product-1.jpg',
    hover_image: '/images/product-1-hover.jpg',
    isNew: true,
  },
  {
    id: '2',
    name: 'Cashmere Wrap Coat',
    brand: 'Rayshel Collection',
    price: 3500,
    image: '/images/product-2.jpg',
    hover_image: '/images/product-2-hover.jpg',
    isNew: true,
  },
  {
    id: '3',
    name: 'Leather Tote Bag',
    brand: 'Rayshel Accessories',
    price: 1800,
    image: '/images/product-3.jpg',
    hover_image: '/images/product-3-hover.jpg',
    isNew: true,
  },
  {
    id: '4',
    name: 'Diamond Pendant Necklace',
    brand: 'Rayshel Jewelry',
    price: 4200,
    image: '/images/product-4.jpg',
    hover_image: '/images/product-4-hover.jpg',
  },
  {
    id: '5',
    name: 'Italian Leather Belt',
    brand: 'Rayshel Accessories',
    price: 580,
    image: '/images/product-5.jpg',
    hover_image: '/images/product-5-hover.jpg',
  },
  {
    id: '6',
    name: 'Wool Tailored Blazer',
    brand: 'Rayshel Collection',
    price: 2400,
    originalPrice: 3200,
    image: '/images/product-6.jpg',
    hover_image: '/images/product-6-hover.jpg',
    isSale: true,
  },
  {
    id: '7',
    name: 'Silk Scarf',
    brand: 'Rayshel Accessories',
    price: 450,
    image: '/images/product-7.jpg',
    hover_image: '/images/product-7-hover.jpg',
  },
  {
    id: '8',
    name: 'Leather Ankle Boots',
    brand: 'Rayshel Collection',
    price: 1250,
    image: '/images/product-8.jpg',
    hover_image: '/images/product-8-hover.jpg',
  },
];

// Map of category slugs to display names
const categoryNames: Record<string, string> = {
  'clothing': 'Clothing',
  'shoes': 'Luxury Shoes',
  'bags': 'Designer Bags',
  'accessories': 'Accessories',
  'jewelry': 'Fine Jewelry',
  'new-arrivals': 'New Arrivals',
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const categoryName = categoryNames[slug] || 'Products';
  
  // In a real app, you would filter based on the slug
  // Here we're just showing all products for demo purposes
  const categoryProducts = products;
  
  return (
    <div className={styles.categoryPage}>
      <div className={styles.categoryHeader}>
        <div className={styles.container}>
          <SectionTitle 
            title={categoryName} 
            subtitle={`Discover our exquisite ${categoryName.toLowerCase()} collection, featuring exceptional craftsmanship and luxurious materials.`}
          />
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.categoryContent}>
          <aside className={styles.filterSidebar}>
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Categories</h3>
              <ul className={styles.filterList}>
                <li><Link href="/category/clothing" className={slug === 'clothing' ? styles.active : ''}>Clothing</Link></li>
                <li><Link href="/category/shoes" className={slug === 'shoes' ? styles.active : ''}>Shoes</Link></li>
                <li><Link href="/category/bags" className={slug === 'bags' ? styles.active : ''}>Bags</Link></li>
                <li><Link href="/category/accessories" className={slug === 'accessories' ? styles.active : ''}>Accessories</Link></li>
                <li><Link href="/category/jewelry" className={slug === 'jewelry' ? styles.active : ''}>Jewelry</Link></li>
              </ul>
            </div>
            
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Price Range</h3>
              <ul className={styles.filterList}>
                <li><Link href="#">Under $500</Link></li>
                <li><Link href="#">$500 - $1000</Link></li>
                <li><Link href="#">$1000 - $2000</Link></li>
                <li><Link href="#">$2000 - $5000</Link></li>
                <li><Link href="#">$5000+</Link></li>
              </ul>
            </div>
            
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Brand</h3>
              <ul className={styles.filterList}>
                <li><Link href="#">Rayshel Collection</Link></li>
                <li><Link href="#">Rayshel Accessories</Link></li>
                <li><Link href="#">Rayshel Jewelry</Link></li>
              </ul>
            </div>
            
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Featured</h3>
              <ul className={styles.filterList}>
                <li><Link href="/category/new-arrivals" className={slug === 'new-arrivals' ? styles.active : ''}>New Arrivals</Link></li>
                <li><Link href="/sale">Sale</Link></li>
                <li><Link href="/category/exclusive">Exclusive</Link></li>
              </ul>
            </div>
          </aside>
          
          <div className={styles.productGrid}>
            <div className={styles.sortRow}>
              <p className={styles.resultCount}>{categoryProducts.length} products</p>
              <div className={styles.sortDropdown}>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" className={styles.sortSelect}>
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            
            <ProductGrid products={categoryProducts} columns={3} />
          </div>
        </div>
      </div>
    </div>
  );
} 