import SocialBadget from "./Social/SocialBadget";

const Hero = () => {

    return (
        <div className="flex items-center md:items-start w-96 flex-col gap-10 flex-grow-1 text-left min-w-[100%] md:min-w-[20%]">
            <div>
                <h1 className="text-4xl font-bold ">Mauro Lezcano</h1>
                <p className="text-center md:text-left text-sm text-violet-400 font-bold">Desarrollador FullStack</p>
            </div>

            <p className="text-neutral-400 text-wrap text- font-normal text-center md:text-left text-sm">Soy un apasionado desarrollador FullStack con residencia en Formosa, Argentina. Mi compromiso con la excelencia tecnológica se traduce en la creación de soluciones informáticas que no solo satisfacen las necesidades, sino que también generan un impacto positivo en la marca. Estoy listo para ayudarte a expandir tu presencia en el mercado tecnológico.</p>

            <SocialBadget />
        </div>
    )
}

export default Hero;