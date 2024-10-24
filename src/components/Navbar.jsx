import { useNav } from "../hooks/UseNav";

const Navbar = () => {
    const { sectionsCoords, coordsY } = useNav();


    return (

        <nav>
            <div className="hidden md:flex w-full flex-col gap-2 lg:mt-20">
                {sectionsCoords && sectionsCoords.experience && (
                    <a
                        className={`flex gap-2 w-full items-center group transition-all duration-100 ease-in
                        ${(coordsY >= sectionsCoords.experience.top || sectionsCoords.experience.top - coordsY <= 250) && (coordsY <= sectionsCoords.experience.bottom) ? "text-neutral-50 text-xl" : "text-neutral-400 text-xs"}
                    `}
                        href="#experience"
                    >
                        <span
                            className={`hidden md:after:content-[''] md:after:inline-block md:after:h-[100%] md:after:min-w-1 md:inline transition-all duration-100 ease-in
                            ${(coordsY >= sectionsCoords.experience.top || sectionsCoords.experience.top - coordsY <= 250) && (coordsY <= sectionsCoords.experience.bottom) ? "bg-neutral-50 after:border after:border-neutral-50" : "bg-neutral-400 after:border after:border-neutral-400"}
                        `}
                        ></span>
                        <span className="text-sm">Experiencia</span>
                    </a>
                )}

                {sectionsCoords && sectionsCoords.projects && (
                    <a
                        className={`flex gap-2 w-full items-center group transition-all duration-100 ease-in
                        ${(coordsY >= sectionsCoords.projects.top || sectionsCoords.projects.top - coordsY <= 250) && (coordsY <= sectionsCoords.projects.bottom) ? "text-neutral-50 text-xl" : "text-neutral-400 text-xs"}
                    `}
                        href="#projects"
                    >
                        <span
                            className={`hidden md:after:content-[''] md:after:inline-block md:after:h-[100%] md:after:min-w-1 md:inline transition-all duration-100 ease-in
                            ${(coordsY >= sectionsCoords.projects.top || sectionsCoords.projects.top - coordsY <= 250) && (coordsY <= sectionsCoords.projects.bottom) ? "bg-neutral-50 after:border after:border-neutral-50" : "bg-neutral-400 after:border after:border-neutral-400"}
                        `}
                        ></span>
                        <span className="text-sm">Proyectos</span>
                    </a>
                )}

                {sectionsCoords && sectionsCoords.techs && (
                    <a
                        className={`flex gap-2 w-full items-center group transition-all duration-100 ease-in
                        ${(coordsY >= sectionsCoords.techs.top || sectionsCoords.techs.top - coordsY <= 250) && (coordsY <= sectionsCoords.techs.bottom) ? "text-neutral-50 text-xl" : "text-neutral-400 text-xs"}
                    `}
                        href="#techs"
                    >
                        <span
                            className={`hidden md:after:content-[''] md:after:inline-block md:after:h-[100%] md:after:min-w-1 md:inline transition-all duration-100 ease-in
                            ${(coordsY >= sectionsCoords.techs.top || sectionsCoords.techs.top - coordsY <= 250) && (coordsY <= sectionsCoords.techs.bottom) ? "bg-neutral-50 after:border after:border-neutral-50" : "bg-neutral-400 after:border after:border-neutral-400"}
                        `}
                        ></span>
                        <span className="text-sm">Tecnologias</span>
                    </a>
                )}

                {sectionsCoords && sectionsCoords.studies && (
                    <a
                        className={`flex gap-2 w-full items-center group transition-all duration-100 ease-in
                        ${(coordsY >= sectionsCoords.studies.top || sectionsCoords.studies.top - coordsY <= 250) && (coordsY <= sectionsCoords.studies.bottom) ? "text-neutral-50 text-xl" : "text-neutral-400 text-xs"}
                    `}
                        href="#studies"
                    >
                        <span
                            className={`hidden md:after:content-[''] md:after:inline-block md:after:h-[100%] md:after:min-w-1 md:inline transition-all duration-100 ease-in
                            ${(coordsY >= sectionsCoords.studies.top || sectionsCoords.studies.top - coordsY <= 250) && (coordsY <= sectionsCoords.studies.bottom) ? "bg-neutral-50 after:border after:border-neutral-50" : "bg-neutral-400 after:border after:border-neutral-400"}
                        `}
                        ></span>
                        <span className="text-sm">Estudios</span>
                    </a>
                )}


            </div>
        </nav>

    );
}

export default Navbar;
