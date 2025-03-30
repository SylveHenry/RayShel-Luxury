'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function ReturnsExchangesPage() {
  return (
    <div className={styles.returnsPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Returns & Exchanges</h1>
          <p>Our commitment to your complete satisfaction</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Introduction */}
        <div className={styles.introduction}>
          <p>
            At Rayshel, we are dedicated to providing exceptional quality and service. 
            We want you to be completely satisfied with your purchase. If for any reason 
            you are not entirely pleased with your order, we offer a straightforward returns 
            and exchanges process.
          </p>
        </div>

        {/* Returns Policy */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Returns Policy</h2>
          <div className={styles.policyDetails}>
            <div className={styles.policyCard}>
              <h3>Timeframe</h3>
              <p>
                We accept returns within 30 days of delivery for unused items in their original 
                condition with all tags attached and packaging intact.
              </p>
            </div>
            <div className={styles.policyCard}>
              <h3>Condition</h3>
              <p>
                Items must be unworn, unwashed, and unaltered. All original tags and packaging 
                must be included. Items showing signs of wear or without original packaging may not 
                be accepted for return.
              </p>
            </div>
            <div className={styles.policyCard}>
              <h3>Exclusions</h3>
              <p>
                For hygiene reasons, undergarments, jewelry for piercings, and certain accessories 
                cannot be returned or exchanged. Custom and made-to-order pieces are also non-returnable.
              </p>
            </div>
          </div>
          <div className={styles.importantNote}>
            <h3>Sale Items</h3>
            <p>
              Items purchased on sale are eligible for return within 14 days of delivery and 
              will be refunded in the form of a Rayshel store credit.
            </p>
          </div>
        </div>

        {/* Return Process */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Return Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Initiate Your Return</h3>
                <p>
                  Log in to your account and navigate to your order history. Select the order containing 
                  the item(s) you wish to return and follow the prompts to initiate the return process.
                </p>
                <p>
                  Alternatively, you can contact our Client Care team for assistance with initiating your return.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Packaging Your Return</h3>
                <p>
                  Place the item(s) in their original packaging, ensuring all product tags remain attached. 
                  Include the return form that was provided with your order or that was generated when you 
                  initiated your return online.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Shipping Your Return</h3>
                <p>
                  Use the pre-paid return label provided (for standard returns within the US and EU) or 
                  send your return via a secure shipping method to the address specified in your return 
                  confirmation. We recommend using a trackable shipping service.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Return Processing</h3>
                <p>
                  Once we receive your return, our team will inspect the item(s) to ensure they meet our 
                  return criteria. This process typically takes 3-5 business days from the date we receive 
                  your package.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h3>Refund Issuance</h3>
                <p>
                  Upon approval, your refund will be processed to the original form of payment. Please 
                  allow 5-10 business days for the refund to appear on your account, depending on your 
                  financial institution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exchanges */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Exchanges</h2>
          <p className={styles.sectionDescription}>
            If you wish to exchange an item for a different size or color, we recommend initiating a 
            return and placing a new order for the desired item. This ensures the fastest processing 
            time and availability of your preferred item.
          </p>
          <div className={styles.policyDetails}>
            <div className={styles.policyCard}>
              <h3>Size Exchanges</h3>
              <p>
                For size exchanges, you may request a direct exchange during the return process if the 
                desired size is in stock. Please note that direct exchanges may take longer to process 
                than standard returns.
              </p>
            </div>
            <div className={styles.policyCard}>
              <h3>Color/Style Exchanges</h3>
              <p>
                For exchanges to a different color or style, please initiate a standard return and 
                place a new order for the desired item to ensure availability.
              </p>
            </div>
            <div className={styles.policyCard}>
              <h3>Processing Time</h3>
              <p>
                Exchange requests typically take 5-7 business days to process once we receive your 
                return, plus shipping time for the new item.
              </p>
            </div>
          </div>
        </div>

        {/* Return Shipping */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Return Shipping</h2>
          <div className={styles.shippingInfo}>
            <div className={styles.infoItem}>
              <h3>Domestic Returns (US & EU)</h3>
              <p>
                For orders within the United States and European Union, we provide a complimentary 
                pre-paid return label with your order. Using this label ensures a smooth and 
                trackable return process.
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>International Returns</h3>
              <p>
                For international orders, return shipping costs are the responsibility of the customer. 
                We recommend using a trackable shipping service to ensure your return reaches our 
                distribution center.
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>Shipping Address</h3>
              <p>
                All returns should be sent to our Returns Department at the address provided in your 
                return confirmation. Please ensure that the return form is included inside the package.
              </p>
            </div>
          </div>
        </div>

        {/* Returns FAQs */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>How long will it take to receive my refund?</h3>
              <p>
                Once your return is processed and approved, refunds typically appear on your account 
                within 5-10 business days, depending on your financial institution.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I return a gift?</h3>
              <p>
                Yes, gifts can be returned within 30 days of delivery. For gift returns, we issue a 
                Rayshel store credit to the gift recipient. The original purchaser will not be notified.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>What if my item arrives damaged or defective?</h3>
              <p>
                In the rare event that you receive a damaged or defective item, please contact our 
                Client Care team within 48 hours of delivery. We will arrange for a return and replacement 
                at no cost to you.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I return part of my order?</h3>
              <p>
                Yes, you can return any eligible items from your order, even if you wish to keep other items.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you offer free alterations?</h3>
              <p>
                We offer complimentary alterations on select full-priced garments within 30 days of purchase. 
                Please contact our Client Care team for more information and to arrange alterations at one of 
                our boutiques.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h2>Need Assistance?</h2>
          <p>
            Our dedicated Client Care team is available to assist you with any questions about returns 
            or exchanges. We are committed to making your Rayshel experience exceptional.
          </p>
          <div className={styles.contactButtons}>
            <Link href="/contact" className={styles.primaryButton}>
              Contact Us
            </Link>
            <Link href="/faq" className={styles.secondaryButton}>
              View FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 