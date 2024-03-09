"use client"
import styles from "./Home.module.scss"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.home__bg}>
                <div className={styles.home__bg__container}>
                    <h1>Une solution digitale comme tu n'as jamais vu !</h1>
                    <p>
                        Chez Hedooh, nous croyons en la puissance de la communication dynamique . Notre solution
                        Phygital itinérante révolutionnaire repousse les limites de la publicité traditionnelle en
                        proposant une expérience interactive, immersive et mémorable.
                    </p>
                    <button>Découvre ta solution digitale</button>
                    <img src="/Home/avis.png" alt="avis" />
                </div>
            </div>
            <div className={styles.home__data}>
                <span className={styles.span}>Nos chiffres</span>
                <div className={styles.home__data__container}>
                    <div className={styles.home__data__container__left}>
                        <h2>Depuis le début de nos opérations</h2>
                        <p>
                            Ayez une <strong>présence active</strong> dans des endroits hautement ciblés là où la
                            publicité traditionnelle est perdue, une fois l’abonnement aux réseaux sociaux activés,
                            votre client pourra faire tourner la roue et tenter de gagner un cadeau. Un abonné en plus
                            d’un client fidélisé…
                        </p>
                        <button>Prendre rendez vous</button>
                    </div>
                    <div className={styles.home__data__container__right}>
                        <div>
                            <h2>3500+</h2>
                            <p>Abonnées sur instagram</p>
                        </div>
                        <div>
                            <h2>7000€</h2>
                            <p>Valeur cadeaux distribués</p>
                        </div>
                        <div>
                            <h2>30 à 50%</h2>
                            <p>Retour Lead gagnat par rapport aux cadeaux distribués</p>
                        </div>
                        <div>
                            <h2>Des milliers</h2>
                            <p>De personnes impactées par notre solution de publicité itinérante</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.home__solution}>
                <span className={styles.span}>Une solution pour toi !</span>
                <h2>
                    Grâce à HEDOOH <br />
                    le digital se vie plus fort !
                </h2>
                <p>La meilleure communication digitale avec un sac à dos</p>
                <div className={styles.home__solution__container}>
                    <div className={styles.home__solution__container__item}>
                        <div>
                            <img src="/Home/code.png" alt="code" />
                            <h3>Scannez</h3>
                            <p>Les clients scannent le QR code sur notre sac à dos </p>
                        </div>
                        <div>
                            <img src="/Home/insta.png" alt="code" />
                            <h3>Abonnez-vous</h3>
                            <p>
                                Vos clients doivent vous laisser un avis Google ou d ‘autres actions marketing !
                                Abonnement TikTok, Instagram, Facebook …
                            </p>
                        </div>
                    </div>
                    <img src="/Home/phone.png" alt="phone" />
                    <div className={styles.home__solution__container__item}>
                        <div>
                            <img src="/Home/wheel.png" alt="code" />
                            <h3>Tounez la roue</h3>
                            <p>Une fois l'avis google déposé ou l'abonnement aux réseaux sociaux effectué</p>
                        </div>
                        <div>
                            <img src="/Home/gift.png" alt="code" />
                            <h3>Gagnez</h3>
                            <p>
                                Fixez vos propres conditions de retrait, maîtrisez les cadeaux et quantités offerts,
                                suivez vos résultats facilement grâce à une application sécurisée avec une limite de
                                participation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.home__config}>
                <span className={styles.span}>Configurateur sur mesure</span>
                <h2>
                    Configurez votre <br />
                    propre communication
                </h2>
                <p>
                    Explorez notre site pour découvrir comment Hedooh peut transformer votre approche de la <br />
                    communication itinérante et de la publicité interactive. Soyez au cœur de l'innovation, soyez
                    Hedooh.
                </p>
                <div className={styles.home__config__container}>
                    <div className={styles.home__config__container__left}>
                        <div className={styles.home__config__container__left__item}>
                            <div>
                                <img src="/Home/box.png" alt="box" />
                                <h3>Customisation personnalisé</h3>
                            </div>
                            <p>Lisez des séquences, des animations, des photos ou modifiez des graphiques.</p>
                        </div>
                        <div className={styles.home__config__container__left__item}>
                            <div>
                                <img src="/Home/box.png" alt="box" />
                                <h3>Créer ton univers digital</h3>
                            </div>
                            <p>Notre équipe de conception peut créer une vidéo pour vous si nécessaire.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/Home/configurateur.png" alt="config" />
                    </div>
                </div>
                <div className={styles.home__config__button}>
                    <button>Prendre rendez-vous</button>
                    <button>Configurez votre sac à dos</button>
                </div>
            </div>
            <div className={styles.home__fun}>
                <span className={styles.span}>Amusez vous</span>
                <h2>Scannez moi</h2>
                <p>
                    Scannez moi avec ton téléphone pour comprendre ce que vie les utilisateurs qui utilise Hedooh.
                    <br />
                    Vous scannez et c'est gagné
                </p>
                <img className={styles.home__fun__scan} src="/Home/qrCode.png" alt="scan" />
                <div className={styles.home__fun__famille}>
                    <img src="/Home/famille.png" alt="famille" />
                    <div className={styles.home__fun__famille__item}>
                        <h2>Une famille dans la communication digital</h2>
                        <p>
                            Un service zéro déchet, cette forme de média extérieur aux multiples facettes ouvre les
                            portes à une créativité diversifiée. Mobile avec des équipes formées (streets fighters) qui
                            peuvent répondre à toutes les questions.
                        </p>
                        <button>Découvrez notre produit</button>
                    </div>
                </div>
                <div className={styles.home__fun__tree}>
                    <div>
                        <span>
                            <img src="/Home/person.png" alt="person" />
                        </span>
                        <h3>Solution digitale unique</h3>
                        <p>
                            Emplacements ciblés
                            <br />
                            Ayez une <strong>présence active</strong> dans des endroits hautement ciblés , là où la
                            publicité traditionnelle est perdue.
                        </p>
                    </div>
                    <div>
                        <span>
                            <img src="/Home/square.png" alt="square" />
                        </span>
                        <h3>Des jeux attractifs</h3>
                        <p>
                            Générez des Leads grâce au gaming interactif qui favorise l'engagement envers votre marque
                            en créant un impact émotionnel fort
                        </p>
                    </div>
                    <div>
                        <span>
                            <img src="/Home/smile.png" alt="smile" />
                        </span>
                        <h3>Gagnant à 100%</h3>
                        <p>
                            Faites de la récolte de données votre priorité et boostez vos réseaux sociaux grâce aux jeux
                            instant gagnant , avec un rapport de campagne complet après chaques opérations marketing
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.home__us}>
                <img src="/Home/us.png" alt="us" />
            </div>
            <div className={styles.home__faq}>
                <span className={styles.span}>On à réponse à tout !</span>
                <h2>FAQ</h2>
                <p>
                    Explorez notre Foire Aux Questions pour trouver des réponses à vos interrogations fréquentes. Nous
                    <br />
                    sommes là pour vous fournir les informations dont vous avez besoin.
                </p>
                <Accordion type="single" collapsible className={styles.home__faq__accordion}>
                    <AccordionItem value="item-1" className={styles.home__faq__accordion__item}>
                        <AccordionTrigger>Le sac est-t-il lourd ?</AccordionTrigger>
                        <AccordionContent>
                            <p>Non, son poids combiné cadre et écran est inférieur à 3 Kg</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className={styles.home__faq__accordion__item}>
                        <AccordionTrigger>Combien de temps dure une batterie ?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                {" "}
                                Avec le plein écran , vous pouvez vous attendre à Quatres heures d'utilisation de chaque
                                batterie, bien que vous puissiez la remplacer à chaud par une nouvelle batterie
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className={styles.home__faq__accordion__item}>
                        <AccordionTrigger>Quels contenus les streets fighters diffuse t-il ?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Pour des images en plein écran, les dimensions idéales sont de 1 080 x 1 920 .
                                <br />
                                Formats d'image : GIF*, PNG, JPEG
                                <br />
                                Formats vidéo : MP4 avec ou sans son.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className={styles.home__faq__accordion__item}>
                        <AccordionTrigger>Quand le rapport de données est-il disponible ?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Directement après l'opération marketing , Un fichier vous ai envoyé avec le nombre de
                                scans et les informations des personnes ayant participés .
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className={styles.home__faq__accordion__item}>
                        <AccordionTrigger>Le sac à dos resiste t-il à l'eau ?</AccordionTrigger>
                        <AccordionContent className={styles.home__faq__accordion__content}>
                            <p> Il est conseillé de ne pas sortir par temps de pluie .</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className={styles.home__ceo}>
                <div className={styles.home__ceo__quote}>
                    <img src="/Home/leftQuote.png" alt="ceo" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <img src="/Home/rightQuote.png" alt="ceo" />
                </div>
                <img
                    src="/Home/jeremy.png"
                    alt="ceo"
                    style={{
                        marginTop: "20px"
                    }}
                />
            </div>
        </div>
    )
}
