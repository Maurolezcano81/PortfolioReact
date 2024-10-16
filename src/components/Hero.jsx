import SocialBadget from "./Social/SocialBadget";

const Hero = () =>{

    return (
        <div className="flex w-96 flex-col gap-3 flex-grow-1 text-left">
            <h1 className="text-4xl font-bold ">Mauro Lezcano</h1>
            <p className="text-sm text-stone-400 font-light">Desarrollador FullStack</p>
            <p className="text-stone-200 font-normal text-sm">Soy un apasionado desarrollador FullStack con residencia en Formosa, Argentina. Mi compromiso con la excelencia tecnológica se traduce en la creación de soluciones informáticas que no solo satisfacen las necesidades, sino que también generan un impacto positivo en la marca. Estoy listo para ayudarte a expandir tu presencia en el mercado tecnológico.</p>

            <SocialBadget />
        </div>
    )
}

export default Hero;