"use client"
import styles from "./footer.module.scss"
import { usePathname } from "next/navigation"

export default function Footer() {
    const router = usePathname()

    return router === "/Configurateur" ? null : (
        <footer className={styles.footer}>
            <ul>
                <li>Accueil</li>
                <li>Notre produit</li>
                <li>Configurez votre produit</li>
            </ul>
            <span></span>
            <div>
                <p>© 2024 Jeremy Lobruto. Tous les droits réservés.</p>
                <p>Design By Julian Caille </p>
            </div>
        </footer>
    )
}
