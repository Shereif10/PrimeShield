"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServiceSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const SERVICES = [
  {
    title: "العزل المائي والحراري",
    desc: "عزل الأسطح، الأقبية، الجدران، الحمامات، المطابخ، والخزانات لحماية المباني من التسربات والحرارة والرطوبة.",
    image: "/assets/service-1_result.webp",
  },
  {
    title: "إيبوكسي الأرضيات والخزانات",
    desc: "تنفيذ أنظمة إيبوكسي عالية الجودة للأرضيات والخزانات توفر مقاومة قوية للرطوبة والمواد الكيميائية والاحتكاك",
    image: "/assets/service-2_result.webp",
  },
  {
    title: "المعالجة الكريستالية والحقن",
    desc: "معالجة الشروخ وتسربات المياه باستخدام أنظمة كريستالية ومواد حقن متخصصة تعمل على سد المسام والتشققات داخل الخرسانة",
    image: "/assets/service-3_result.webp",
  },
  {
    title: "أنظمة البولي يوريثان",
    desc: "تطبيق أنظمة عزل بالبولي يوريثان عالية الكفاءة توفر حماية فائقة ضد تسرب المياه ودرجات الحرارة المرتفعة، مع مرونة عالية تتحمل التمدد والانكماش",
    image: "/assets/service4_result.webp",
  },
  {
    title: "المقاولات العامة",
    desc: "تنفيذ أعمال المقاولات العامة للمشاريع السكنية والتجارية والصناعية وفق أعلى معايير الجودة، مع إدارة دقيقة للموقع وضمان الالتزام بالجداول الزمنية.",
    image: "/assets/service5_result.webp",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimeout = useRef(null);
  const sectionRef = useRef(null);


  const leftIndex = (active - 1 + SERVICES.length) % SERVICES.length;
  const rightIndex = (active + 1) % SERVICES.length;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 120,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  // 🔁 Auto switching
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SERVICES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleDotClick = (index) => {
    setActive(index);
    setPaused(true);

    clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      setPaused(false);
    }, 6000);
  };

  return (
    <section ref={sectionRef} className={styles.services}>
      <div className="container">
        <h2 className={styles.sectionTitle}>خدماتنا</h2>

        <div className={styles.carousel}>
          {SERVICES.map((service, i) => {
            let position = styles.hidden;

            if (i === active) position = styles.active;
            else if (i === leftIndex) position = styles.left;
            else if (i === rightIndex) position = styles.right;

            return (
              <div
                key={i}
                className={`${styles.card} ${position}`}
                style={{ backgroundImage: `url(${service.image})` }}
                onClick={() => {
                  setActive(i);
                  setPaused(true);

                  clearTimeout(resumeTimeout.current);
                  resumeTimeout.current = setTimeout(() => {
                    setPaused(false);
                  }, 5000);
                }}
                onMouseEnter={() => i === active && setPaused(true)}
                onMouseLeave={() => i === active && setPaused(false)}
              >
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <div className={styles.line} />
                  <p className={styles.text}>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {SERVICES.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                i === active ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
