'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export default function CareersPage() {
  // Sample job listings - in a real application, these would come from an API
  const jobListings: JobListing[] = [
    {
      id: 1,
      title: "Senior Fashion Designer",
      department: "Design",
      location: "Paris, France",
      type: "Full-time",
      description: "Join our design team to create innovative and luxurious collections that embody the Rayshel aesthetic. You will collaborate with craftspeople and material specialists to bring your creative vision to life.",
      requirements: [
        "5+ years experience in luxury fashion design",
        "Proven portfolio of high-end collections",
        "Proficiency in design software and hand sketching",
        "Understanding of sustainable and ethical design practices",
        "Ability to work collaboratively in a creative environment"
      ]
    },
    {
      id: 2,
      title: "E-Commerce Manager",
      department: "Digital",
      location: "London, UK",
      type: "Full-time",
      description: "Lead our online retail strategy to deliver an exceptional digital shopping experience that reflects our brand values. You will oversee our e-commerce platform, analyze performance metrics, and implement strategies to enhance the customer journey.",
      requirements: [
        "3+ years experience in e-commerce management for luxury brands",
        "Strong understanding of digital marketing and analytics",
        "Experience with major e-commerce platforms",
        "Excellent project management and communication skills",
        "Data-driven approach to problem-solving"
      ]
    },
    {
      id: 3,
      title: "Leather Goods Artisan",
      department: "Craftsmanship",
      location: "Milan, Italy",
      type: "Full-time",
      description: "Create exquisite leather accessories using traditional techniques combined with innovative approaches. You will work with the finest materials to craft pieces that reflect our commitment to quality and artisanal excellence.",
      requirements: [
        "3+ years experience in luxury leather craftsmanship",
        "Mastery of traditional leather working techniques",
        "Attention to detail and commitment to quality",
        "Ability to work with exotic and delicate materials",
        "Understanding of sustainable practices in leather production"
      ]
    },
    {
      id: 4,
      title: "Visual Merchandising Specialist",
      department: "Retail",
      location: "New York, USA",
      type: "Full-time",
      description: "Design and implement visual merchandising strategies that showcase our collections in our flagship stores. You will create immersive experiences that tell the Rayshel story and highlight our commitment to craftsmanship.",
      requirements: [
        "4+ years experience in visual merchandising for luxury brands",
        "Strong portfolio demonstrating aesthetic sensibility",
        "Experience with window displays and in-store installations",
        "Understanding of retail analytics and customer behavior",
        "Excellent communication and project management skills"
      ]
    },
    {
      id: 5,
      title: "Sustainability Coordinator",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Drive our sustainability initiatives across all aspects of our business. You will develop and implement strategies to reduce our environmental footprint, ensure ethical practices, and communicate our sustainability story to stakeholders.",
      requirements: [
        "3+ years experience in sustainability management, preferably in fashion",
        "Knowledge of sustainable materials and ethical production",
        "Familiarity with sustainability certifications and reporting",
        "Strong analytical and problem-solving skills",
        "Excellent communication and stakeholder management abilities"
      ]
    },
    {
      id: 6,
      title: "Client Relations Specialist",
      department: "Customer Service",
      location: "Tokyo, Japan",
      type: "Full-time",
      description: "Provide exceptional service to our VIP clients, building lasting relationships that enhance their connection to the Rayshel brand. You will coordinate personalized shopping experiences and ensure that client needs are met with the highest level of attention.",
      requirements: [
        "3+ years experience in client relations for luxury brands",
        "Fluency in Japanese and English, additional languages a plus",
        "Understanding of luxury retail and customer psychology",
        "Excellent interpersonal and problem-solving skills",
        "Ability to maintain discretion and handle sensitive information"
      ]
    }
  ];

  // State for filtering
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  // Get unique departments and locations for filters
  const departments = ['All', ...new Set(jobListings.map(job => job.department))];
  const locations = ['All', ...new Set(jobListings.map(job => job.location))];

  // Filter jobs based on selected filters
  const filteredJobs = jobListings.filter(job => 
    (departmentFilter === 'All' || job.department === departmentFilter) &&
    (locationFilter === 'All' || job.location === locationFilter)
  );

  const contactContent = (
    <div className={styles.contactContent}>
      <h2>Don&apos;t See the Right Position?</h2>
      <p>
        We&apos;re always interested in connecting with talented individuals who are passionate 
        about luxury fashion. Send us your resume, and we&apos;ll keep you in mind for future opportunities.
      </p>
      <Link href="/contact" className={styles.contactButton}>
        Contact Us
      </Link>
    </div>
  );

  return (
    <div className={styles.careersPage}>
      {/* Hero Section */}
      <div className={styles.careersHero}>
        <div className={styles.heroContent}>
          <h1>JOIN OUR TEAM</h1>
          <p>Be part of a brand that&apos;s redefining luxury through craftsmanship and innovation</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Introduction */}
        <div className={styles.careersIntro}>
          <h2>A Career Built on Excellence</h2>
          <p>
            At Rayshel, we are committed to creating an environment where talent flourishes and 
            innovation thrives. We seek individuals who share our passion for craftsmanship, 
            sustainability, and exceptional quality. Join us to be part of a legacy in the making.
          </p>
        </div>

        {/* Values Section */}
        <div className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h3>Excellence</h3>
              <p>We strive for perfection in everything we do, from our products to our workplace culture.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Creativity</h3>
              <p>We encourage innovative thinking and fresh perspectives to continuously evolve our brand.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Craftsmanship</h3>
              <p>We honor traditional techniques while embracing modern innovations in our pursuit of quality.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Responsibility</h3>
              <p>We commit to ethical practices and sustainable solutions throughout our operations.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Inclusivity</h3>
              <p>We celebrate diversity and create an environment where all voices are heard and valued.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Legacy</h3>
              <p>We build for the future, creating lasting impact through our work and relationships.</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <div className={styles.benefitsImage}>
            <Image 
              src="/images/careers-benefits.jpg" 
              alt="Rayshel work environment"
              width={600}
              height={400}
              priority
            />
          </div>
          <div className={styles.benefitsContent}>
            <h2>Why Work With Us</h2>
            <ul className={styles.benefitsList}>
              <li>
                <h3>Professional Development</h3>
                <p>Continuous learning opportunities, mentorship programs, and career advancement.</p>
              </li>
              <li>
                <h3>Creative Environment</h3>
                <p>A workspace that inspires innovation and collaboration.</p>
              </li>
              <li>
                <h3>Comprehensive Benefits</h3>
                <p>Competitive compensation, health coverage, and wellness programs.</p>
              </li>
              <li>
                <h3>Global Exposure</h3>
                <p>Opportunities to work across markets and gain international experience.</p>
              </li>
              <li>
                <h3>Work-Life Balance</h3>
                <p>Flexible arrangements that respect your personal and professional needs.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Current Openings */}
        <div className={styles.openingsSection}>
          <h2 className={styles.sectionTitle}>Current Openings</h2>
          
          {/* Filters */}
          <div className={styles.openingsFilter}>
            <div className={styles.filterItem}>
              <label htmlFor="department">Department</label>
              <select 
                id="department" 
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div className={styles.filterItem}>
              <label htmlFor="location">Location</label>
              <select 
                id="location" 
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className={styles.jobList}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className={styles.jobItem}>
                  <div className={styles.jobHeader}>
                    <div className={styles.jobInfo}>
                      <h3>{job.title}</h3>
                      <div className={styles.jobMeta}>
                        <span className={styles.jobDepartment}>{job.department}</span>
                        <span className={styles.jobLocation}>{job.location}</span>
                        <span className={styles.jobType}>{job.type}</span>
                      </div>
                    </div>
                    <button className={styles.applyButton}>Apply Now</button>
                  </div>
                  <div className={styles.jobDescription}>
                    <p>{job.description}</p>
                    <div className={styles.jobRequirements}>
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No positions matching your criteria currently. Please check back later or adjust your filters.</p>
            )}
          </div>
        </div>

        {/* Application Process */}
        <div className={styles.applicationProcess}>
          <h2 className={styles.sectionTitle}>Application Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Application Review</h3>
              <p>We carefully review each application to identify potential matches for our team.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Initial Interview</h3>
              <p>A conversation to understand your experience, skills, and aspirations.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Skills Assessment</h3>
              <p>Depending on the role, you may be asked to complete a skills assessment or portfolio review.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Team Interview</h3>
              <p>Meet with potential team members to discuss collaboration and cultural fit.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Final Decision</h3>
              <p>We aim to make timely decisions and provide feedback to all candidates.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.careersContact}>
          {contactContent}
        </div>
      </div>
    </div>
  );
} 