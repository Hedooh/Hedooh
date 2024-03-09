"use client"
import styles from "./nav.module.scss"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Nav() {
    const router = usePathname()

    return (
        <nav className={styles.nav}>
            <Image src="/logo.png" alt="logo" width={200} height={40} />
            <ul>
                <li className={router === "/" ? styles.active : ""}>Acceuil</li>
                <li className={router === "/product" ? styles.active : ""}>Notre produit</li>
                <li className={router === "/config" ? styles.active : ""}>Configurer votre produit</li>
                <li className={router === "/hedooh" ? styles.active : ""}>Hedooh Entertainment</li>
            </ul>
            <button>Prendre rendez vous</button>
        </nav>
    )
}
