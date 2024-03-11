"use client"
import styles from "./config.module.scss"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function Configurateur() {
    const router = useRouter()
    const [config, setConfig] = useState(false)
    const [isPremium, setIsPremium] = useState(false)
    return (
        <div className={styles.config}>
            {!config && (
                <div className={styles.overlay}>
                    <div className={styles.config__choice}>
                        <div className={styles.config__choice__item}>
                            <h2>Hedooh</h2>
                            <img src="/Config/tv.png" alt="tv" />
                            <p>
                                Libérez la créativité avec notre solution de publicité interactive. Des annonces qui
                                captivent et incitent à l'action, garantissant un impact maximal pour votre marque.
                            </p>
                            <button
                                onClick={() => {
                                    setConfig(true)
                                }}
                            >
                                Configurer votre sac à dos
                            </button>
                        </div>
                        <div className={styles.config__choice__item}>
                            <h2>Hedooh Entertainment</h2>
                            <img src="/Config/tv.png" alt="tv" />
                            <p>
                                Chez Hedooh Entertainment, nous offrons des solutions digitales de communication de luxe
                                avec une équipe dédiée à l'innovation, à la créativité et à l'élégance.
                            </p>
                            <button
                                onClick={() => {
                                    setConfig(true)
                                    setIsPremium(true)
                                    router.push("/Configurateur?premium=true")
                                }}
                            >
                                Configurer votre écran
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.config__config}>
                <div className={styles.config__config__imgs}>
                    <img src="/Config/product1.png" alt="tv" />
                    <div>
                        <img src="/Config/product2.png" alt="tv" />
                        <img src="/Config/product3.png" alt="tv" />
                    </div>
                </div>
                <div className={styles.config__config__panel}>
                    <h3>Configurateur</h3>
                    <p className={styles.p}>
                        <span>1</span>Déposer votre support digital
                    </p>
                    <div className={styles.config__config__panel__drop}>
                        <img src="/Config/drop.png" alt="drop" />
                        <p>Dépose ton visuel de communication ici</p>
                        <p>JPG, PNG or PDF, file size no more than 10MB</p>
                    </div>
                    <div className={styles.config__config__panel__formulas}>
                        <div className={styles.config__config__panel__formulas__title}>
                            <span></span>
                            <h3>Formules de locations</h3>
                            <span></span>
                        </div>
                        <div className={styles.config__config__panel__formulas__item}>
                            <div className={styles.input}>
                                <label htmlFor="formula1">
                                    <input type="radio" id="formula1" name="formula" value="formula1" defaultChecked />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <div>
                                            <h4>Forfait 2h / 2 écrans</h4>
                                            <p>StreetFighters / jeu instant Gagnant / Récolte Données inclus</p>
                                        </div>
                                        <h5>290.00 €</h5>
                                    </div>
                                </label>
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="formula2">
                                    <input type="radio" id="formula2" name="formula" value="formula2" />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <div>
                                            <h4>Forfait 3h / 4 écrans</h4>
                                            <p>StreetFighters / jeu instant Gagnant / Récolte Données inclus</p>
                                        </div>
                                        <h5>739,00 €</h5>
                                    </div>
                                </label>
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="formula3">
                                    <input type="radio" id="formula3" name="formula" value="formula3" />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <div>
                                            <h4>Sur mesure</h4>
                                            <p>Résiliable à tout moment</p>
                                        </div>
                                        <h5>Sur demande</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button>Prendre rendez vous</button>
                </div>
            </div>
        </div>
    )
}
