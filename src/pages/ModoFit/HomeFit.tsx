import Hero from "../../components/Hero/Hero";
import NosotrosFit from "./Nosotros";

function HomeFit() {

    return (
        <div>
            <Hero 
            title={<>MODO <br /> FIT</>}
            description="Entrená distinto"
            bg="videos/fitbg.mp4"
            theme="modofit"/>

            <NosotrosFit />
        </div>
    )
}
export default HomeFit;