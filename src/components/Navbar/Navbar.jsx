import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>TriviaTech</div>
            <ul className={styles.navLinks}>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact" className={styles.contactBtn}>Contact</a></li>
            </ul>
        </nav>
    );
}
