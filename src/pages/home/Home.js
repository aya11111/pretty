import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import "./home.css";
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPalette, faIcons, faPaintBrush, faStar, faArrowRight, faArrowLeft, faUser} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";

function Home(props) {
    const {t, i18n} = useTranslation();

    const prevCaro = () => {
        let caroItem = document.querySelector(".categories .item");
        let width = caroItem.clientWidth / 3;
        console.log(caroItem)
        
        caroItem.scrollLeft -= width
        console.log("scroll left")
    }

    const nextCaro = () => {
        let caroItem = document.querySelector(".categories .item");
        let width = caroItem.clientWidth / 3;
        console.log(caroItem)
        
        caroItem.scrollLeft += width
        console.log("scroll right")
        
    }

    const state = useSelector((state)=>{
        return state.value
    })
    
    let catProduct = state[0].categories.map((el)=>{
        return(
            <Card key={el.id} image={el.image} title={el.title} info={el.info} link={el.url}/>
        )
        
    })
    return(
        <>
            <Nav data={props.data}/>

            <div className="header-background">
                <div className="container">
                    <div className="head-info">
                        <h2>{t("home.head")}</h2>
                        <p>{t("paragraph")}</p>
                        <button className="shop">{t("home.shop")}</button>
                    </div>
                </div>
            </div>

            
            <div className="welcome">
                <div className="container">
                    <h3>{t("home.welcome")}</h3>
                    <p>{t("paragraph")} {t("paragraph")} {t("paragraph")}.</p>
                </div>
            </div>


            <div className="pretty-info">
                <div className="container">
                    <div className="row">
                        <div className="info-image col-md-3 col-xs-12">
                            <img src="./images/brush.png" alt="colors"/>
                        </div>
                        <div className="info-par col-md-9 col-xs-12">
                            <h3>{t("home.best")}</h3>
                            <p>{t("paragraph")}</p>
                            <div className="advantages row">
                                <div className="part col-md-6 col-xs-12">
                                    <FontAwesomeIcon icon={faStar} />
                                    <h5>{t("home.quality")}</h5>
                                    <p>{t("paragraph")}</p>
                                </div>
                                <div className="part col-md-6 col-xs-12">
                                    <FontAwesomeIcon icon={faPalette} />
                                    <h5>{t("home.beautiful")}</h5>
                                    <p>{t("paragraph")}</p>
                                </div>
                                <div className="part col-md-6 col-xs-12">
                                    <FontAwesomeIcon icon={faIcons} />
                                    <h5>{t("home.variety")}</h5>
                                    <p>{t("paragraph")}</p>
                                </div>
                                <div className="part col-md-6 col-xs-12">
                                    <FontAwesomeIcon icon={faPaintBrush} />
                                    <h5>{t("home.easy")}</h5>
                                    <p>{t("paragraph")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="categories">
                    <h3>{t("categories.categories")}</h3>
                    <div className="items-wrapper">
                        <div className="item">
                            {catProduct}
                        </div>
                        
                    </div>
                    
                    <div className="left" onClick={prevCaro}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className="right" onClick={nextCaro}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    </div>
                
                
            </div>

            <div className="feedback">
                <div className="container">
                    <h3>{t("home.feedback")}</h3>
                    <p>{t("paragraph")}</p>
                    <div className="feedItems row">
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="user">
                                <FontAwesomeIcon icon={faUser} />
                                <h4>{t("home.roz")}</h4>
                            </div>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>{t("paragraph")}</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="user">
                                <FontAwesomeIcon icon={faUser} />
                                <h4>{t("home.nova")}</h4>
                            </div>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>{t("paragraph")}</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="user">
                                <FontAwesomeIcon icon={faUser} />
                                <h4>{t("home.sara")}</h4>
                            </div>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>{t("paragraph")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />


        </>
    )
}
export default Home