import styles from "./HeroPawBackground.module.css";

const paws = ["paw1", "paw2", "paw3", "paw4", "paw5", "paw6"] as const;

export function HeroPawBackground() {
  return (
    <div className={styles.pawBackground} aria-hidden="true">
      {paws.map((paw) => (
        <span key={paw} className={`${styles.paw} ${styles[paw]}`}>
          🐾
        </span>
      ))}
    </div>
  );
}


