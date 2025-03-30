import React from 'react';
import Image from 'next/image';
import { SectionTitle } from '@/components/UI';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Our Story</h1>
          <p className={styles.heroSubtitle}>
            Crafting luxury since 2010
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.storySection}>
          <div className={styles.storyContent}>
            <SectionTitle 
              title="The Rayshel Legacy" 
              subtitle="Redefining luxury for the modern connoisseur"
              alignment="left"
            />
            <div className={styles.storyText}>
              <p>
                Rayshel was founded in 2010 by designer Elizabeth Rayshel with a singular vision: to create timeless luxury accessories that transcend trends while embracing modern sensibilities. What began as a small atelier in Milan has blossomed into a globally recognized name synonymous with uncompromising quality and artistic innovation.
              </p>
              <p>
                Our philosophy centers on the marriage of traditional craftsmanship with contemporary design. Each Rayshel piece represents the culmination of generations of artisanal expertise, reimagined for today&apos;s discerning clientele who value both heritage and forward-thinking aesthetics.
              </p>
            </div>
          </div>
          <div className={styles.storyImage}>
            <Image 
              src="/images/about-1.jpg" 
              alt="Rayshel atelier"
              width={600}
              height={800}
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.valuesSection}>
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide our craft"
            alignment="center"
          />
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Timeless Craftsmanship</h3>
              <p>
                Each piece is meticulously handcrafted by our master artisans using techniques passed down through generations, ensuring exceptional quality that stands the test of time.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Ethical Sourcing</h3>
              <p>
                We are committed to responsible sourcing of materials, working exclusively with suppliers who meet our rigorous standards for environmental stewardship and fair labor practices.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Artistic Innovation</h3>
              <p>
                While honoring traditional methods, we constantly push the boundaries of design, exploring new techniques and aesthetics that redefine luxury for the contemporary world.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Uncompromising Quality</h3>
              <p>
                We maintain the highest standards at every stage of production, from material selection to final inspection, ensuring each Rayshel creation exceeds expectations in form and function.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.craftSection}>
          <div className={styles.craftImage}>
            <Image 
              src="/images/about-2.jpg" 
              alt="Craftsman working on leather goods"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.craftContent}>
            <SectionTitle 
              title="The Art of Craftsmanship" 
              subtitle="Every stitch tells our story"
              alignment="left"
            />
            <div className={styles.craftText}>
              <p>
                Each Rayshel creation begins its journey in our Milan atelier, where a team of skilled artisans with decades of experience bring our designs to life. We source the finest materials from around the world—supple leathers from Italy&apos;s most prestigious tanneries, lustrous hardware from expert metalworkers, and sumptuous textiles developed exclusively for our collections.
              </p>
              <p>
                The creation process is meticulous and unhurried. Our craftspeople dedicate up to 40 hours to a single piece, ensuring every cut, fold, and stitch meets our exacting standards. This devotion to craftsmanship is evident in the finished product—accessories that not only enhance your style but become more beautiful with time and use, developing a rich patina that tells the story of your journeys together.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The visionaries behind Rayshel"
            alignment="center"
          />
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.teamImage}>
                <Image 
                  src="/images/team-1.jpg" 
                  alt="Elizabeth Rayshel - Founder & Creative Director"
                  width={300}
                  height={400}
                  className={styles.image}
                />
              </div>
              <h3>Elizabeth Rayshel</h3>
              <p className={styles.teamPosition}>Founder & Creative Director</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.teamImage}>
                <Image 
                  src="/images/team-2.jpg" 
                  alt="Marco Bianchi - Head of Atelier"
                  width={300}
                  height={400}
                  className={styles.image}
                />
              </div>
              <h3>Marco Bianchi</h3>
              <p className={styles.teamPosition}>Head of Atelier</p>
            </div>
            
            <div className={styles.teamMember}>
              <div className={styles.teamImage}>
                <Image 
                  src="/images/team-3.jpg" 
                  alt="Sophia Chen - Design Director"
                  width={300}
                  height={400}
                  className={styles.image}
                />
              </div>
              <h3>Sophia Chen</h3>
              <p className={styles.teamPosition}>Design Director</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 