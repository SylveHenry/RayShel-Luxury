import Image from 'next/image';
import styles from './page.module.css';

export default function SustainabilityPage() {
  return (
    <div className={styles.sustainabilityPage}>
      <div className={styles.sustainabilityHero}>
        <div className={styles.heroContent}>
          <h1>Our Commitment to Sustainability</h1>
          <p>Luxury with responsibility, elegance with purpose</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.introBanner}>
          <div className={styles.introText}>
            <h2>Redefining Luxury</h2>
            <p>
              At Rayshel, we believe that true luxury must incorporate responsibility. 
              We are committed to creating exceptional products that not only meet the 
              highest standards of quality and design, but also respect our planet and 
              its people. Our approach to sustainability is holistic, focusing on materials, 
              manufacturing processes, people, and our broader impact on communities and ecosystems.
            </p>
          </div>
        </section>

        <section className={styles.pillarsSection}>
          <h2 className={styles.sectionTitle}>Our Sustainability Pillars</h2>
          
          <div className={styles.pillarGrid}>
            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <Image 
                  src="/images/icon-materials.svg" 
                  alt="Sustainable Materials" 
                  width={50} 
                  height={50}
                  unoptimized={true}
                  style={{ backgroundColor: '#f8f8f8' }}
                />
              </div>
              <h3>Ethical Sourcing</h3>
              <p>
                We carefully trace our materials back to their origin, ensuring they meet 
                our stringent ethical and environmental standards. From responsibly mined 
                metals to certified organic textiles, we prioritize materials that minimize 
                harm to ecosystems and communities.
              </p>
            </div>
            
            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <Image 
                  src="/images/icon-production.svg" 
                  alt="Ethical Production" 
                  width={50} 
                  height={50}
                  unoptimized={true}
                  style={{ backgroundColor: '#f8f8f8' }}
                />
              </div>
              <h3>Responsible Manufacturing</h3>
              <p>
                Our production facilities uphold the highest standards for environmental 
                management. We continuously work to reduce our carbon footprint, minimize 
                waste, conserve water, and eliminate harmful chemicals from our processes.
              </p>
            </div>
            
            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <Image 
                  src="/images/icon-people.svg" 
                  alt="Fair Treatment" 
                  width={50} 
                  height={50}
                  unoptimized={true}
                  style={{ backgroundColor: '#f8f8f8' }}
                />
              </div>
              <h3>Fair Labor Practices</h3>
              <p>
                Every person involved in creating Rayshel products receives fair compensation, 
                works in safe conditions, and is treated with dignity and respect. We regularly 
                audit our supply chain to ensure compliance with international labor standards.
              </p>
            </div>
            
            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <Image 
                  src="/images/icon-longevity.svg" 
                  alt="Product Longevity" 
                  width={50} 
                  height={50}
                  unoptimized={true}
                  style={{ backgroundColor: '#f8f8f8' }}
                />
              </div>
              <h3>Enduring Quality</h3>
              <p>
                The most sustainable product is one that lasts. We design our pieces to withstand 
                the test of time, both in terms of physical durability and timeless style. We offer 
                repair services to extend the life of our products even further.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.initiativesSection}>
          <h2 className={styles.sectionTitle}>Our Initiatives</h2>
          
          <div className={styles.initiativeItem}>
            <div className={styles.initiativeContent}>
              <h3>Rayshel Regenerative Sourcing</h3>
              <p>
                By 2025, we aim to source 100% of our natural materials from regenerative 
                agricultural systems that restore soil health, enhance biodiversity, and sequester 
                carbon. We are working closely with farmers and producers to transition conventional 
                farming practices to regenerative ones, providing technical support and secure purchasing 
                agreements.
              </p>
              <div className={styles.progressContainer}>
                <div className={styles.progressLabel}>Progress: 68% Complete</div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.initiativeImage}>
              <Image 
                src="/images/initiative-regenerative.jpg" 
                alt="Regenerative agriculture" 
                width={500} 
                height={350}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
            </div>
          </div>
          
          <div className={`${styles.initiativeItem} ${styles.reversed}`}>
            <div className={styles.initiativeContent}>
              <h3>Zero Waste Production</h3>
              <p>
                Our commitment to eliminating waste from our production process has led to innovative 
                solutions across our ateliers. We have implemented a comprehensive system for recycling 
                and repurposing fabric scraps, redesigned packaging to eliminate single-use plastics, 
                and invested in water recycling systems that reduce our freshwater consumption by 85%.
              </p>
              <div className={styles.progressContainer}>
                <div className={styles.progressLabel}>Progress: 92% Complete</div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.initiativeImage}>
              <Image 
                src="/images/initiative-zerowaste.jpg" 
                alt="Zero waste production" 
                width={500} 
                height={350}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
            </div>
          </div>
          
          <div className={styles.initiativeItem}>
            <div className={styles.initiativeContent}>
              <h3>Artisan Preservation Program</h3>
              <p>
                Traditional craftsmanship is not only crucial for the creation of exceptional luxury 
                products but also represents cultural heritage that must be preserved. Our Artisan 
                Preservation Program provides training, education, and employment opportunities to 
                young artisans, ensuring that traditional skills are passed on to future generations 
                while providing sustainable livelihoods in communities where these crafts originated.
              </p>
              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>175</span>
                  <span className={styles.statLabel}>Apprentices Trained</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>23</span>
                  <span className={styles.statLabel}>Partner Communities</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>12</span>
                  <span className={styles.statLabel}>Craft Disciplines</span>
                </div>
              </div>
            </div>
            <div className={styles.initiativeImage}>
              <Image 
                src="/images/initiative-artisans.jpg" 
                alt="Artisan preservation" 
                width={500} 
                height={350}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
            </div>
          </div>
        </section>

        <section className={styles.certificationsSection}>
          <h2 className={styles.sectionTitle}>Our Certifications</h2>
          <p className={styles.certIntro}>
            We hold ourselves accountable through third-party certifications that verify our 
            commitments to environmental and social responsibility.
          </p>

          <div className={styles.certGrid}>
            <div className={styles.certItem}>
              <Image 
                src="/images/cert-bci.jpg" 
                alt="Better Cotton Initiative" 
                width={180} 
                height={100}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Better Cotton Initiative</h4>
            </div>
            
            <div className={styles.certItem}>
              <Image 
                src="/images/cert-gots.jpg" 
                alt="Global Organic Textile Standard" 
                width={180} 
                height={100}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Global Organic Textile Standard</h4>
            </div>
            
            <div className={styles.certItem}>
              <Image 
                src="/images/cert-rws.jpg" 
                alt="Responsible Wool Standard" 
                width={180} 
                height={100}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Responsible Wool Standard</h4>
            </div>
            
            <div className={styles.certItem}>
              <Image 
                src="/images/cert-rmi.jpg" 
                alt="Responsible Mining Initiative" 
                width={180} 
                height={100}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Responsible Mining Initiative</h4>
            </div>
            
            <div className={styles.certItem}>
              <Image 
                src="/images/cert-fla.jpg" 
                alt="Fair Labor Association" 
                width={180} 
                height={100}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Fair Labor Association</h4>
            </div>
            
            <div className={styles.certItem}>
              <Image 
                src="/images/cert-carbontrust.jpg" 
                alt="Carbon Trust Standard" 
                width={180} 
                height={100}
                unoptimized={true}
                style={{ backgroundColor: '#f8f8f8' }}
              />
              <h4>Carbon Trust Standard</h4>
            </div>
          </div>
        </section>

        <section className={styles.transparencySection}>
          <h2 className={styles.sectionTitle}>Our Transparency</h2>
          <p className={styles.transparencyIntro}>
            We believe in full transparency about our progress toward sustainability goals. 
            View our latest reports and learn how we hold ourselves accountable.
          </p>
          
          <div className={styles.reportLinks}>
            <a href="/pdfs/sustainability-report-2023.pdf" className={styles.reportLink}>
              <span className={styles.reportIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H16L12 17L8 13H11V7Z" fill="currentColor"/>
                </svg>
              </span>
              <span className={styles.reportText}>
                <span className={styles.reportTitle}>2023 Sustainability Report</span>
                <span className={styles.reportDesc}>Comprehensive overview of our environmental and social impact</span>
              </span>
            </a>
            
            <a href="/pdfs/environmental-impact-2023.pdf" className={styles.reportLink}>
              <span className={styles.reportIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H16L12 17L8 13H11V7Z" fill="currentColor"/>
                </svg>
              </span>
              <span className={styles.reportText}>
                <span className={styles.reportTitle}>Environmental Impact Assessment</span>
                <span className={styles.reportDesc}>Detailed analysis of our carbon, water, and waste footprint</span>
              </span>
            </a>
            
            <a href="/pdfs/social-responsibility-2023.pdf" className={styles.reportLink}>
              <span className={styles.reportIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H16L12 17L8 13H11V7Z" fill="currentColor"/>
                </svg>
              </span>
              <span className={styles.reportText}>
                <span className={styles.reportTitle}>Social Responsibility Report</span>
                <span className={styles.reportDesc}>Overview of our labor practices and community initiatives</span>
              </span>
            </a>
          </div>
        </section>

        <section className={styles.sustainabilityCTA}>
          <h2>Join Us on the Journey</h2>
          <p>
            Sustainability is not a destination but a continuous journey of improvement. 
            We invite you to join us in creating a more responsible luxury industry.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/category/sustainable-collection" className={styles.primaryButton}>Shop Sustainable Collection</a>
            <a href="/contact" className={styles.secondaryButton}>Contact Our Sustainability Team</a>
          </div>
        </section>
      </div>
    </div>
  );
} 