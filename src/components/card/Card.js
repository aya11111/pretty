import "./card.css"
import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";

function Card(props){
    const {t, i18n} = useTranslation();
    return(
        <>
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.info}</p>
                    <Link to={props.link} className="btn purple">{t("home.details")}</Link>
                </div>
            </div>
        </>
    )
}

export default Card;