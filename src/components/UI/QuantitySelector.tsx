"use client";

import React, { useState } from 'react';
import styles from './QuantitySelector.module.css';

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      if (onChange) onChange(newValue);
    }
  };

  return (
    <div className={styles.quantityControls}>
      <button 
        className={styles.quantityBtn} 
        onClick={decrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <input 
        type="text" 
        value={quantity} 
        className={styles.quantityInput}
        readOnly 
        aria-label="Quantity"
      />
      <button 
        className={styles.quantityBtn} 
        onClick={increment}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector; 