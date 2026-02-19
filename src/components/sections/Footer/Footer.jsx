"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* ===== Right Column (Company) ===== */}
          <div className={styles.company}>
            <div className={styles.logoRow}>
              <img src="/assets/footerLogo_result.webp" alt="Prime Shield" />
              <h3 className={styles.companyName}>برايم شيلد</h3>
            </div>

            <p className={styles.description}>
              شركة سعودية رائدة في حلول العزل الهندسي وحماية المنشآت
            </p>
          </div>

          {/* ===== Middle Column (Contact) ===== */}
          <div className={styles.contact}>
            <h4 className={styles.heading}>تواصل معنا</h4>

            <div className={styles.contactItem}>
              <i className="fa-solid fa-phone"></i>
              <span className={styles.phoneNumbers}>
                +966 59 240 0524
                <span className={styles.separator}>|</span>
                +966 56 299 3009
              </span>
            </div>

            <div className={styles.contactItem}>
              <i className="fa-solid fa-globe"></i>
              <span>Primeshield.com.sa</span>
            </div>

            <div className={styles.contactItem}>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                الرياض 13321- منطقة الصحافة - شارع الملك سلمان بن محمد بن سعود
              </span>
            </div>

            <div className={styles.contactItem}>
              <i className="fa-solid fa-envelope"></i>
              <span>info@primeshield.com.sa</span>
            </div>
          </div>

          {/* ===== Left Column (Links) ===== */}
          <div className={styles.links}>
            <h4 className={styles.heading}>روابط سريعة</h4>

            <div className={styles.linksRow}>
              <Link
                href="/"
                className={`${styles.link} ${
                  pathname === "/" ? styles.activeLink : ""
                }`}
              >
                الرئيسية
              </Link>

              <Link
                href="/about"
                className={`${styles.link} ${
                  pathname === "/about" ? styles.activeLink : ""
                }`}
              >
                من نحن
              </Link>
            </div>

            <div className={styles.linksRow}>
              <Link
                href="/services"
                className={`${styles.link} ${
                  pathname === "/services" ? styles.activeLink : ""
                }`}
              >
                خدماتنا
              </Link>

              <Link
                href="/projects"
                className={`${styles.link} ${
                  pathname === "/projects" ? styles.activeLink : ""
                }`}
              >
                المشاريع
              </Link>
            </div>

            <div className={styles.linksRow}>
              <Link
                href="/certificates"
                className={`${styles.link} ${
                  pathname === "/certificates" ? styles.activeLink : ""
                }`}
              >
                الشهادات
              </Link>
            </div>
          </div>
        </div>

        {/* ===== Map Section ===== */}
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28975.76169929128!2d46.63776014999999!3d24.7964735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8444da3822630a31%3A0x76d088b4fa5bc033!2zUHJpbWUgU2hpZWxkIENvbXBhbnkg2LTYsdmD2Kkg2KjYsdin2YrZhSDYtNmK2YTYrw!5e0!3m2!1sen!2seg!4v1771108863158!5m2!1sen!2seg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <div className={styles.bottomRight}>
            <p>برايم شيلد 2026. جميع الحقوق محفوظة</p>
            <span className={styles.crNumber}>السجل التجاري 7052877623</span>
          </div>

          <div className={styles.bottomLeft}>
            <a href="#">سياسة الخصوصية</a>
            <a href="#">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
