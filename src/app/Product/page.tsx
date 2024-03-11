"use client"
import React, { useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

import styles from "./product.module.scss"

export default function Product() {
    const [mainImage, setMainImage] = useState("/Product/product1.png")

    function Number({ n, symbol }: any) {
        const [ref, inView] = useInView({
            threshold: 0
        })
        const props = useSpring({
            from: { number: 0 },
            to: { number: inView ? n : 0 },
            config: { mass: 1, tension: 20, friction: 10 },
            delay: 200
        })
        return (
            <div ref={ref}>
                <animated.span style={{ color: "#000" }}>{props.number.to((n) => n.toFixed(0))}</animated.span>
                <span style={{ color: "#000" }}>{symbol}</span>
            </div>
        )
    }

    return (
        <div className={styles.product}>
            <div className={styles.product__main}>
                <div className={styles.product__main__image}>
                    <div className={styles.product__main__image__list}>
                        <img
                            src="/Product/product1.png"
                            alt="Product Image"
                            onClick={() => setMainImage("/Product/product1.png")}
                        />
                        <img
                            src="/Product/product2.jpeg"
                            alt="Product Image"
                            onClick={() => setMainImage("/Product/product2.png")}
                        />
                        <img
                            src="/Product/product3.jpeg"
                            alt="Product Image"
                            onClick={() => setMainImage("/Product/product3.png")}
                        />
                        <img
                            src="/Product/product4.jpeg"
                            alt="Product Image"
                            onClick={() => setMainImage("/Product/product3.png")}
                        />
                        <img
                            src="/Product/product5.jpeg"
                            alt="Product Image"
                            onClick={() => setMainImage("/Product/product3.png")}
                        />
                        <img
                            src="/Product/product6.jpeg"
                            alt="Product Image"
                            onClick={() => setMainImage("/Product/product3.png")}
                        />
                    </div>
                    <img src={mainImage} alt="Product Image" />
                </div>
                <div className={styles.product__main__info}>
                    <div className={styles.product__main__info__head}>
                        <img src="/Product/stars.png" alt="Stars" />
                        <p>24 avis certifiés</p>
                        <span>Ta nouvelle experience digitale</span>
                    </div>
                    <div className={styles.product__main__info__title}>
                        <h2>Hedooh votre sac à dos digital </h2>
                        <p>Hedooh la meilleur communication digitale possible avec un sac à dos</p>
                    </div>
                    <div className={styles.product__main__info__points}>
                        <h3>
                            <img src="/Product/validate.png" alt="Check" />
                            Mettez en avant la publicité de votre choix{" "}
                        </h3>
                        <h3>
                            <img src="/Product/validate.png" alt="Check" />
                            Faites gagner des cadeaux à votre communauté{" "}
                        </h3>
                        <h3>
                            <img src="/Product/validate.png" alt="Check" />
                            Créez votre univers digital{" "}
                        </h3>
                        <p>
                            Libérez la créativité avec notre solution de publicité interactive. Des annonces qui
                            captivent et incitent à l'action, garantissant un impact maximal pour votre marque.
                        </p>
                    </div>
                    <div className={styles.product__main__info__formulas}>
                        <div className={styles.product__main__info__formulas__title}>
                            <span></span>
                            <h3>Formules de locations</h3>
                            <span></span>
                        </div>
                        <div className={styles.product__main__info__formulas__item}>
                            <div className={styles.input}>
                                <label htmlFor="formula1">
                                    <input type="radio" id="formula1" name="formula" value="formula1" defaultChecked />
                                    <div>
                                        <h4>Forfait 2h / 2 écrans</h4>
                                        <p>StreetFighters / jeu instant Gagnant / Récolte Données inclus</p>
                                        <h5>290.00 €</h5>
                                    </div>
                                </label>
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="formula2">
                                    <input type="radio" id="formula2" name="formula" value="formula2" />
                                    <div>
                                        <h4>Forfait 3h / 4 écrans</h4>
                                        <p>StreetFighters / jeu instant Gagnant / Récolte Données inclus</p>
                                        <h5>739,00 €</h5>
                                    </div>
                                </label>
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="formula3">
                                    <input type="radio" id="formula3" name="formula" value="formula3" />
                                    <div>
                                        <h4>Sur mesure</h4>
                                        <p>Résiliable à tout moment</p>
                                        <h5>Sur demande</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className={styles.product__main__info__formulas__btn}>
                            <button>Prendre rendez vous</button>
                            <button>Configurer votre sac à dos</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product__data}>
                <div className={styles.product__data__item}>
                    <h3>3500+</h3>
                    <p>Abonnés sur instagram</p>
                </div>
                <div className={styles.product__data__item}>
                    <h3>7000 €</h3>
                    <p>Valeur cadeaux distribués</p>
                </div>
                <div className={styles.product__data__item}>
                    <h3>30 à 50%</h3>
                    <p>Retour lead gagnnt par cadeau</p>
                </div>
                <div className={styles.product__data__item}>
                    <h3>Des milliers</h3>
                    <p>De personnes impactées par notre solution de publicité itinérante</p>
                </div>
            </div>
            <div className={styles.product__avantages}>
                <div className={styles.product__avantages__left}>
                    <p>Plus que des avantages</p>
                    <h3>Votre solution digitale haut de gamme et abordable</h3>
                    <p>Hedooh la meilleur communication digitale possible avec un sac à dos</p>
                    <div className={styles.product__main__info__formulas__btn}>
                        <button>Prendre rendez vous</button>
                        <button>Configurer votre sac à dos</button>
                    </div>
                </div>
                <div className={styles.product__avantages__right}>
                    <table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td
                                    style={{
                                        borderTopLeftRadius: "15px",
                                        borderTopRightRadius: "15px"
                                    }}
                                >
                                    <img
                                        src="/Product/tableImg.png"
                                        alt="table"
                                        style={{
                                            width: "92px",
                                            height: "95px"
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        borderTopLeftRadius: "15px"
                                    }}
                                >
                                    Hyper proximité{" "}
                                </td>
                                <td>
                                    <img src="/Product/validate.png" alt="Check" />
                                </td>
                            </tr>
                            <tr>
                                <td>Éco responsable</td>
                                <td>
                                    <img src="/Product/validateWhite.png" alt="Check" />
                                </td>
                            </tr>
                            <tr>
                                <td>Flexible et adaptable</td>
                                <td>
                                    <img src="/Product/validate.png" alt="Check" />
                                </td>
                            </tr>
                            <tr>
                                <td>Boost vos abonnés sur les réseaux sociaux</td>
                                <td>
                                    <img src="/Product/validateWhite.png" alt="Check" />
                                </td>
                            </tr>
                            <tr>
                                <td>Augmente votre CA</td>
                                <td>
                                    <img src="/Product/validate.png" alt="Check" />
                                </td>
                            </tr>
                            <tr>
                                <td>Créer une base de donnée client</td>
                                <td>
                                    <img src="/Product/validateWhite.png" alt="Check" />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        borderBottomLeftRadius: "15px"
                                    }}
                                >
                                    Impact émotionnel positif envers votre marque
                                </td>
                                <td>
                                    <img src="/Product/validate.png" alt="Check" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.product__why}>
                <span>Nous choisir</span>
                <h2>Pourquoi Hedooh</h2>
                <p>
                    En équipes de deux ou plus, les panneaux d'affichage numériques ciblent souvent les zones à fort
                    trafic piétonnier comme les centres de transport, les foules lors d'événements majeurs ou se
                    trouvent dans des zones où la publicité passive est perdue.
                </p>
                <div className={styles.product__why__container}>
                    <div className={styles.product__why__container__item}>
                        <img src="/Product/Vector.png" alt="Vector" />
                        <h3>Créer ton univers digital</h3>
                        <p>Hedooh vous offres la possibilité de créer votre univers</p>
                    </div>
                    <div className={styles.product__why__container__item}>
                        <img src="/Product/Vector2.png" alt="Vector" />
                        <h3>Faites profiter votre communauté</h3>
                        <p>Offrez des cadeaux à votre communautés qui le mérite</p>
                    </div>
                    <div className={styles.product__why__container__item}>
                        <img src="/Product/Vector3.png" alt="Vector" />
                        <h3>Génère de l’argent avec Hedooh</h3>
                        <p>Avec Hedooh génère de l’argent grâce à ton exposition</p>
                    </div>
                </div>
            </div>
            <div className={styles.product__communicate}>
                <div className={styles.product__communicate__left}>
                    <h2>Communication Itinérante Intelligente</h2>
                    <p>
                        Hedooh vous offre la possibilité de communiquer avec votre communauté et de leur offrir des
                        cadeaux. Hedooh vous offre la possibilité de communiquer avec votre communauté et de leur offrir
                        des cadeaux.
                    </p>
                </div>
                <div className={styles.product__communicate__right}>
                    <img src="/Product/communicate.png" alt="Communicate" />
                </div>
            </div>
            <div className={styles.product__avis}>
                <span>La meilleur de communautés</span>
                <h2>Ils parlent de nous mieux que nous !</h2>
                <div className={styles.product__avis__container}>
                    <div className={styles.first}>
                        <div className={styles.product__avis__container__item}>
                            <div className={styles.product__avis__container__item__head}>
                                <img src="/Product/person.png" alt="Avis" />
                                <h3>"Experience incroyable"</h3>
                                <img src="/Product/fiveStars.png" alt="Avis" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo amet,
                                consectetur adipiscing elit, sed do eiusmod tempo
                            </p>
                            <div className={styles.product__avis__container__item__footer}>
                                <p>Nick Polsen</p>
                                <p>CTO of Lambda</p>
                            </div>
                        </div>
                        <div className={styles.product__avis__container__item}>
                            <div className={styles.product__avis__container__item__head}>
                                <img src="/Product/person.png" alt="Avis" />
                                <h3>"Experience incroyable"</h3>
                                <img src="/Product/fiveStars.png" alt="Avis" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo amet,
                                consectetur adipiscing elit, sed do eiusmod tempo
                            </p>
                            <div className={styles.product__avis__container__item__footer}>
                                <p>Nick Polsen</p>
                                <p>CTO of Lambda</p>
                            </div>
                        </div>
                        <div className={styles.product__avis__container__item}>
                            <div className={styles.product__avis__container__item__head}>
                                <img src="/Product/person.png" alt="Avis" />
                                <h3>"Experience incroyable"</h3>
                                <img src="/Product/fiveStars.png" alt="Avis" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo amet,
                                consectetur adipiscing elit, sed do eiusmod tempo
                            </p>
                            <div className={styles.product__avis__container__item__footer}>
                                <p>Nick Polsen</p>
                                <p>CTO of Lambda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.product__contact}>
                <img src="/Product/contact.png" alt="Contact" />
            </div>
        </div>
    )
}
