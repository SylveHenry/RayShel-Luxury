import React from 'react';
import { ProductCard } from '../ProductCard';
import styles from './ProductGrid.module.css';

interface Product {
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

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  columns = 4 
}) => {
  const gridClass = `grid-${columns}`;
  
  return (
    <div className={`${styles.productGrid} ${styles[gridClass]}`}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          brand={product.brand}
          price={product.price}
          currency={product.currency}
          image={product.image}
          hover_image={product.hover_image}
          isNew={product.isNew}
          isSale={product.isSale}
          originalPrice={product.originalPrice}
        />
      ))}
    </div>
  );
}; 