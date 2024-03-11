"use client"
import styles from "./config.module.scss"
import React, { useState, useRef } from "react"
import { useRouter } from "next/navigation"

export default function Configurateur() {
    const router = useRouter()
    const [config, setConfig] = useState(false)
    const [isPremium, setIsPremium] = useState(false)
    const [dragActive, setDragActive] = useState<boolean>(false)
    const inputRef = useRef<any>(null)
    const [files, setFiles] = useState<any>([])
    const [previewImage, setPreviewImage] = useState<string>()

    function handleChange(e: any) {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < e.target.files["length"]; i++) {
                setFiles((prevState: any) => [...prevState, e.target.files[i]])
            }

            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewImage(reader.result as string)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    function handleDrop(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
                setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]])
            }
        }
    }

    function handleDragLeave(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
    }

    function handleDragOver(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(true)
    }

    function handleDragEnter(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(true)
    }

    function removeFile(fileName: any, idx: any) {
        const newArr = [...files]
        newArr.splice(idx, 1)
        setFiles([])
        setFiles(newArr)
    }

    function openFileExplorer() {
        inputRef.current.value = ""
        inputRef.current.click()
    }
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
                                    router.push("/Configurateur")
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
                    {previewImage && <img src={previewImage} alt="preview" className={styles.preview} />}
                    <div>
                        <img src="/Config/product2.png" alt="tv" />
                        <img src="/Config/product3.png" alt="tv" />
                    </div>
                </div>
                <div className={styles.config__config__panel}>
                    <h3>Configurateur</h3>
                    <p className={styles.p}>
                        <span
                            style={{
                                backgroundColor: isPremium ? "#BF9A4C" : "#000"
                            }}
                        >
                            1
                        </span>
                        {isPremium ? "Déposez votre vidéo digital" : "Déposer votre support digital"}
                    </p>
                    <div className={styles.config__config__panel__drop}>
                        <form
                            onDragEnter={handleDragEnter}
                            onSubmit={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                            onClick={openFileExplorer}
                        >
                            <input
                                placeholder="fileInput"
                                className="hidden"
                                ref={inputRef}
                                type="file"
                                multiple={true}
                                onChange={handleChange}
                                accept="image/*, .pdf, .mp4"
                            />

                            <img src="/Config/drop.png" alt="drop" />
                            <p>
                                {isPremium
                                    ? "Dépose ta vidéo et regarde en temps réel le résultat"
                                    : "Dépose ton visuel de communication ici"}
                            </p>
                            <p>{isPremium ? "MP4" : "JPG, PNG or PDF, file size no more than 10MB"}</p>

                            <div className="flex flex-col items-center p-3">
                                {files.map((file: any, idx: any) => (
                                    <div key={idx} className="flex flex-row space-x-5">
                                        <span>{file.name}</span>
                                        <span
                                            className="text-red-500 cursor-pointer"
                                            onClick={() => removeFile(file.name, idx)}
                                        >
                                            remove
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                    <div className={styles.config__config__panel__formulas}>
                        <div className={styles.config__config__panel__formulas__title}>
                            <span></span>
                            <h3>Formules de locations</h3>
                            <span></span>
                        </div>
                        <div className={styles.config__config__panel__formulas__item}>
                            <div
                                className={styles.input}
                                style={{
                                    border: isPremium ? "1px solid #BF9A4C" : "1px solid #000"
                                }}
                            >
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
                            <div
                                className={styles.input}
                                style={{
                                    border: isPremium ? "1px solid #BF9A4C" : "1px solid #000"
                                }}
                            >
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
                            <div
                                className={styles.input}
                                style={{
                                    border: isPremium ? "1px solid #BF9A4C" : "1px solid #000"
                                }}
                            >
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
                    <button
                        style={{
                            backgroundColor: isPremium ? "#BF9A4C" : "#000"
                        }}
                    >
                        Prendre rendez vous
                    </button>
                </div>
            </div>
        </div>
    )
}
