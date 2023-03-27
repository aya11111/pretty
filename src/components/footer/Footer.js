import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from "react-i18next"
import "./footer.css";
import { Link } from "react-router-dom";

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
                                <li><Link to="/shop/foundation">{t("categories.foundation")}</Link></li>
                                <li><Link href="/shop/blusher">{t("categories.blusher")}</Link></li>
                                <li><Link href="/shop/lipstick">{t("categories.lips")}</Link></li>
                                <li><Link href="/shop/brushes">{t("categories.brushes")}</Link></li>
                                <li><Link href="/shop/eyeshadow">{t("categories.eyes")}</Link></li>
                                <li><Link href="/shop/nails">{t("categories.nails")}</Link></li>
                                <li><Link href="/shop/skincare">{t("categories.skinCare")}</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <h3>{t("footer.information")}</h3>
                            <ul>
                                <Link><a href="/pretty">{t("nav.home")}</a></Link>
                                <Link><a href="/about">{t("nav.about")}</a></Link>
                                <Link><a href="/shop/foundation">{t("nav.shop")}</a></Link>
                                <Link><a href="/contact">{t("nav.contact")}</a></Link>
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