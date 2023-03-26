import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import "./about.css";
import images from "../../images/about.jpg";

import {useTranslation} from "react-i18next";
function About(){
    const {t, i18n} = useTranslation();
    return (
        <>
            <Nav />
            <div className="about">
                <div className="about-head">
                    <h3>{t("nav.about")}</h3>
                </div>
                <div className="about-body">
                    <div className="container">
                        <div className="row">
                            <img className = "col-md-6 col-xs-12" src={images} alt="makeup"/>
                            <p className = "col-md-6 col-xs-12" >{t("longp")}</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default About;