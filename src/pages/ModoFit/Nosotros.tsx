function NosotrosFit (){
    return(
        <div className="nosotros-main" id="nosotros-fit">
            
            <div className="nosotros-fit">
                
                <h2>Desafiate dia a dia</h2>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum temporibus possimus aspernatur, voluptatum beatae quidem. Libero similique fugiat illo consequuntur mollitia, minima itaque veritatis, omnis, velit dicta provident. Aut.
                </p>

            </div>

            <div className="nosotros-card__container nosotros-fit">
                
                <h2>Nuestros profes</h2>

                <div className="nosotros-card">
                    <h3>Juan Manuel Flores</h3>
                    <img src="./images/profes.png" alt="profesores" className="profes-img"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reiciendis, id maiores sunt, explicabo assumenda commodi accusamus nam dolorem omnis harum, vel obcaecati odit ex veritatis aliquam laudantium quibusdam perspiciatis?</p>
                </div>

                <div className="nosotros-card">
                    <h3>Juan Manuel Castella</h3>
                    <img src="./images/profes.png" alt="profesores" className="profes-img"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reiciendis, id maiores sunt, explicabo assumenda commodi accusamus nam dolorem omnis harum, vel obcaecati odit ex veritatis aliquam laudantium quibusdam perspiciatis?</p>
                </div>

            </div>

            <div className="nosotros-contacto nosotros-fit" id="contact-fit">
                <h2>Contacta con nosotros</h2>
                <div className="contact">
                    <h3>whatsapp</h3>
                    <h3>instagram</h3>
                </div>
                <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.4793847447702!2d-64.46505531339292!3d-31.235075220215975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7b20b798cec1%3A0xaab54d58b5f63b97!2sMODO%20FIT%20%7C%20ENTRENAMIENTOS!5e0!3m2!1ses!2sar!4v1793913335754!5m2!1ses!2sar" 
                                        loading="lazy"
                                        width={350}
                                        height={350}/>
                </div>
            </div>
        </div>
    )
}

export default NosotrosFit