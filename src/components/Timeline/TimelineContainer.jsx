import { useEffect, useRef, useState } from "react";
import { useNav } from "../../hooks/UseNav";
import TimelineItem from "./TimelineItem";

const TimelineContainer = ({ children, title, id }) => {

    const { sectionsCoords, setSectionsCoords, coordsY } = useNav();
    const component = useRef(null);

    const updatePosition = () => {
        if (component.current) {
            const rect = component.current.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const bottom = rect.bottom + window.scrollY;

            setSectionsCoords((prev) => ({
                ...prev,
                [id]: {
                    top: top,
                    bottom: bottom
                }
            }));
        }
    };

    console.log(sectionsCoords[id]);

    useEffect(() => {
        updatePosition();

        window.addEventListener("scroll", updatePosition);

        return () => {
            window.removeEventListener("scroll", updatePosition);
        };
    }, [setSectionsCoords, id]);



    return (
        <div ref={component} className=" flex flex-col gap-4 pb-4" id={id}>

            
            <h2 className={`md:hidden transition-all ease-linear duration-100 font-bold ${(coordsY >= sectionsCoords[id].top && coordsY <= sectionsCoords[id].bottom) ? 'fixed p-6 top-0 left-0 bg-zinc-800 w-full z-[200] uppercase text-base shadow-md shadow-zinc-950' : 'hidden'}`}>{title}</h2>

            <h2 className={`md:block font-bold`}>{title}</h2>

            <ol className=" border-s border-gray-200 dark:border-violet-400 z-90">
                {children}
            </ol>
        </div>
    );
};

export default TimelineContainer;
