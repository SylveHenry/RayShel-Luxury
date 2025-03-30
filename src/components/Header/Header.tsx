import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div className={styles.left}>
            <div className={styles.currencySelector}>
              <select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
          <div className={styles.center}>
            <p className={styles.announcement}>Free worldwide shipping on orders over $500</p>
          </div>
          <div className={styles.right}>
            <div className={styles.customerService}>
              <Link href="/customer-service">Customer Service</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.headerMain}>
          <div className={styles.navToggle}>
            <button>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          
          <div className={styles.logo}>
            <Link href="/">
              <h1>RAYSHEL</h1>
              <p>LUXURY</p>
            </Link>
          </div>
          
          <div className={styles.actions}>
            <div className={styles.searchToggle}>
              <button>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className={styles.account}>
              <Link href="/account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C8.8299 15 6.01077 16.5306 4.21597 18.906C3.82968 19.4172 3.63654 19.6728 3.64285 20.0183C3.64776 20.2852 3.81533 20.6219 4.02534 20.7867C4.29716 21 4.67384 21 5.4272 21H18.5728C19.3262 21 19.7028 21 19.9747 20.7867C20.1847 20.6219 20.3522 20.2852 20.3571 20.0183C20.3635 19.6728 20.1703 19.4172 19.784 18.906C17.9892 16.5306 15.1701 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            <div className={styles.wishlist}>
              <Link href="/wishlist">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19.7501C11.731 19.7501 11.462 19.6781 11.223 19.5331C10.269 18.9841 9.28702 18.3841 8.38902 17.8001L8.38298 17.7961C6.05981 16.2373 3.99987 14.8755 2.58302 13.5001C1.01802 11.9761 0.166016 10.4241 0.166016 8.67513C0.166016 6.98213 0.756016 5.41713 1.80102 4.28013C2.85902 3.12913 4.33702 2.44613 5.95502 2.44613C7.14402 2.44613 8.22402 2.84313 9.15302 3.62813C9.61902 4.03213 10.033 4.52513 10.384 5.0961C10.734 4.52513 11.147 4.03213 11.614 3.62813C12.543 2.84313 13.623 2.44613 14.812 2.44613C16.428 2.44613 17.908 3.12913 18.966 4.28013C20.011 5.41713 20.601 6.98213 20.601 8.67513C20.601 10.4241 19.75 11.9751 18.185 13.5001C16.7682 14.8751 14.7097 16.2373 12.389 17.7951C11.489 18.3811 10.505 18.9831 9.54802 19.5331C9.30902 19.6781 9.03902 19.7501 8.77002 19.7501H8.77102H8.77002Z" fill="currentColor"/>
                </svg>
                <span className={styles.countBadge}>0</span>
              </Link>
            </div>
            
            <div className={styles.cart}>
              <Link href="/cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.26121 3.09184L2.26121 3.09184C2.26683 3.09731 2.27238 3.10288 2.27739 3.10899L5.71296 7.34419C5.75705 7.39865 5.82562 7.43145 5.89459 7.43145H19.1901C19.6497 7.43145 19.9488 7.94859 19.7371 8.37833L17.1943 13.7535C17.0591 14.0331 16.7788 14.2189 16.4671 14.2189H7.08039C6.76868 14.2189 6.48838 14.0331 6.35317 13.7535L2.15433 4.49242C2.1185 4.41477 2.10147 4.32955 2.10147 4.24326C2.10147 3.59378 2.62329 3.06706 3.2549 3.06706L3.2549 3.06706C3.32585 3.06706 3.39551 3.07455 3.46333 3.08919L3.46299 3.08884C3.62657 3.12137 3.7997 3.12131 3.96324 3.08863L7.1766 2.1543L7.19062 2.1498C7.39906 2.09253 7.62033 2.10909 7.8232 2.19678L7.82333 2.19685C8.07322 2.30415 8.21271 2.56304 8.1852 2.83625L8.1852 2.83625C8.16946 2.99995 8.09018 3.15205 7.95617 3.26214L7.95613 3.26218L4.22113 6.31622L4.2046 6.32955L4.19911 6.33765C4.1787 6.36736 4.17168 6.39815 4.16878 6.42425C4.16643 6.44507 4.16793 6.46063 4.17092 6.47055C4.17392 6.48055 4.18007 6.49178 4.19429 6.50178C4.20708 6.51071 4.22072 6.51484 4.23435 6.51484H15.6901L15.6901 6.51484C15.7778 6.51484 15.8481 6.44459 15.8481 6.35695C15.8481 6.2693 15.7778 6.19905 15.6901 6.19905H6.37093L6.37084 6.19905C6.29523 6.19887 6.22064 6.17841 6.15654 6.14C6.0925 6.10162 6.04145 6.04714 6.0092 5.98315L6.00915 5.98301C5.97658 5.91837 5.96437 5.84577 5.97401 5.77457C5.98358 5.70384 6.01457 5.63701 6.06341 5.58397L6.06351 5.58386L6.13538 5.50534C6.13538 5.50534 6.13538 5.50534 6.13538 5.50534L8.54788 2.88034L8.54788 2.88034C8.59783 2.82648 8.66533 2.7868 8.73863 2.76725L8.74102 2.76653L16.045 0.447632C18.1625 -0.149068 20.3079 1.33087 20.3079 3.56493V3.56493C20.3079 3.83329 20.0914 4.04981 19.8232 4.04981H4.23435C4.14663 4.04981 4.07635 4.12008 4.07635 4.20781C4.07635 4.29554 4.14663 4.36581 4.23435 4.36581H19.8154C19.9027 4.36581 19.9731 4.43628 19.9731 4.52368V4.52368C19.9731 4.61108 19.9027 4.68155 19.8154 4.68155H2.61147C2.39132 4.68155 2.21231 4.51696 2.19099 4.2981L2.19093 4.29757C2.17101 4.09849 2.2058 3.89935 2.26121 3.09184Z" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.countBadge}>0</span>
              </Link>
            </div>
          </div>
        </div>
        
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/category/clothing">Clothing</Link>
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuContent}>
                  <div className={styles.menuColumn}>
                    <h4>Women</h4>
                    <ul>
                      <li><Link href="/category/clothing/women/dresses">Dresses</Link></li>
                      <li><Link href="/category/clothing/women/tops">Tops</Link></li>
                      <li><Link href="/category/clothing/women/bottoms">Bottoms</Link></li>
                      <li><Link href="/category/clothing/women/outerwear">Outerwear</Link></li>
                    </ul>
                  </div>
                  <div className={styles.menuColumn}>
                    <h4>Men</h4>
                    <ul>
                      <li><Link href="/category/clothing/men/shirts">Shirts</Link></li>
                      <li><Link href="/category/clothing/men/pants">Pants</Link></li>
                      <li><Link href="/category/clothing/men/suits">Suits</Link></li>
                      <li><Link href="/category/clothing/men/outerwear">Outerwear</Link></li>
                    </ul>
                  </div>
                  <div className={styles.menuImage}>
                    <Image 
                      src="/images/menu-clothing.jpg" 
                      alt="Luxury Clothing" 
                      width={300} 
                      height={400} 
                      unoptimized={true}
                      style={{ backgroundColor: '#f8f8f8' }}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="/category/accessories">Accessories</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/category/shoes">Shoes</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/category/bags">Bags</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/category/jewelry">Jewelry</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/category/new-arrivals" className={styles.featured}>New Arrivals</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/sale" className={styles.featured}>Sale</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 