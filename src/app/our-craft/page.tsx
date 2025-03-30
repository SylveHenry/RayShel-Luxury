import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function OurCraftPage() {
  return (
    <div className={styles.craftPage}>
      <div className={styles.craftHero}>
        <div className={styles.craftHeroContent}>
          <h1>The Art of Craftsmanship</h1>
          <p>Excellence in every detail, perfection in every stitch</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.craftIntro}>
          <h2>Our Philosophy</h2>
          <p>
            At Rayshel, we believe that true luxury is not merely about appearance, but about the integrity 
            of creation. Each piece we craft represents a harmonious blend of time-honored techniques and 
            innovative design, executed with uncompromising attention to detail and a deep respect for 
            materials of exceptional quality.
          </p>
        </section>

        <section className={styles.craftProcess}>
          <div className={styles.processItem}>
            <div className={styles.processContent}>
              <h3>Material Selection</h3>
              <p>
                We source only the finest materials from around the world: cashmere from Mongolia, 
                silk from Italy, leather from France, and precious metals from ethical mines. Our 
                rigorous selection process ensures that only materials of exceptional quality make 
                their way into our atelier. Each material is carefully inspected for its texture, 
                durability, and aesthetic qualities.
              </p>
              <ul className={styles.materialsList}>
                <li>Italian silk from Como</li>
                <li>Scottish cashmere from the Highlands</li>
                <li>French calfskin from traditional tanneries</li>
                <li>Japanese denim from Okayama</li>
                <li>Precious metals from certified ethical sources</li>
              </ul>
            </div>
            <div className={styles.processImage}>
              <Image 
                src="/images/craft-materials.jpg" 
                alt="Luxury materials" 
                width={500} 
                height={600}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
            </div>
          </div>

          <div className={`${styles.processItem} ${styles.reversed}`}>
            <div className={styles.processContent}>
              <h3>Artisanal Expertise</h3>
              <p>
                Our team of master craftspeople brings generations of expertise to each creation. 
                Many have trained for decades, perfecting techniques passed down through families 
                or learned in prestigious fashion houses. Their hands possess an intuitive knowledge 
                that no machine can replicate – the ability to feel the precise tension of a stitch, 
                the subtle variations in leather thickness, or the perfect drape of a fabric.
              </p>
              <p>
                Each artisan specializes in a specific craft, whether it&apos;s pattern cutting, 
                hand-stitching, gem setting, or leather work. This dedication to specialization 
                ensures that every aspect of production benefits from focused expertise.
              </p>
            </div>
            <div className={styles.processImage}>
              <Image 
                src="/images/craft-artisans.jpg" 
                alt="Master artisans at work" 
                width={500} 
                height={600}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
            </div>
          </div>

          <div className={styles.processItem}>
            <div className={styles.processContent}>
              <h3>Meticulous Creation</h3>
              <p>
                The creation of each Rayshel piece follows a precise journey from concept to completion. 
                Our designers work closely with pattern makers to translate visionary ideas into 
                technical blueprints. These patterns are then carefully cut from our premium materials, 
                with not a millimeter of error tolerated.
              </p>
              <p>
                Assembly is performed with extraordinary precision – each stitch placed by hand or using 
                specialized equipment operated by skilled technicians. Multiple quality checks occur 
                throughout the process, with senior craftspeople inspecting every detail. A single 
                garment may pass through as many as 30 pairs of hands before completion, each adding 
                their expertise to the piece.
              </p>
            </div>
            <div className={styles.processImage}>
              <Image 
                src="/images/craft-creation.jpg" 
                alt="Meticulous creation process" 
                width={500} 
                height={600}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
            </div>
          </div>

          <div className={`${styles.processItem} ${styles.reversed}`}>
            <div className={styles.processContent}>
              <h3>Finishing Excellence</h3>
              <p>
                The final stage of creation may be the most crucial – where a beautifully made piece 
                becomes an exceptional one. Our finishers apply specialized techniques to perfect 
                every detail: edges are meticulously painted on leather goods, fabric surfaces are 
                examined under specialized lighting, and hardware is polished to a flawless shine.
              </p>
              <p>
                Before a Rayshel creation receives our mark, it undergoes a comprehensive final 
                inspection. Senior craftspeople with decades of experience evaluate each piece 
                against exacting standards. Only those that demonstrate perfect execution in every 
                aspect earn the right to carry our name.
              </p>
            </div>
            <div className={styles.processImage}>
              <Image 
                src="/images/craft-finishing.jpg" 
                alt="Finishing touches" 
                width={500} 
                height={600}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
            </div>
          </div>
        </section>

        <section className={styles.craftQuote}>
          <blockquote>
            &ldquo;The difference between good and exceptional is in the details that most will never see, 
            but that we know are there. That is the essence of true luxury.&rdquo;
          </blockquote>
          <cite>— Claire Rayshel, Founder</cite>
        </section>

        <section className={styles.craftAtelier}>
          <h2>Our Ateliers</h2>
          <p className={styles.atelierIntro}>
            Rayshel maintains dedicated ateliers across Europe, each specializing in different 
            aspects of our collections. These spaces are more than workshops – they are sanctuaries 
            of creativity where traditional craftsmanship merges with contemporary vision.
          </p>
          
          <div className={styles.atelierGrid}>
            <div className={styles.atelierItem}>
              <Image 
                src="/images/atelier-paris.jpg" 
                alt="Paris Atelier" 
                width={380} 
                height={250}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Paris, France</h4>
              <p>Our flagship atelier, specializing in haute couture and ready-to-wear clothing.</p>
            </div>
            
            <div className={styles.atelierItem}>
              <Image 
                src="/images/atelier-milan.jpg" 
                alt="Milan Atelier" 
                width={380} 
                height={250}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Milan, Italy</h4>
              <p>Dedicated to leather goods and accessories, blending Italian tradition with modern luxury.</p>
            </div>
            
            <div className={styles.atelierItem}>
              <Image 
                src="/images/atelier-geneva.jpg" 
                alt="Geneva Atelier" 
                width={380} 
                height={250}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Geneva, Switzerland</h4>
              <p>Our jewelry workshop, where master gemologists and goldsmiths create timeless pieces.</p>
            </div>
          </div>
        </section>

        <section className={styles.craftCTA}>
          <h2>Experience Rayshel Craftsmanship</h2>
          <p>Discover our collections, each a testament to our commitment to excellence</p>
          <div className={styles.ctaButtons}>
            <Link href="/category/new-arrivals" className={styles.primaryButton}>Shop New Arrivals</Link>
            <Link href="/stores" className={styles.secondaryButton}>Visit Our Boutiques</Link>
          </div>
        </section>
      </div>
    </div>
  );
} 