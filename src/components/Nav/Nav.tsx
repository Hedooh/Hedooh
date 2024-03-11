"use client"
import { useState } from "react"
import styles from "./nav.module.scss"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"
import Hamburger from "hamburger-react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
export default function Nav() {
    const router = usePathname()
    const searchParams = useSearchParams()
    const isPremium = searchParams.get("premium")
    const [isOpen, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <nav
            className={styles.nav}
            style={{
                borderBottom: router === "/Hedooh" || isPremium === "true" ? "2px solid #BF9A4C" : "2px solid #000"
            }}
        >
            <Image
                src={router === "/Hedooh" || isPremium === "true" ? "/Hedooh/logo.png" : "/logo.png"}
                alt="logo"
                width={router === "/Hedooh" || isPremium === "true" ? 100 : 200}
                height={40}
            />
            <ul className={router === "/Hedooh" || isPremium === "true" ? styles.hedooh : ""}>
                <li className={router === "/" ? styles.active : ""}>
                    <Link href="/">Accueil</Link>
                </li>
                <li className={router === "/Product" ? styles.active : ""}>
                    <Link href="/Product">Notre produit</Link>
                </li>
                <li className={router === "/Configurateur" ? styles.active : ""}></li>
                <li className={router === "/Hedooh" ? styles.active : ""}>
                    <Link href="/Hedooh">Hedooh Entertainment</Link>
                </li>
            </ul>
            <button
                style={{
                    backgroundColor: router === "/Hedooh" || isPremium === "true" ? "#BF9A4C" : "#000"
                }}
            >
                Prendre rendez vous
            </button>
            <div className={styles.burger}>
                <Hamburger toggled={isOpen} toggle={setOpen} color="#000" />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        whileTap={{
                            zIndex: 1000
                        }}
                        className={styles.nav__mobile}
                    >
                        <div className={styles.layout}>
                            <div className={styles.nav__mobile__content}>
                                <ul>
                                    <li onClick={handleClose}>
                                        <Link href="/">Accueil</Link>
                                    </li>
                                    <li onClick={handleClose}>
                                        <Link href="/Product">Notre produit</Link>
                                    </li>
                                    <li onClick={handleClose}>
                                        <Link href="/Configurateur">Configurer votre produit</Link>
                                    </li>
                                    <li onClick={handleClose}>
                                        <Link href="/Hedooh">Hedooh Entertainment</Link>
                                    </li>
                                </ul>
                                <button>Prendre rendez vous</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
