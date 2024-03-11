"use client"
import styles from "./nav.module.scss"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Nav() {
    const router = usePathname()

    return (
        <nav
            className={styles.nav}
            style={{
                borderBottom: router === "/Hedooh" ? "2px solid #BF9A4C" : "2px solid #000"
            }}
        >
            <Image src={router !== "/Hedooh" ? "/logo.png" : "/Hedooh/logo.png"} alt="logo" width={200} height={40} />
            <ul className={router === "/Hedooh" ? styles.hedooh : ""}>
                <li className={router === "/" ? styles.active : ""}>Acceuil</li>
                <li className={router === "/Product" ? styles.active : ""}>Notre produit</li>
                <li className={router === "/Config" ? styles.active : ""}>Configurer votre produit</li>
                <li className={router === "/Hedooh" ? styles.active : ""}>Hedooh Entertainment</li>
            </ul>
            <button
                style={{
                    backgroundColor: router === "/Hedooh" ? "#BF9A4C" : "#000"
                }}
            >
                Prendre rendez vous
            </button>
        </nav>
    )
}
