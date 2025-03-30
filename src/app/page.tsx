import { HeroSlider, FeatureBanner } from '@/components/Hero';
import { ProductGrid } from '@/components/Products';
import { SectionTitle } from '@/components/UI';
import styles from './page.module.css';

const heroSlides = [
  {
    id: '1',
    image: '/images/hero-1.jpg',
    title: 'Autumn Collection 2024',
    subtitle: 'Discover timeless luxury pieces crafted with exquisite attention to detail.',
    buttonText: 'Shop Collection',
    buttonLink: '/category/new-arrivals',
    alignment: 'left' as const,
  },
  {
    id: '2',
    image: '/images/hero-2.jpg',
    title: 'Exclusive Jewelry',
    subtitle: 'Adorn yourself with our handcrafted pieces designed for the modern connoisseur.',
    buttonText: 'Explore Jewelry',
    buttonLink: '/category/jewelry',
    alignment: 'center' as const,
  },
  {
    id: '3',
    image: '/images/hero-3.jpg',
    title: 'Luxury Accessories',
    subtitle: 'Complete your look with our premium accessories, made with the finest materials.',
    buttonText: 'View Accessories',
    buttonLink: '/category/accessories',
    alignment: 'right' as const,
  },
];

const newArrivals = [
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
];

const bestSellers = [
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
];

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSlider slides={heroSlides} />
      
      <div className={styles.container}>
        <section className={styles.featuredSection}>
          <SectionTitle 
            title="New Arrivals" 
            subtitle="Discover our latest collections, crafted with exquisite attention to detail and the finest materials."
          />
          <ProductGrid products={newArrivals} columns={3} />
        </section>
      </div>
      
      <FeatureBanner 
        image="/images/feature-1.jpg"
        title="The Art of Craftsmanship"
        subtitle="Each Rayshel piece is meticulously crafted by skilled artisans, using time-honored techniques and the finest materials from around the world."
        buttonText="Discover Our Craft"
        buttonLink="/our-craft"
      />
      
      <div className={styles.container}>
        <section className={styles.featuredSection}>
          <SectionTitle 
            title="Bestsellers" 
            subtitle="Our most coveted pieces, cherished by fashion connoisseurs worldwide."
          />
          <ProductGrid products={bestSellers} columns={4} />
        </section>
      </div>
      
      <FeatureBanner 
        image="/images/feature-2.jpg"
        title="The Exclusive Collection"
        subtitle="Limited edition pieces created for the discerning collector. Experience luxury reimagined for the modern era."
        buttonText="Shop Limited Editions"
        buttonLink="/category/exclusive"
        direction="right"
      />
    </div>
  );
}
