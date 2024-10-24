import { Children } from "react"
import { useNav } from "../../hooks/UseNav";


const CardContainer = ({ children, title }) => {

    const { sectionsCoords, setSectionsCoords, coordsY } = useNav();


    return (


        <div className="flex flex-col gap-4 min-w-[100%] md:min-w-[100%] md:max-w-[100%]">

            <h2 className={`md:hidden transition-all ease-linear duration-100 font-bold ${(coordsY >= sectionsCoords.projects.top && coordsY - sectionsCoords.projects.bottom < 0) ? 'fixed p-6 top-0 left-0 bg-zinc-800 w-full z-[200] uppercase text-base shadow-md shadow-zinc-950' : 'hidden'}`}>{title}</h2>

            <h2 className={`md:block font-bold`}>{title}</h2>
            {children}

        </div>
    )

}

export default CardContainer