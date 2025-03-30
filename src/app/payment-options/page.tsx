'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function PaymentOptionsPage() {
  return (
    <div className={styles.paymentPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Payment Options</h1>
          <p>Secure and flexible ways to complete your purchase</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Introduction */}
        <div className={styles.introduction}>
          <p>
            At Rayshel, we offer various secure payment methods to ensure a seamless shopping 
            experience. All transactions are encrypted and processed through secure payment gateways 
            to protect your financial information.
          </p>
        </div>

        {/* Payment Methods */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Accepted Payment Methods</h2>
          <div className={styles.paymentMethods}>
            <div className={styles.paymentCard}>
              <div className={styles.paymentIcon}>
                <Image 
                  src="/images/card-payment.svg" 
                  alt="Credit Card"
                  width={60} 
                  height={60}
                  style={{ backgroundColor: '#f9f9f9' }}
                />
              </div>
              <div className={styles.paymentInfo}>
                <h3>Credit & Debit Cards</h3>
                <p>We accept all major credit and debit cards including Visa, Mastercard, American Express, and Discover.</p>
                <div className={styles.cardLogos}>
                  <div className={styles.cardLogo}>
                    <svg width="40" height="24" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="20" rx="2" fill="#1A1A1A"/>
                      <path d="M12.2352 14.3999H9.76562L11.3676 5.5999H13.8372L12.2352 14.3999Z" fill="#AFAFAF"/>
                      <path d="M20.432 5.8079C19.9308 5.6079 19.1692 5.3999 18.2268 5.3999C16.0644 5.3999 14.5644 6.5119 14.5548 8.0799C14.5452 9.2559 15.6452 9.9119 16.456 10.3199C17.2764 10.7359 17.5692 11.0079 17.5692 11.3839C17.5596 11.9679 16.8676 12.2399 16.2236 12.2399C15.3292 12.2399 14.8468 12.0879 14.0744 11.7519L13.768 11.6079L13.4424 13.8239C14.0264 14.0879 15.0004 14.3199 16.0164 14.3279C18.3196 14.3279 19.786 13.2319 19.8052 11.5439C19.8148 10.6159 19.2196 9.9039 18.018 9.3039C17.2844 8.9039 16.8196 8.6399 16.8292 8.2399C16.8292 7.8879 17.2364 7.5199 18.0916 7.5199C18.8064 7.5039 19.3248 7.6879 19.7224 7.8799L19.938 7.9839L20.432 5.8079Z" fill="#AFAFAF"/>
                      <path d="M23.3612 5.5999H21.4636C20.9244 5.5999 20.516 5.7519 20.2772 6.3199L17.3548 14.3999H19.6676L20.074 13.2079L22.5724 13.2159C22.6492 13.5919 22.8972 14.3999 22.8972 14.3999H24.9452L23.3612 5.5999ZM20.6292 11.3199C20.8004 10.8799 21.6292 8.5599 21.6292 8.5599C21.6196 8.5759 21.8196 7.9999 21.9332 7.6639L22.0756 8.4799C22.0756 8.4799 22.5836 10.9359 22.6684 11.3199H20.6292Z" fill="#AFAFAF"/>
                      <path d="M8.21 5.5999L6.0436 11.5839L5.7916 10.2799C5.36838 8.8639 4.05294 7.3279 2.58594 6.5759L4.56038 14.3919H6.90358L10.5388 5.5999H8.21Z" fill="#AFAFAF"/>
                      <path d="M3.77681 5.5999H0.0512112L0 5.7999C2.92321 6.4079 4.86201 8.1919 5.6344 10.2799L4.81281 6.3279C4.66241 5.7759 4.2744 5.6159 3.77681 5.5999Z" fill="#AFAFAF"/>
                    </svg>
                  </div>
                  <div className={styles.cardLogo}>
                    <svg width="40" height="24" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="20" rx="2" fill="#1A1A1A"/>
                      <path d="M20.3545 4.81836H11.6367V15.1821H20.3545V4.81836Z" fill="#7673C0"/>
                      <path d="M12.0725 9.99987C12.0725 7.94654 13.0267 6.12321 14.5 4.81796C13.4358 3.96129 12.0783 3.45654 10.5883 3.45654C6.96167 3.45654 4.01917 6.39904 4.01917 9.99987C4.01917 13.6007 6.96167 16.5432 10.5883 16.5432C12.0783 16.5432 13.4358 16.0382 14.5 15.1815C13.0267 13.8765 12.0725 12.0532 12.0725 9.99987Z" fill="#EB001B"/>
                      <path d="M27.981 9.99987C27.981 13.6007 25.0385 16.5432 21.4118 16.5432C19.922 16.5432 18.5643 16.0382 17.5 15.1815C18.9735 13.8765 19.9275 12.0532 19.9275 9.99987C19.9275 7.94654 18.9735 6.12321 17.5 4.81796C18.5643 3.96129 19.922 3.45654 21.4118 3.45654C25.0385 3.45654 27.981 6.39904 27.981 9.99987Z" fill="#00A1DF"/>
                    </svg>
                  </div>
                  <div className={styles.cardLogo}>
                    <svg width="40" height="24" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="20" rx="2" fill="#1A1A1A"/>
                      <path d="M25.4453 9.99994C25.4453 13.3666 22.7028 16.0916 19.3453 16.0916C16.0062 16.0916 13.2453 13.3666 13.2453 9.99994C13.2453 6.63327 15.9878 3.90918 19.3453 3.90918C22.7028 3.90918 25.4453 6.63327 25.4453 9.99994Z" fill="#FFB600"/>
                      <path d="M19.3453 3.90918C22.7028 3.90918 25.4453 6.63327 25.4453 9.99994C25.4453 13.3666 22.7028 16.0916 19.3453 16.0916" fill="#F7981D"/>
                      <path d="M19.3453 3.90918C22.7028 3.90918 25.4453 6.63327 25.4453 9.99994C25.4453 13.3666 22.7028 16.0916 19.3453 16.0916" fill="#FF8500"/>
                      <path d="M18.7547 3.90918C22.1122 3.90918 24.8547 6.63327 24.8547 9.99994C24.8547 13.3666 22.1122 16.0916 18.7547 16.0916C15.3973 16.0916 12.6547 13.3666 12.6547 9.99994C12.6547 6.63327 15.3973 3.90918 18.7547 3.90918Z" fill="#FF5050"/>
                      <path d="M18.7547 3.90918C22.1122 3.90918 24.8547 6.63327 24.8547 9.99994C24.8547 13.3666 22.1122 16.0916 18.7547 16.0916" fill="#E52836"/>
                      <path d="M18.7547 3.90918C22.1122 3.90918 24.8547 6.63327 24.8547 9.99994C24.8547 13.3666 22.1122 16.0916 18.7547 16.0916" fill="#CB2026"/>
                      <path d="M11.0453 3.90918C14.4027 3.90918 17.1453 6.63327 17.1453 9.99994C17.1453 13.3666 14.4027 16.0916 11.0453 16.0916C7.68779 16.0916 4.94531 13.3666 4.94531 9.99994C4.94531 6.63327 7.68779 3.90918 11.0453 3.90918Z" fill="#0099DF"/>
                      <path d="M11.0453 3.90918C14.4027 3.90918 17.1453 6.63327 17.1453 9.99994C17.1453 13.3666 14.4027 16.0916 11.0453 16.0916" fill="#0066B2"/>
                      <path d="M11.0453 3.90918C14.4027 3.90918 17.1453 6.63327 17.1453 9.99994C17.1453 13.3666 14.4027 16.0916 11.0453 16.0916" fill="#002F87"/>
                    </svg>
                  </div>
                  <div className={styles.cardLogo}>
                    <svg width="40" height="24" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="20" rx="2" fill="#1A1A1A"/>
                      <path d="M22.2377 5.09961H19.4756C18.9947 5.09961 18.5947 5.19277 18.2947 5.57277L14.9703 10.8134V5.57277C14.9703 5.29277 14.7628 5.09961 14.4628 5.09961H11.7947C11.4947 5.09961 11.2873 5.29277 11.2873 5.57277V14.4259C11.2873 14.7059 11.4947 14.8991 11.7947 14.8991H14.4628C14.7628 14.8991 14.9703 14.7059 14.9703 14.4259V10.8134L18.2947 14.4259C18.4756 14.7059 18.7756 14.8991 19.1688 14.8991H22.0377C22.4309 14.8991 22.6377 14.6191 22.4309 14.2391L18.3877 9.17276L22.2377 5.47961C22.4377 5.29277 22.4377 5.09961 22.2377 5.09961Z" fill="#AFAFAF"/>
                      <path d="M10.1137 5.09961H7.29906C6.99906 5.09961 6.79157 5.29277 6.79157 5.57277V14.4259C6.79157 14.7059 6.99906 14.8991 7.29906 14.8991H10.1137C10.4137 14.8991 10.6212 14.7059 10.6212 14.4259V5.57277C10.6212 5.29277 10.4137 5.09961 10.1137 5.09961Z" fill="#AFAFAF"/>
                      <path d="M24.7756 9.55276C24.7756 11.3591 23.4825 12.193 22.1893 12.193C20.8961 12.193 19.6031 11.3591 19.6031 9.55276C19.6031 7.93928 20.8961 6.91248 22.1893 6.91248C23.4825 6.91248 24.7756 7.93928 24.7756 9.55276Z" stroke="#AFAFAF" strokeWidth="1.2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.paymentCard}>
              <div className={styles.paymentIcon}>
                <Image 
                  src="/images/paypal.svg" 
                  alt="PayPal"
                  width={60} 
                  height={60}
                  style={{ backgroundColor: '#f9f9f9' }}
                />
              </div>
              <div className={styles.paymentInfo}>
                <h3>PayPal</h3>
                <p>
                  Pay securely using your PayPal account. You will be redirected to PayPal to complete 
                  your payment and then returned to our site for order confirmation.
                </p>
              </div>
            </div>
            
            <div className={styles.paymentCard}>
              <div className={styles.paymentIcon}>
                <Image 
                  src="/images/apple-pay.svg" 
                  alt="Apple Pay"
                  width={60} 
                  height={60}
                  style={{ backgroundColor: '#f9f9f9' }}
                />
              </div>
              <div className={styles.paymentInfo}>
                <h3>Apple Pay</h3>
                <p>
                  Available for iOS users. Use Apple Pay for fast and secure checkout without having 
                  to enter your card details each time.
                </p>
              </div>
            </div>
            
            <div className={styles.paymentCard}>
              <div className={styles.paymentIcon}>
                <Image 
                  src="/images/bank-transfer.svg" 
                  alt="Bank Transfer"
                  width={60} 
                  height={60}
                  style={{ backgroundColor: '#f9f9f9' }}
                />
              </div>
              <div className={styles.paymentInfo}>
                <h3>Bank Transfer</h3>
                <p>
                  For orders over $5,000, we offer the option to pay via bank transfer. Please note that 
                  your order will be processed once payment is received and cleared.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Security */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Payment Security</h2>
          <div className={styles.securityInfo}>
            <div className={styles.securityIcon}>
              <Image 
                src="/images/security-icon.svg" 
                alt="Security"
                width={80} 
                height={80}
                style={{ backgroundColor: '#f9f9f9' }}
              />
            </div>
            <div className={styles.securityText}>
              <p>
                Your security is our priority. All payment transactions on our website are encrypted 
                using SSL (Secure Socket Layer) technology. This ensures that your personal and 
                financial information is securely transmitted and cannot be accessed by unauthorized parties.
              </p>
              <p>
                We adhere to strict PCI DSS (Payment Card Industry Data Security Standard) compliance 
                to ensure that your credit card information is handled according to the highest security 
                standards. We never store your complete credit card details on our servers.
              </p>
              <div className={styles.securityBadges}>
                <div className={styles.securityBadge}>
                  <Image 
                    src="/images/ssl-badge.svg" 
                    alt="SSL Secured"
                    width={70} 
                    height={70}
                    style={{ backgroundColor: '#f9f9f9' }}
                  />
                </div>
                <div className={styles.securityBadge}>
                  <Image 
                    src="/images/pci-badge.svg" 
                    alt="PCI Compliant"
                    width={70} 
                    height={70}
                    style={{ backgroundColor: '#f9f9f9' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Currency Options */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Currency Options</h2>
          <p className={styles.sectionDescription}>
            For your convenience, we offer multiple currency options for payment. You can choose to pay 
            in USD, EUR, GBP, JPY, or CNY. The currency can be selected during checkout.
          </p>
          <div className={styles.currencyNotes}>
            <h3>Important Notes:</h3>
            <ul>
              <li>
                The displayed price will be converted to your selected currency based on the current 
                exchange rate at the time of checkout.
              </li>
              <li>
                Your credit card provider or bank may apply additional foreign exchange fees if you 
                choose to pay in a currency different from your card&apos;s default currency.
              </li>
              <li>
                For bank transfers, we accept payments in USD, EUR, and GBP only.
              </li>
            </ul>
          </div>
        </div>

        {/* Billing */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Billing Information</h2>
          <div className={styles.billingColumns}>
            <div className={styles.billingColumn}>
              <h3>Verification</h3>
              <p>
                To ensure your security, we may require address verification and CVC validation for credit 
                card payments. For high-value orders, additional verification steps may be necessary.
              </p>
              <h3>Pre-Authorization</h3>
              <p>
                When you place an order, we may place a temporary authorization hold on your card to verify 
                fund availability. This is not an actual charge and will be released according to your 
                bank&apos;s policies.
              </p>
            </div>
            <div className={styles.billingColumn}>
              <h3>Invoices</h3>
              <p>
                An electronic invoice will be sent to your email address after your purchase is complete. 
                You can also access all your invoices through your account dashboard.
              </p>
              <h3>Tax Information</h3>
              <p>
                Applicable taxes will be calculated based on your shipping destination and displayed at 
                checkout before you complete your purchase. For international orders, import duties and 
                taxes may apply and are the responsibility of the recipient.
              </p>
            </div>
          </div>
        </div>

        {/* Payment FAQs */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>When will my card be charged?</h3>
              <p>
                Your card will be charged immediately after your order is confirmed and accepted by our system.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>What should I do if my payment is declined?</h3>
              <p>
                If your payment is declined, please verify that all your card information is entered correctly. 
                If problems persist, contact your card issuer to ensure there are no restrictions on your card, 
                or try an alternative payment method.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is installment payment available?</h3>
              <p>
                Currently, we offer installment payments through select credit cards that provide this service. 
                Please check with your card issuer for eligibility. We are working to add additional installment 
                payment options in the near future.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you accept gift cards?</h3>
              <p>
                Yes, Rayshel gift cards can be used as a payment method during checkout. Simply enter the gift 
                card number and PIN in the designated fields.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How are refunds processed?</h3>
              <p>
                Refunds are always processed to the original payment method used for the purchase. Please allow 
                5-10 business days for the refund to appear on your account after it has been processed.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h2>Need Assistance?</h2>
          <p>
            If you have any questions about payment options or encounter any issues during checkout, 
            our Client Care team is available to assist you.
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