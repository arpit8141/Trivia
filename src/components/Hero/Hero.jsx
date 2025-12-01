import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.textContent}>
                <h1>Modern Solutions for Your IT Needs</h1>
                <p>We build scalable and secure digital products that empower businesses.</p>
                <a href="#contact" className={styles.ctaButton}>Get a Free Consultation</a>
            </div>
        </section>
    );
}
