import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FeatureBanner.module.css';

type FeatureBannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  direction?: 'left' | 'right';
};

const FeatureBanner: React.FC<FeatureBannerProps> = ({
  image,
  title,
  subtitle,
  buttonText,
  buttonLink,
  direction = 'left',
}) => {
  return (
    <div className={`${styles.featureBanner} ${styles[`direction-${direction}`]}`}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
          unoptimized={true}
          style={{ backgroundColor: '#f8f8f8' }}
        />
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <Link href={buttonLink} className={styles.button}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default FeatureBanner; 