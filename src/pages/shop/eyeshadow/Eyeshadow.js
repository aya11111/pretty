import "./eyeshadow.css";
import { useSelector } from "react-redux";
import Card from "../../../components/card/Card";
import Side from "../../../components/side/Side";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
function Eyeshadow(){
    const state = useSelector((state)=>{
        return state.value
    })

    let eyeshadow = state[0].eyeshadow.map((el)=>{
        return(
            <Card key={el.id} image={el.image} title={el.title} info={el.info}/>
        )
        
    })
    return(
        <>
            <Nav />
            <div className="container">
                <div className="shop">
                    <div className="row">
                        <div className="col-md-4">
                            <Side />
                        </div>
                        <div className="col-md-8">
                            <div className="products">
                                
                                {eyeshadow}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Eyeshadow;