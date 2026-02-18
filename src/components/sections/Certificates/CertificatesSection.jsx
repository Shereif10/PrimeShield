"use client";

import { useEffect, useState } from "react";
import styles from "./CertificatesSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const INSTALLER_CERTS = [
  "/assets/cert-1_result.webp",
  "/assets/cert-2_result.webp",
  "/assets/cert-3_result.webp",
  "/assets/cert-4_result.webp",
  "/assets/cert-5_result.webp",
  "/assets/cert-6_result.webp",
  "/assets/cert-7_result.webp",
  "/assets/cert-8_result.webp",
  "/assets/cert-9_result.webp",
  "/assets/cert-10_result.webp",
];

const OTHER_CERTS = [
  "/assets/cert-15_result.webp",
  "/assets/cert-16_result.webp",
  "/assets/cert-17_result.webp",
  "/assets/cert-13_result.webp",
  "/assets/cert-14_result.webp",
];

export default function CertificatesSection() {
  const [delayStep, setDelayStep] = useState(80);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    setDelayStep(isMobile ? 40 : 80);

    AOS.init({
      duration: isMobile ? 600 : 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 0, // 👈 يظهر أول ما bottom يلمس top
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();
  }, []);

  const getAnimation = (index) => {
    if (index % 3 === 0) return "fade-right";
    if (index % 3 === 1) return "fade-up";
    return "fade-left";
  };

  return (
    <section id="certificates" className={styles.section}>
      <div className="container">
        {/* ===== Section 1 ===== */}
        <div className={styles.block}>
          <h2 className={styles.heading}>شهادات اعتماد مقاول منفذ</h2>

          <div className={styles.grid}>
            {INSTALLER_CERTS.map((img, i) => (
              <div
                key={i}
                className={styles.card}
                data-aos={getAnimation(i)}
                data-aos-delay={i * delayStep}
              >
                <img src={img} alt="certificate" loading="eager" />
              </div>
            ))}
          </div>
        </div>

        {/* ===== Section 2 ===== */}
        <div className={styles.block}>
          <h2 className={styles.heading}>التراخيص والاعتمادات الحكومية</h2>

          <div className={styles.grid}>
            {OTHER_CERTS.map((img, i) => (
              <div
                key={i}
                className={`${styles.card} ${styles.autoHeight}`}
                data-aos={getAnimation(i)}
                data-aos-delay={i * delayStep}
              >
                <img src={img} alt="certificate" loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
