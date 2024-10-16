import TimelineItem from "./TimelineItem";

const TimelineContainer = ({ children }) => {

    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold">Experiencia</h2>
            <ol className="relative border-s border-gray-200 dark:border-violet-400">

                <TimelineItem
                    date={"Septiembre 2023 - Actualidad"}
                    title={"Sistema Gestor de Recursos Humanos (Employes)"}
                    description={"Un proyecto realizado durante el transcurso de la carrera Tecnicatura en Desarrollo de Software para poder graduarme, llevando a cabo el sistema desde el Analisis de Requerimientos, Desarrollo de Branding, UI/UX, y la Codificación del mismo tanto del Frontend como del Backend."}
                />

                <TimelineItem
                    date={"Marzo 2024 - Septiembre 2024"}
                    title={"ComforGas (Sistema de Transporte de Gas)"}
                    description={"Desarrollando ComforGas, me encargué del diseño UI/UX y del desarrollo del frontend utilizando React. Mi enfoque fue crear una interfaz intuitiva y atractiva, asegurando una experiencia de usuario fluida y eficiente. Esta experiencia me permitió fortalecer mis habilidades en desarrollo web y diseño centrado en el usuario."}
                />

            </ol>
        </div>

    )
}

export default TimelineContainer;