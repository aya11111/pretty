import "./foundation.css";
import { useSelector } from "react-redux";
import Card from "../../../components/card/Card";
import Side from "../../../components/side/Side";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
function Foundation(){
    const state = useSelector((state)=>{
        return state.value
    })

    let foundation = state[0].foundation.map((el)=>{
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
                                
                                {foundation}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Foundation;