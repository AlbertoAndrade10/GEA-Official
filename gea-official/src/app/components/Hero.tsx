import TextDescription from "./TextDescription"
import Video from "./Video"

function Hero() {

    return (
        <div className="relative z-0 -mt-22 mb-20">
            <section className="relative z-0">
                <Video />
            </section>

            <section>
                <TextDescription />
            </section>
        </div>
    )
}

export default Hero