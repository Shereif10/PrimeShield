"use client";

import styles from "./ClientsSection.module.css";

const CLIENTS = [
  {
    name: ["شركـــة دار بيـــــات", "للتطـوير العقــــاري"],
    logo: "/assets/part-8_result.webp",
  },
  {
    name: ["شــركــــة مــــاسة", "البنيان للمقـــاولات"],
    logo: "/assets/client-2_result.webp",
  },
  {
    name: ["شــــركـــــة نمـــــــاء", "للأعـمال للمقــاولات"],
    logo: "/assets/client-5_result.webp",
  },
  {
    name: ["شركة خالــد بــن علي", "بـــــــن عثمان الماجد"],
    logo: "/assets/layer_1(2)_result.webp",
  },
  {
    name: ["شـــــركة الـــمفهـــوم", "الاحترافي للمقــــاولات"],
    logo: "/assets/client-3_result.webp",
  },
  {
    name: ["شركة أســاس مكـــــين", "للـــتطــــــوير العقــــاري"],
    logo: "/assets/client-7_result.webp",
  },
  {
    name: ["شــركـــة مشـيــد", "للتطـــوير العقاري"],
    logo: "/assets/client-8_result.webp",
  },
  {
    name: ["مجمــــــوعة IHG", "العـــــــالميــــــــة"],
    logo: "/assets/client-4_result.webp",
  },
];

export default function ClientsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>عملاؤنا شركاء نجاحنا</h2>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.name}>
                <span>{client.name[0]}</span>
                <span>{client.name[1]}</span>
              </div>

              <div className={styles.logoWrapper}>
                <img src={client.logo} alt="client logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
