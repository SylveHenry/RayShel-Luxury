import Image from 'next/image';
import styles from './page.module.css';

const storeLocations = [
  {
    id: 1,
    city: 'Paris',
    country: 'France',
    flagship: true,
    address: '21 Rue du Faubourg Saint-Honoré',
    postalCode: '75008 Paris',
    phone: '+33 1 42 68 33 00',
    email: 'paris@rayshel.com',
    hours: 'Monday - Saturday: 10:00 - 19:00\nSunday: Closed',
    image: '/images/store-paris.jpg',
    mapUrl: 'https://maps.google.com/?q=21+Rue+du+Faubourg+Saint-Honoré+75008+Paris+France'
  },
  {
    id: 2,
    city: 'New York',
    country: 'United States',
    flagship: true,
    address: '745 Fifth Avenue',
    postalCode: 'NY 10151',
    phone: '+1 212-555-1234',
    email: 'newyork@rayshel.com',
    hours: 'Monday - Saturday: 10:00 - 20:00\nSunday: 12:00 - 18:00',
    image: '/images/store-newyork.jpg',
    mapUrl: 'https://maps.google.com/?q=745+Fifth+Avenue+NY+10151'
  },
  {
    id: 3,
    city: 'Milan',
    country: 'Italy',
    flagship: false,
    address: 'Via Monte Napoleone, 8',
    postalCode: '20121 Milano',
    phone: '+39 02-555-7890',
    email: 'milan@rayshel.com',
    hours: 'Monday - Saturday: 10:00 - 19:30\nSunday: Closed',
    image: '/images/store-milan.jpg',
    mapUrl: 'https://maps.google.com/?q=Via+Monte+Napoleone+8+20121+Milano+Italy'
  },
  {
    id: 4,
    city: 'London',
    country: 'United Kingdom',
    flagship: true,
    address: '169-173 New Bond Street',
    postalCode: 'W1S 4RN',
    phone: '+44 20-7123-4567',
    email: 'london@rayshel.com',
    hours: 'Monday - Saturday: 10:00 - 19:00\nSunday: 12:00 - 18:00',
    image: '/images/store-london.jpg',
    mapUrl: 'https://maps.google.com/?q=169-173+New+Bond+Street+W1S+4RN+London+UK'
  },
  {
    id: 5,
    city: 'Tokyo',
    country: 'Japan',
    flagship: false,
    address: '4-12-10 Ginza, Chuo-ku',
    postalCode: 'Tokyo 104-0061',
    phone: '+81 3-1234-5678',
    email: 'tokyo@rayshel.com',
    hours: 'Monday - Sunday: 11:00 - 20:00',
    image: '/images/store-tokyo.jpg',
    mapUrl: 'https://maps.google.com/?q=4-12-10+Ginza+Chuo-ku+Tokyo+104-0061+Japan'
  },
  {
    id: 6,
    city: 'Hong Kong',
    country: 'China',
    flagship: false,
    address: 'Shop 206-207, 2/F, Landmark Atrium, 15 Queen\'s Road Central',
    postalCode: 'Hong Kong',
    phone: '+852 2123-4567',
    email: 'hongkong@rayshel.com',
    hours: 'Monday - Sunday: 10:30 - 21:00',
    image: '/images/store-hongkong.jpg',
    mapUrl: 'https://maps.google.com/?q=15+Queens+Road+Central+Hong+Kong'
  },
  {
    id: 7,
    city: 'Dubai',
    country: 'UAE',
    flagship: false,
    address: 'Dubai Mall, Financial Centre Road',
    postalCode: 'Dubai',
    phone: '+971 4-123-4567',
    email: 'dubai@rayshel.com',
    hours: 'Saturday - Thursday: 10:00 - 22:00\nFriday: 14:00 - 22:00',
    image: '/images/store-dubai.jpg',
    mapUrl: 'https://maps.google.com/?q=Dubai+Mall+Financial+Centre+Road+Dubai+UAE'
  },
  {
    id: 8,
    city: 'Sydney',
    country: 'Australia',
    flagship: false,
    address: '135 King Street, Pitt Street Mall',
    postalCode: 'NSW 2000',
    phone: '+61 2-9123-4567',
    email: 'sydney@rayshel.com',
    hours: 'Monday - Wednesday, Friday: 10:00 - 19:00\nThursday: 10:00 - 21:00\nSaturday: 10:00 - 19:00\nSunday: 11:00 - 18:00',
    image: '/images/store-sydney.jpg',
    mapUrl: 'https://maps.google.com/?q=135+King+Street+Pitt+Street+Mall+NSW+2000+Australia'
  }
];

