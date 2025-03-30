import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  hover_image?: string;
  isNew?: boolean;
  isSale?: boolean;
};

type ProductGridProps = {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = 3,
  className = ''
}) => {
  const gridClassName = `${styles.productGrid} ${styles[`columns-${columns}`]} ${className}`;

  return (
    <div className={gridClassName}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          brand={product.brand}
          price={product.price}
          originalPrice={product.originalPrice}
          image={product.image}
          hover_image={product.hover_image}
          isNew={product.isNew}
          isSale={product.isSale}
        />
      ))}
    </div>
  );
};

export default ProductGrid; 