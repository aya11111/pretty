import {useTranslation} from "react-i18next"
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons' 
import {  useDispatch } from "react-redux";
import {english, arabic} from "../../store/store";
import { Link } from "react-router-dom";

function Nav(props){
    
    const dispatch = useDispatch();

    const {t, i18n} = useTranslation();
    const langAtt = document.getElementsByTagName("html")[0];
   
    return (

        <>
            <nav className="navbar navbar-expand-lg">
                
                <div className="container">
                    <a className="navbar-brand" href="/#">{t("nav.logo")}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars}/></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">{t("nav.home")}</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{t("nav.about")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop/foundation">{t("nav.shop")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">{t("nav.contact")}</Link>
                            </li>
                        </ul>
                        <ul className="nav-icons navbar-nav">
                            <li className="nav-item">
                                {i18n.language == "ar" &&<button onClick={()=>{i18n.changeLanguage("en"); langAtt.setAttribute("lang","en"); dispatch(english())}}>EN</button>}
                                {i18n.language == "en" && <button onClick={()=>{i18n.changeLanguage("ar"); langAtt.setAttribute("lang","ar"); dispatch(arabic())}}>AR</button>}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#"><FontAwesomeIcon icon={faFacebookF}/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#"><FontAwesomeIcon icon={faInstagram}/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#"><FontAwesomeIcon icon={faTwitter}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav;