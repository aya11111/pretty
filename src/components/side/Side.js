import "./side.css";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


function Side(){
    const {t, i18n} = useTranslation();
    return(
        <>
            <div className="side">
                <div className="container">
                    <h3>{t("categories.shopby")}</h3>
                    <div className="side-items">
                        <div className="item">
                            <NavLink activeClassName="active" to="/shop/foundation" exact>{t("categories.foundation")}</NavLink>
                        </div>
                        <div className="item">
                            <NavLink activeClassName="active" to="/shop/blusher">{t("categories.blusher")}</NavLink>
                        </div>
                        <div className="item">
                            <NavLink activeClassName="active" to="/shop/lipstick">{t("categories.lips")}</NavLink>
                        </div>
                        <div className="item">
                            <NavLink activeClassName="active" to="/shop/brushes">{t("categories.brushes")}</NavLink>
                        </div>
                        <div className="item">
                            <NavLink activeClassName="active" to="/shop/eyeshadow">{t("categories.eyes")}</NavLink>
                        </div>
                        <div className="item">
                            <NavLink activeClassName="active" to="/shop/nails">{t("categories.nails")}</NavLink>
                        </div>
                        <div className="item">
                            <NavLink activeClassName="active" to="/shop/skincare">{t("categories.skinCare")}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Side;