import { useNav } from "../hooks/UseNav";
import Navbar from "./Navbar";
import Social from "./Social/Social";

const Hero = () => {

    const { coordsY } = useNav();

    return (
        <div className="w-full flex items-center md:items-start flex-col flex-grow text-left md:max-w-[45%] lg:max-w-[30%]">
            <div className={`md:h-[90vh] flex gap-10 flex-col justify-between sticky sm:top-0 ${coordsY > 0 ? 'py-6' : 'top-0 py-12'}`}>
                <div className="flex flex-col gap-4 lg:gap-8">
                    <div className="">
                        <h1 className="text-center md:text-left text-3xl md:text-4xl font-bold ">Mauro Lezcano</h1>
                        <p className="text-center md:text-left text-xl md:text-sm text-violet-400 font-bold">Desarrollador FullStack</p>
                    </div>

                    <p className="text-neutral-400 tracking-wider text-center md:text-left text-xs lg:text-sm w-full md:w-[90%]">
                        Soy <span className="underline text-neutral-50">desarrollador Fullstack</span> enfocado en el <span className="underline text-neutral-50">Frontend</span> con <span className="underline text-neutral-50">React</span>. Me gusta crear aplicaciones rápidas, intuitivas y atractivas, combinando <span className="underline text-neutral-50">tecnología y diseño</span> para ofrecer una <span className="underline text-neutral-50">gran experiencia al usuario</span>. He trabajado en equipo y solo, siempre <span className="underline text-neutral-50">comprometido</span> y <span className="underline text-neutral-50">aprendiendo</span> de cada <span className="underline text-neutral-50">desafío</span>.
                    </p>
                    <Navbar

                    />

                </div>


                <Social />

            </div>
        </div>
    )
}

export default Hero;