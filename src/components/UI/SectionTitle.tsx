import React from 'react';
import styles from './SectionTitle.module.css';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  subtitleClassName?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
  subtitleClassName = '',
}) => {
  return (
    <div className={`${styles.sectionTitle} ${styles[`align-${alignment}`]} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={`${styles.subtitle} ${subtitleClassName}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle; 