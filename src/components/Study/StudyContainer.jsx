import { useEffect, useRef, useState } from "react";
import DiplomaSvg from "../Svgs/DiplomaSvg";
import GraduateSVG from "../Svgs/GraduateSVG";
import StudyTimeLine from "./StudyTimeLine";


const StudyContainer = () => {


    return (
        <div
            id="study">
            <StudyTimeLine
                date={"2020 - 2024"}
                institute={"Instituto Superior Privado Robustiano Macedo Martinez"}
                title={"Técnicatura Superior en Desarrollo de Software"}
                description={"En la carrera logre adquirir conocimientos de Desarrollo de Software, Ingenieria de Requerimientos, Logica de Programación, Base de Datos Relacionaless (MYSQL), Diagramas UML, Analisis y Diseños de Sistemas"}
            >
                <GraduateSVG />
            </StudyTimeLine>

            <StudyTimeLine
                date={"Octubre 2023 - Diciembre 2023"}
                institute={"EPICA - Argentina Programa 4.0"}
                title={"Trayecto Full Stack Developer Frontend y Backend"}
                description={"Curso de 3 meses en los que reforcé y amplie mis conocimientos de NodeJs, API RestFul, Base de Datos No Relacionales (MONGODB), tambien adquiri nuevos conocimientos de Desarrollo FrontEnd (REACT)"}
                link={'https://epica.educativa.org/validacion_certificado.cgi?id=8NduJe8mlJokN1vokdLZ'}
            >

                <DiplomaSvg />
            </StudyTimeLine>


            <StudyTimeLine
                date={"Julio 2023 - Septiembre 2023"}
                institute={"Educado en Argentina - Argentina Programa 4.0"}
                title={"Desarrollo Web Frontend"}
                description={"Curso de 3 meses en los que adquiri conocimientos en Desarrollo frontend, CSS, Diseño Responsivo, y UX/UI"}
                link={'https://drive.google.com/file/d/1_rRsP1njwa5ZYmrU2RxLOfdQ2_IyAIod/view?usp=sharing'}
            >

                <DiplomaSvg />

            </StudyTimeLine>

            <StudyTimeLine
                date={"Abril 2023 - Junio 2023"}
                institute={"UTN-FRC Extensión Virtual"}
                title={"Introducción al Desarrollo Backend con NodeJS"}
                description={"Curso de 3 meses en los que adquiri conocimientos de NodeJs, API RestFul, Base de Datos No Relacionales (MONGODB), Manejo de Sesiones, uso de Cookies, Autenticación y Autorizaciones en una API y Comunicación del Frontend Con el Backend con Javascript, incluyendo un proyecto final para aprobación del curso"}
                link={'https://uve.frc.utn.edu.ar/mod/customcert/verify_certificate.php?code=17bbIp6d1x&qrcode=1'}
            >

                <DiplomaSvg />

            </StudyTimeLine>

        </div>
    )
}

export default StudyContainer;