export default function StoresPage() {
  const flagshipStores = storeLocations.filter(store => store.flagship);
  const otherStores = storeLocations.filter(store => !store.flagship);

  return (
    <div className={styles.storesPage}>
      <div className={styles.storesHero}>
        <div className={styles.heroContent}>
          <h1>Store Locator</h1>
          <p>Experience Rayshel luxury in our boutiques around the world</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.storesIntro}>
          <h2>Our Locations</h2>
          <p>
            Visit our boutiques to experience the full Rayshel collection and receive personalized 
            styling advice from our knowledgeable team. Each store is designed to reflect our 
            commitment to refined elegance and exceptional craftsmanship.
          </p>
        </section>
        
        <section className={styles.flagshipSection}>
          <h2 className={styles.sectionTitle}>Flagship Boutiques</h2>
          <div className={styles.flagshipGrid}>
            {flagshipStores.map(store => (
              <div key={store.id} className={styles.flagshipItem}>
                <div className={styles.storeImageContainer}>
                  <div className={styles.flagshipBadge}>Flagship</div>
                  <Image 
                    src={store.image} 
                    alt={`Rayshel ${store.city} Store`} 
                    width={600} 
                    height={400}
                    className={styles.storeImage}
                    unoptimized={true}
                    style={{ backgroundColor: '#f8f8f8' }}
                  />
                </div>
                <div className={styles.storeDetails}>
                  <h3>{store.city}, {store.country}</h3>
                  <div className={styles.storeInfo}>
                    <div className={styles.storeAddress}>
                      <p>{store.address}</p>
                      <p>{store.postalCode}</p>
                    </div>
                    <div className={styles.storeContact}>
                      <p>{store.phone}</p>
                      <p>{store.email}</p>
                    </div>
                  </div>
                  <div className={styles.storeHours}>
                    <h4>Hours</h4>
                    <p>{store.hours.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < store.hours.split('\n').length - 1 && <br />}
                      </span>
                    ))}</p>
                  </div>
                  <a 
                    href={store.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.directionsButton}
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className={styles.globalSection}>
          <h2 className={styles.sectionTitle}>Global Boutiques</h2>
          <div className={styles.globalGrid}>
            {otherStores.map(store => (
              <div key={store.id} className={styles.globalItem}>
                <div className={styles.storeImageContainer}>
                  <Image 
                    src={store.image} 
                    alt={`Rayshel ${store.city} Store`} 
                    width={400} 
                    height={300}
                    className={styles.storeImage}
                    unoptimized={true}
                    style={{ backgroundColor: '#f8f8f8' }}
                  />
                </div>
                <div className={styles.storeDetails}>
                  <h3>{store.city}, {store.country}</h3>
                  <div className={styles.storeInfo}>
                    <div className={styles.storeAddress}>
                      <p>{store.address}</p>
                      <p>{store.postalCode}</p>
                    </div>
                    <div className={styles.storeContact}>
                      <p>{store.phone}</p>
                      <p>{store.email}</p>
                    </div>
                  </div>
                  <div className={styles.storeHours}>
                    <h4>Hours</h4>
                    <p>{store.hours.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < store.hours.split('\n').length - 1 && <br />}
                      </span>
                    ))}</p>
                  </div>
                  <a 
                    href={store.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.directionsButton}
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className={styles.bookingSection}>
          <div className={styles.bookingContent}>
            <h2>Personal Shopping Experience</h2>
            <p>
              For an elevated shopping experience, book a private appointment with one of our 
              experienced stylists. Enjoy personalized attention, curated selection, and exclusive 
              access to new arrivals before they reach the shop floor.
            </p>
            <div className={styles.bookingButtons}>
              <a href="/contact" className={styles.primaryButton}>Book an Appointment</a>
              <a href="/our-services" className={styles.secondaryButton}>Explore Our Services</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 