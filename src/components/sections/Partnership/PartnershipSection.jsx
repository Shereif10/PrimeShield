"use client";

import styles from "./PartnershipSection.module.css";

const PARTNERS = [
  { name: "أســـاس مكيــــن", logo: "/assets/part-7_result.webp" },
  {
    name: "جهــــــــــــــات حكــــــومية",
    logo: "/assets/part-3_result.webp",
  },
  { name: "كالمـــــا", logo: "/assets/part-6_result.webp" },
  {
    name: "هيئة الزكـــاة والضــــــــريبة",
    logo: "/assets/part-1_result.webp",
  },
  { name: "شركة دار بيات", logo: "/assets/part-8_result.webp" },
  { name: "شركة مشيد", logo: "/assets/part-2_result.webp" },
  { name: "مجموعة روشن", logo: "/assets/part-4_result.webp" },
  { name: "وزارة الاستثمــــار", logo: "/assets/part-5_result.webp" },
  { name: "شركة سيفين", logo: "/assets/part_6.png" },
  {
    name: (
      <>
        شركة بالانس بلس <br />
        للتطوير والاستثمار العقاري
      </>
    ),
    logo: "/assets/part_7.png",
  },
];

export default function PartnershipSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>الاعتمادات والشراكات</h2>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.logoWrapper}>
                <img src={partner.logo} alt={partner.name} />
              </div>
              <p className={styles.name}>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className={styles.testimonial}>
          <p className={styles.quote}>
            تعاملنا مع برايم شيلد في عدة مشاريع ضخمة، وأثبتوا احترافية عالية
            والتزامًا كاملًا بالمواصفات والمواعيد.
          </p>

          <div className={styles.authorBox}>
            <h4 className={styles.author}>المهندس سعد العتيبي</h4>
            <span className={styles.position}>
              مدير المشاريع - شركة التطوير العمراني
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
