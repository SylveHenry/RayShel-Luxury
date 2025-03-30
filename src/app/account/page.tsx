import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionTitle } from '@/components/UI';
import styles from './page.module.css';

export default function AccountPage() {
  // Mock user data - in a real app, this would come from authentication and backend
  const user = {
    firstName: 'Elizabeth',
    lastName: 'Moore',
    email: 'elizabeth.moore@example.com',
    phone: '+1 (555) 123-4567',
    memberSince: 'December 2023',
    avatar: '/images/avatar-placeholder.jpg',
  };

  // Mock order data
  const orders = [
    {
      id: 'ORD-5123',
      date: 'May 15, 2024',
      status: 'Delivered',
      total: 3280,
      items: 2,
      tracking: 'UPS12345678'
    },
    {
      id: 'ORD-4987',
      date: 'April 28, 2024',
      status: 'Processing',
      total: 2450,
      items: 1
    },
    {
      id: 'ORD-4653',
      date: 'March 12, 2024',
      status: 'Delivered',
      total: 5730,
      items: 3,
      tracking: 'UPS98765432'
    }
  ];

  // Mock address data
  const addresses = [
    {
      id: 1,
      type: 'Shipping',
      isDefault: true,
      name: 'Elizabeth Moore',
      street: '123 Park Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10010',
      country: 'United States'
    },
    {
      id: 2,
      type: 'Billing',
      isDefault: true,
      name: 'Elizabeth Moore',
      street: '123 Park Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10010',
      country: 'United States'
    }
  ];

  // Mock payment methods
  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      isDefault: true,
      cardType: 'Visa',
      lastFour: '4567',
      expiry: '05/27'
    },
    {
      id: 2,
      type: 'Credit Card',
      isDefault: false,
      cardType: 'Mastercard',
      lastFour: '8901',
      expiry: '09/25'
    }
  ];

  // Mock account settings
  const settings = {
    newsletterSubscription: true,
    orderNotifications: true,
    promotionalEmails: false,
    smsNotifications: true
  };

  // Active tab state would be managed with useState in a client component
  // Here we'll just use a static default for the server component
  const activeTab = 'dashboard';

  // Find the default payment method
  const defaultPaymentMethod = paymentMethods.find(method => method.isDefault);

  return (
    <div className={styles.accountPage}>
      <div className={styles.container}>
        <SectionTitle 
          title="My Account" 
          subtitle="Manage your profile, orders, and preferences" 
        />

        <div className={styles.accountContent}>
          {/* Sidebar Navigation */}
          <aside className={styles.accountSidebar}>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>
                <Image 
                  src={user.avatar} 
                  alt={`${user.firstName} ${user.lastName}`}
                  width={80}
                  height={80}
                  unoptimized={true}
                  style={{ backgroundColor: '#f0f0f0', borderRadius: '50%' }}
                />
              </div>
              <div className={styles.userName}>{user.firstName} {user.lastName}</div>
              <div className={styles.userMember}>Member since {user.memberSince}</div>
            </div>

            <nav className={styles.accountNav}>
              <Link href="/account" className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}>
                Dashboard
              </Link>
              <Link href="/account?tab=profile" className={`${styles.navItem} ${activeTab === 'profile' ? styles.active : ''}`}>
                Profile Information
              </Link>
              <Link href="/account?tab=orders" className={`${styles.navItem} ${activeTab === 'orders' ? styles.active : ''}`}>
                Order History
              </Link>
              <Link href="/account?tab=addresses" className={`${styles.navItem} ${activeTab === 'addresses' ? styles.active : ''}`}>
                Saved Addresses
              </Link>
              <Link href="/account?tab=payment" className={`${styles.navItem} ${activeTab === 'payment' ? styles.active : ''}`}>
                Payment Methods
              </Link>
              <Link href="/account?tab=settings" className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}>
                Account Settings
              </Link>
              <Link href="/wishlist" className={styles.navItem}>
                My Wishlist
              </Link>
              <button className={styles.signOutButton}>Sign Out</button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className={styles.accountMain}>
            {/* Dashboard Tab */}
            <div className={styles.accountSection}>
              <h2 className={styles.sectionTitle}>Dashboard</h2>
              
              <div className={styles.dashboardGrid}>
                <div className={styles.dashboardCard}>
                  <h3>Recent Orders</h3>
                  {orders.slice(0, 2).map(order => (
                    <div key={order.id} className={styles.recentOrder}>
                      <div className={styles.orderHeader}>
                        <div className={styles.orderId}>{order.id}</div>
                        <div className={`${styles.orderStatus} ${styles[order.status.toLowerCase()]}`}>
                          {order.status}
                        </div>
                      </div>
                      <div className={styles.orderInfo}>
                        <div>{order.date}</div>
                        <div>${order.total.toLocaleString()}</div>
                      </div>
                      <Link href={`/account/orders/${order.id}`} className={styles.viewOrderLink}>
                        View Order Details
                      </Link>
                    </div>
                  ))}
                  <Link href="/account?tab=orders" className={styles.viewAllLink}>
                    View All Orders
                  </Link>
                </div>
                
                <div className={styles.dashboardCard}>
                  <h3>Account Information</h3>
                  <div className={styles.accountInfoItem}>
                    <span className={styles.infoLabel}>Name:</span>
                    <span>{user.firstName} {user.lastName}</span>
                  </div>
                  <div className={styles.accountInfoItem}>
                    <span className={styles.infoLabel}>Email:</span>
                    <span>{user.email}</span>
                  </div>
                  <div className={styles.accountInfoItem}>
                    <span className={styles.infoLabel}>Phone:</span>
                    <span>{user.phone}</span>
                  </div>
                  <div className={styles.accountInfoItem}>
                    <span className={styles.infoLabel}>Default Shipping:</span>
                    <span>
                      {addresses.find(a => a.type === 'Shipping' && a.isDefault)?.street}, {addresses.find(a => a.type === 'Shipping' && a.isDefault)?.city}
                    </span>
                  </div>
                  <div className={styles.accountInfoItem}>
                    <span className={styles.infoLabel}>Payment Method:</span>
                    <span>
                      {defaultPaymentMethod ? `${defaultPaymentMethod.cardType} ending in ${defaultPaymentMethod.lastFour}` : 'None added'}
                    </span>
                  </div>
                  <Link href="/account?tab=profile" className={styles.viewAllLink}>
                    Edit Profile
                  </Link>
                </div>
                
                <div className={styles.dashboardCard}>
                  <h3>My Wishlist</h3>
                  <p className={styles.dashboardSummary}>
                    You have 3 items in your wishlist.
                  </p>
                  <Link href="/wishlist" className={styles.viewAllLink}>
                    View My Wishlist
                  </Link>
                </div>
                
                <div className={styles.dashboardCard}>
                  <h3>Notifications</h3>
                  <label className={styles.switchLabel}>
                    <input 
                      type="checkbox" 
                      checked={settings.orderNotifications} 
                      className={styles.switchInput}
                      readOnly
                    />
                    <span className={styles.switch}></span>
                    Order Updates
                  </label>
                  <label className={styles.switchLabel}>
                    <input 
                      type="checkbox" 
                      checked={settings.newsletterSubscription} 
                      className={styles.switchInput}
                      readOnly
                    />
                    <span className={styles.switch}></span>
                    Newsletter
                  </label>
                  <Link href="/account?tab=settings" className={styles.viewAllLink}>
                    Manage Preferences
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 