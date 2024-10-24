import { useEffect, useRef } from "react";
import Css from "../components/Svgs/Css";
import Express from "../components/Svgs/Express";
import Javascript from "../components/Svgs/Javascript";
import MongoDB from "../components/Svgs/MongoDB";
import MySql from "../components/Svgs/MySql";
import NodeJs from "../components/Svgs/NodeJs";
import Php from "../components/Svgs/Php";
import React from "../components/Svgs/React";
import Taildwind from "../components/Svgs/Taildwind";
import { useNav } from "../hooks/UseNav";

const TechContainer = ({
    id
}) => {

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

    useEffect(() => {
        updatePosition();

        window.addEventListener("scroll", updatePosition);

        return () => {
            window.removeEventListener("scroll", updatePosition);
        };
    }, [setSectionsCoords, id]);

    return (
        <div ref={component} id={id} className="flex flex-col gap-4 flex-wrap">
            <h2 className={`md:hidden transition-all ease-linear duration-100 font-bold ${(coordsY >= sectionsCoords.techs.top && coordsY <= sectionsCoords.techs.bottom) ? 'fixed p-6 top-0 left-0 bg-zinc-800 w-full z-[200] uppercase text-base shadow-md shadow-zinc-950' : 'hidden'}`}>{"Tecnologias"}</h2>

            <h2 className={`md:block font-bold`}>{"Tecnologias"}</h2>

            <div className="uppercase flex flex-col gap-10 bg-zinc-800 p-4">

                <div className="">
                    <p className="text-center font-semibold w-full my-4">Frontend</p>
                    <div className="flex gap-4 justify-center flex-wrap ">
                        <React />
                        <Taildwind />
                        <Css />
                        <Javascript />
                    </div>
                </div>

                <div>
                    <p className="text-center font-semibold w-full mb-4">Backend</p>
                    <div className="flex gap-8 justify-center flex-wrap">
                        <MySql />
                        <MongoDB />
                        <NodeJs />
                        <Express />
                        <Php />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TechContainer;