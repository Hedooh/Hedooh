import styles from "./hedooh.module.scss"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Hedooh() {
    return (
        <div className={styles.home}>
            <div className={styles.home__bg}>
                <div className={styles.home__bg__container}>
                    <h1>
                        Votre <span>solution</span> digital pour vos évenements <span>festifs</span> de{" "}
                        <span>luxe</span>
                    </h1>
                    <p>
                        Chez Hedooh Entertainment, nous sommes passionnés par l'art de la célébration. Nous offrons des
                        solutions digitales de communication de luxe avec une équipe dédiée à l'innovation, à la
                        créativité et à l'élégance.
                    </p>
                    <p>
                        <img src="/Hedooh/validate.png" alt="validate" />
                        Augmente considérablement votre chiffre d'affaire
                    </p>
                </div>
            </div>
            <div className={styles.home__why}>
                <img src="/Hedooh/partenaires.png" alt="partenaires" />
                <div className={styles.home__why__container}>
                    <div>
                        <img src="/Hedooh/why.png" alt="why" />
                    </div>
                    <div className={styles.home__why__container__content}>
                        <h2>Pourquoi choisir Hedooh Entertainment</h2>
                        <div className={styles.home__why__container__content__item}>
                            <img src="/Hedooh/money.png" alt="money" />
                            <p>Augmentez votre chiffre d'affaire avec Hedooh Entertainment</p>
                        </div>
                        <div className={styles.home__why__container__content__item}>
                            <img src="/Hedooh/pencil.png" alt="money" />
                            <p>Demarquez-vous grâce au digital</p>
                        </div>
                        <div className={styles.home__why__container__content__item}>
                            <img src="/Hedooh/style.png" alt="money" />
                            <p>Personnalisation exceptionnelle avec un style unique</p>
                        </div>
                        <div className={styles.home__why__container__content__btn}>
                            <button>Prendre rendez-vous</button>
                            <button>Configurez votre écran</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.home__services}>
                <span>Nous choisir</span>
                <h2>L’indispensable pour vos évènements festifs ! </h2>
                <p>
                    Explorez notre site pour découvrir l'univers Hedooh Entertainment. Faites de chaque événement un
                    spectacle de luxe, où la technologie rencontre l'élégance.
                </p>
                <div className={styles.home__services__container}>
                    <div>
                        <img src="/Hedooh/click.png" alt="Innovation constante" />
                        <h3>Innovation constante</h3>
                        <p>
                            Restez à la pointe de l'innovation avec nos solutions digitales événementielles en constante
                            évolution.
                        </p>
                    </div>
                    <div>
                        <img src="/Hedooh/person.png" alt="XP client" />
                        <h3>Expérience Client Exceptionnelle</h3>
                        <p>
                            Nous nous engageons à dépasser vos attentes, offrant une expérience client exceptionnelle à
                            chaque étape.
                        </p>
                    </div>
                    <div>
                        <img src="/Hedooh/diamond.png" alt="Diamand" />
                        <h3>Production</h3>
                        <p>
                            Nous redéfinissons le luxe dans la communication de l'événementiel en combinant la
                            technologie avant-gardiste avec une esthétique raffinée.
                        </p>
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
                    Plongez vos invités dans une expérience visuelle captivante. Notre équipe de designers talentueux
                    crée des contenus <br />
                    visuels exceptionnels pour donner vie à votre événement, garantissant une ambiance festive
                    inoubliable.
                </p>
                <div className={styles.home__config__container}>
                    <div className={styles.home__config__container__left}>
                        <div className={styles.home__config__container__left__item}>
                            <div>
                                <img src="/Hedooh/box.png" alt="box" />
                                <h3>Customisation personnalisé</h3>
                            </div>
                            <p>Lisez des séquences, des animations, des photos ou modifiez des graphiques.</p>
                        </div>
                        <div className={styles.home__config__container__left__item}>
                            <div>
                                <img src="/Hedooh/box.png" alt="box" />
                                <h3>Créer ton univers digital</h3>
                            </div>
                            <p>Notre équipe de conception peut créer une vidéo pour vous si nécessaire.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/Hedooh/configurateur.png" alt="config" />
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
            </div>
            <div className={styles.home__operations}>
                <span className={styles.span}>Nos Chiffres</span>
                <h2>
                    Depuis le début de nos <br />
                    <span>opérations</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, qui
                </p>
                <div className={styles.home__operations__container}>
                    <div className={styles.home__operations__container__item}>
                        <h3>3500+</h3>
                        <h4>Réseau social</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, qui
                        </p>
                    </div>
                    <div className={styles.home__operations__container__item}>
                        <h3>35+</h3>
                        <h4>Partenaires</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, enim ad minim veniam, qui </p>
                    </div>
                    <div className={styles.home__operations__container__item}>
                        <h3>15+</h3>
                        <h4>Club Hedooh</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, enim ad minim veniam, qui</p>
                    </div>
                </div>
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
                        <AccordionTrigger>Peut-on personnaliser l'écran ?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Oui l'écran est entièrement personnalisable , nos équipes sont dédiés à la réalisation
                                de votre projet .
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className={styles.home__faq__accordion__item}>
                        <AccordionTrigger>Combien de temps dure une batterie ?</AccordionTrigger>
                        <AccordionContent>
                            <p>La batterie est programmé pour durer trois heures sans interruptions</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className={styles.home__faq__accordion__item}>
                        <AccordionTrigger>L'écran resiste t-il à l'eau ?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Dû à certains composants techniques , il est préférable de garder le matèriel au sec .
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className={styles.home__faq__accordion__item}>
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
                    <AccordionItem value="item-5" className={styles.home__faq__accordion__item}>
                        <AccordionTrigger>
                            Pouvez-vous créer du contenu si je n'ai pas de vidéos ou d'images ?
                        </AccordionTrigger>
                        <AccordionContent className={styles.home__faq__accordion__content}>
                            <p>
                                Totalement , nous avons une équipe dédié à la création et qui pourront répondre à toutes
                                vos attentes .
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className={styles.home__ceo}>
                <div className={styles.home__ceo__quote}>
                    <img src="/Hedooh/leftQuote.png" alt="ceo" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <img src="/Hedooh/rightQuote.png" alt="ceo" />
                </div>
                <img
                    src="/Hedooh/jeremy.png"
                    alt="ceo"
                    style={{
                        marginTop: "20px"
                    }}
                />
            </div>
        </div>
    )
}
