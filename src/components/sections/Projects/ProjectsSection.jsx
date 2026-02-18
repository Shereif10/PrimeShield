"use client";

import { useEffect, useState } from "react";
import styles from "./ProjectsSection.module.css";

const PROJECTS = [
  {
    title: "وجهة الرياض للمعارض والمؤتمرات",
    image: "/assets/project1_result.webp",
  },
  {
    title: "فندق ارفاد الربيع - ERFAD ALRABIA HOTEL",
    image: "/assets/project2_result.webp",
  },
  {
    title: "مشروع بيات هيلز - حي الصفا",
    image: "/assets/project3_result.webp",
  },
  {
    title: "منتجع نوفا الرياض، راديسون كوليكشن",
    image: "/assets/project4_result.webp",
  },
  {
    title: "مشروع فندق إنتركونتيننتال - أبها",
    image: "/assets/project5_result.webp",
  },
  {
    title: "مشروعات شركة مشيد للتطوير والاستثمار",
    image: "/assets/project6_result.webp",
  },
  {
    title: "مشروعات شركة دار بيات للتطوير والاستثمار",
    image: "/assets/project7_result.webp",
  },
  { title: "مشروع مكين", image: "/assets/project8_result.webp" },
  { title: "GH220 CALMA Project", image: "/assets/project9_result.webp" },
  {
    title: "مشروع ش خالد الماجد الملقا",
    image: "/assets/project10_result.webp",
  },
  { title: "مشروع وهله", image: "/assets/project11_result.webp" },
  { title: "مشروع فن المكاتب", image: "/assets/project12_result.webp" },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(0);

  // 🔁 Auto switching
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>مشاريعنا المميزة</h2>

        <div className={styles.projectCard}>
          <img
            key={active}
            src={PROJECTS[active].image}
            alt={PROJECTS[active].title}
            className={styles.image}
          />

          <div className={styles.overlay} />

          <div className={styles.content}>
            <h3 className={styles.projectTitle}>
              {PROJECTS[active].title}
              <span className={styles.line}></span>
            </h3>
          </div>
        </div>

        {/* Pagination Dots */}
        {/* <div className={styles.dots}>
          {PROJECTS.map((_, i) => (
            <span
              key={i}
              className={i === active ? styles.activeDot : styles.dot}
              onClick={() => setActive(i)}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
