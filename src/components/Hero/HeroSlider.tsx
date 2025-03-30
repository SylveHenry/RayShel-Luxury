"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

type SlideProps = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  alignment: 'left' | 'center' | 'right';
};

type HeroSliderProps = {
  slides: SlideProps[];
  autoPlay?: boolean;
  autoPlaySpeed?: number;
};

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoPlay = true,
  autoPlaySpeed = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition time
  }, [isTransitioning, slides.length]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToNextSlide();
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlaySpeed, goToNextSlide]);

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition time
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition time
  };

  return (
    <div className={styles.heroSlider}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            } ${styles[`align-${slide.alignment}`]}`}
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                sizes="100vw"
                className={styles.image}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
            </div>
            <div className={styles.slideContent}>
              <div className={styles.slideTextContainer}>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                <Link 
                  href={slide.buttonLink} 
                  className={styles.slideButton}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className={`${styles.navButton} ${styles.prevButton}`} 
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className={`${styles.navButton} ${styles.nextButton}`} 
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 