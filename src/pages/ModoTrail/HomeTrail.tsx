import Hero from "../../components/Hero/Hero";

function HomeTrail() {

    return (
        <div>
            <Hero 
            title={<>MODO <br /> TRAIL RUN</>}
            description="Bienvenidx a la montaña"
            bg="videos/trailbg.mp4"
            theme="modotrail"/>
        </div>
    )
}
export default HomeTrail;