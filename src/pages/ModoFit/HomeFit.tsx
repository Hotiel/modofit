import Hero from "../../components/Hero/Hero";
import ContactFit from "./Contact";
import FitFaqs from "./Faqs";
import NosotrosFit from "./Nosotros";

function HomeFit() {

    return (
        <div>
            <Hero 
            title={<>MODO <br /> FIT</>}
            description="Entrená distinto"
            bg="videos/fitbg2.mp4"
            theme="modofit"/>

            <NosotrosFit />

            <div className="pattern">
                <div className="pattern-blur"></div>
                <img src="images/pattern.jpg" alt="divider img" />
            </div>
            
            <ContactFit />

            <div className="pattern">
                <div className="pattern-blur"></div>
                <img src="images/pattern.jpg" alt="divider img" />
            </div>

            <FitFaqs />
        </div>
    )
}
export default HomeFit;