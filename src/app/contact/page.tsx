import React from 'react';
import Image from 'next/image';
import { SectionTitle } from '@/components/UI';
import styles from './page.module.css';

export default function ContactPage() {
  // Mock store locations
  const storeLocations = [
    {
      id: 1,
      city: 'Milan',
      address: 'Via Montenapoleone, 8',
      postalCode: '20121',
      country: 'Italy',
      phone: '+39 02 7600 6578',
      email: 'milan@rayshel.com',
      hours: 'Mon-Sat: 10am-7pm, Sun: Closed',
      image: '/images/store-milan.jpg'
    },
    {
      id: 2,
      city: 'Paris',
      address: '12 Rue Saint-Honoré',
      postalCode: '75001',
      country: 'France',
      phone: '+33 1 42 60 38 59',
      email: 'paris@rayshel.com',
      hours: 'Mon-Sat: 10am-7pm, Sun: Closed',
      image: '/images/store-paris.jpg'
    },
    {
      id: 3,
      city: 'New York',
      address: '677 Fifth Avenue',
      postalCode: 'NY 10022',
      country: 'United States',
      phone: '+1 212-756-8000',
      email: 'newyork@rayshel.com',
      hours: 'Mon-Sat: 10am-7pm, Sun: 12pm-6pm',
      image: '/images/store-newyork.jpg'
    }
  ];

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <SectionTitle 
            title="Contact Us" 
            subtitle="We'd love to hear from you"
            alignment="center"
          />
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactForm}>
            <div className={styles.formHeader}>
              <h2>Send Us a Message</h2>
              <p>
                Complete the form below, and our client relations team will respond to your inquiry within 24 hours.
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name*</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className={styles.formControl} 
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name*</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className={styles.formControl} 
                    required 
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address*</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={styles.formControl} 
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className={styles.formControl} 
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject*</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={styles.formControl} 
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message*</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className={styles.formControl} 
                  required
                ></textarea>
              </div>

              <div className={styles.formTerms}>
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the Privacy Policy and consent to Rayshel processing my personal data for the purpose of contacting me.
                </label>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5H13.66M9.5 12.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Customer Service</h3>
              <p>
                For order status, returns, or product inquiries
              </p>
              <div className={styles.infoContact}>
                <p>Email: <a href="mailto:care@rayshel.com">care@rayshel.com</a></p>
                <p>Phone: <a href="tel:+18885551234">+1 (888) 555-1234</a></p>
                <p>Hours: Monday-Friday, 9am-6pm EST</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Sales & Appointments</h3>
              <p>
                For product availability, pricing, or to schedule an in-store appointment
              </p>
              <div className={styles.infoContact}>
                <p>Email: <a href="mailto:appointments@rayshel.com">appointments@rayshel.com</a></p>
                <p>Phone: <a href="tel:+18885552345">+1 (888) 555-2345</a></p>
                <p>Hours: Monday-Saturday, 10am-7pm Local Time</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 10V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.995 11H16.005M11.995 11H12.005M7.995 11H8.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Media Inquiries</h3>
              <p>
                For press, partnerships, and sponsorship opportunities
              </p>
              <div className={styles.infoContact}>
                <p>Email: <a href="mailto:press@rayshel.com">press@rayshel.com</a></p>
                <p>Phone: <a href="tel:+18885553456">+1 (888) 555-3456</a></p>
                <p>Hours: Monday-Friday, 9am-5pm EST</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.storeLocations}>
          <SectionTitle 
            title="Visit Our Flagship Stores" 
            subtitle="Experience luxury in person"
            alignment="center"
          />

          <div className={styles.storeGrid}>
            {storeLocations.map(location => (
              <div className={styles.storeCard} key={location.id}>
                <div className={styles.storeImage}>
                  <Image 
                    src={location.image} 
                    alt={`Rayshel ${location.city} Store`}
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                </div>
                <div className={styles.storeInfo}>
                  <h3>{location.city}</h3>
                  <address>
                    {location.address}<br />
                    {location.postalCode}<br />
                    {location.country}
                  </address>
                  <p className={styles.storeContact}>
                    <span>Tel: <a href={`tel:${location.phone}`}>{location.phone}</a></span><br />
                    <span>Email: <a href={`mailto:${location.email}`}>{location.email}</a></span>
                  </p>
                  <p className={styles.storeHours}>
                    <strong>Hours:</strong><br />
                    {location.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 