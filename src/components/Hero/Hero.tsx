import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText, useGSAP);


interface HeroProps {
    title: React.ReactElement;
    description: string;
    bg: string;
    theme: "modofit" | "modotrail";
}

function Hero({ title, description, bg, theme }: HeroProps) {

    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const split = SplitText.create(titleRef.current, {
            type: "chars"
        });

        gsap.from(split.chars, {
        duration: .7, 
        y: 100,       // animate from 100px below
        autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
        stagger: 0.5, // 0.05 seconds between each
        // repeat: -1,
        // yoyo: true,
    });

    });

    useGSAP();

    return (
        <div className={`hero ${theme}`} id="inicio">

            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
            >
                <source src={bg} type="video/mp4" />
            </video>
        
        <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 ref={titleRef}>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Hero;