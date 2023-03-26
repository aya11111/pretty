import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from "react-i18next"
import "./footer.css"
function Footer(props){
    const {t, i18n} = useTranslation();
    return(
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <h2>{t("nav.logo")}</h2>
                            <p>{t("paragraph")}</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <h3>{t("nav.shop")}</h3>
                            <ul>
                                <li><a href="/#">{t("categories.foundation")}</a></li>
                                <li><a href="/#">{t("categories.blusher")}</a></li>
                                <li><a href="/#">{t("categories.lips")}</a></li>
                                <li><a href="/#">{t("categories.brushes")}</a></li>
                                <li><a href="/#">{t("categories.eyes")}</a></li>
                                <li><a href="/#">{t("categories.nails")}</a></li>
                                <li><a href="/#">{t("categories.skinCare")}</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <h3>{t("footer.information")}</h3>
                            <ul>
                                <li><a href="/#">{t("nav.home")}</a></li>
                                <li><a href="/#">{t("nav.about")}</a></li>
                                <li><a href="/#">{t("nav.shop")}</a></li>
                                <li><a href="/#">{t("nav.contact")}</a></li>
                                <li><a href="/#">page5</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <h3>{t("footer.stay")}</h3>
                            <p>{t("footer.stayPar")}</p>
                            <form className="footer-form">
                                <input type="email" placeholder={t("footer.email")}/>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </form>
                        </div>
                        <p className="made ">{t("footer.made")} <FontAwesomeIcon icon={faHeart} /></p>
                        <p className="right">© <span>{t("nav.logo")}</span> {t("footer.rights")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;