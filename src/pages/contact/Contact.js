import "./contact.css";
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot,faPhone, faMessage} from '@fortawesome/free-solid-svg-icons';

function Contact(){
    const {t, i18n} = useTranslation();
    return (
        
        <>
            <Nav />

            <div className="contact">
                <div className="contact-head">
                        <h3>{t("nav.contact")}</h3>
                    </div>
                <div className="container">
                    <div className="contact-body row">
                        <div className="contact-info col-md-6 col-xs-12">
                            <div className ="item">
                                <FontAwesomeIcon icon={faLocationDot}/>
                                <div>
                                    <h4>{t("form.location")}</h4>
                                    <p>{t("form.street")}</p>
                                </div>
                                
                            </div>
                            <div className ="item">
                                <FontAwesomeIcon icon={faPhone}/>
                                <div>
                                    <h4>{t("form.phone")}</h4>
                                    <p>01075991657</p>
                                </div>
                                
                            </div>
                            <div className ="item">
                                <FontAwesomeIcon icon={faMessage}/>
                                <div>
                                    <h4>{t("form.email")}</h4>
                                    <p>abaa@pretty.net</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="form col-md-6 col-sm-12">
                            <h3>{t("form.getintouch")}</h3>
                            <p>{t("paragraph")}</p>
                            <form>
                                <input type="text" name="firstname" placeholder={t("form.firstname")}></input>
                                <input type="text" name="lastname" placeholder={t("form.lastname")}></input>
                                <input type="email" name="email" placeholder={t("form.email")}></input>
                                <input type="text" name ="phone" placeholder={t("form.phone")}></input>
                                <textarea placeholder={t("form.yourmessage")}></textarea>
                                <input type="submit" value={t("form.send")}></input>
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>

            <Footer/>
        </>
    )
}
export default Contact;