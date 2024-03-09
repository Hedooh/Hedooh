import styles from "./footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>Accueil</li>
                <li>Notre produit</li>
                <li>Configurez votre produit</li>
            </ul>
            <span></span>
            <div>
                <p>© 2024 Jeremy Lobruto. Tous les droits réservés.</p>
                <p>Design By Julian Caille & developed by Matthieu Roman</p>
            </div>
        </footer>
    )
}
