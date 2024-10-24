import { useEffect, useRef, useState } from "react";
import DiplomaSvg from "../Svgs/DiplomaSvg";
import GraduateSVG from "../Svgs/GraduateSVG";
import StudyTimeLine from "./StudyTimeLine";
import { useNav } from "../../hooks/UseNav";


const StudyContainer = () => {


    return (
        <div
            id="study">
            <StudyTimeLine
                date={"2020 - 2024"}
                institute={"Instituto Superior Privado Robustiano Macedo Martinez"}
                title={"Técnicatura Superior en Desarrollo de Software"}
                description={"Desarrollando ComforGas, me encargué del diseño UI/UX y del desarrollo del frontend utilizando React. Mi enfoque fue crear una interfaz intuitiva y atractiva, asegurando una experiencia de usuario fluida y eficiente. Esta experiencia me permitió fortalecer mis habilidades en desarrollo web y diseño centrado en el usuario."}
            >
                <GraduateSVG />
            </StudyTimeLine>

            <StudyTimeLine
                date={"Abril 2023 - Junio 2023"}
                institute={"UTN-FRC Extensión Virtual"}
                title={"Introducción al Desarrollo Backend con NodeJS"}
                description={"Completar..."}
            >

                <DiplomaSvg />

            </StudyTimeLine>

            <StudyTimeLine
                date={"Octubre 2023 - Diciembre 2023"}
                institute={"EPICA - Argentina Programa 4.0"}
                title={"Trayecto Full Stack Developer Frontend y Backend"}
                description={"Completar..."}
                link={'asd'}
            >

                <DiplomaSvg />
            </StudyTimeLine>


        </div>
    )
}

export default StudyContainer;