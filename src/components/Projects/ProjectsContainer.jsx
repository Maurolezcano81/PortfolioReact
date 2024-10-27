import { useEffect, useRef } from "react";
import { useNav } from "../../hooks/UseNav";
import CardContainer from "../Cards/CardContainer";
import ProjectCard from "../Cards/ProjectCard";


const ProjectsContainer = ({
    id
}) => {



    const { sectionsCoords, setSectionsCoords } = useNav();
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
        <div ref={component} id={id}>
            <CardContainer title={"Proyectos"}>

                <ProjectCard

                    project={{
                        title: "Sistema Gestor de Recursos Humanos (Employes)",
                        tools: ['react', 'nodejs', 'mysql'],
                        description: `Employes es una plataforma integral diseñada para simplificar y optimizar la gestión de recursos humanos, desde el registro de empleados hasta la planificación del desarrollo profesional.`,
                        description_ampliated: 'Employes es una plataforma integral diseñada para simplificar y optimizar la gestión de recursos humanos, desde el registro de empleados hasta la planificación del desarrollo profesional, cuenta con las siguientes funcionalidades: Gestion de Empleados, Gestion de Departamentos, Solicitudes de licencia y de capacitación, Cuestionarios de Rendimiento 90° y de Satisfacción, Anexos de información del personal, Estadisticas relevantes para la toma de decisiones, y un Portal de Empleado donde los mismos pueden ver toda su información',
                        links: [
                        ],
                        imgs: [
                            {
                                title: "Employes",
                                url: "/employes/employeslogo.png",
                                type: 'img'
                            },
                            {
                                title: "Video promocional",
                                url: "/employes/employes.mp4",
                                type: 'video'
                            },
                            {
                                title: "Creación de Personal",
                                url: "/employes/createPersonal.png",
                                type: 'img'
                            },
                            {
                                title: "Gestión general de los departamentos",
                                url: "/employes/Department.png",
                                type: 'img'
                            },
                            {
                                title: "Gestión individual de los departamentos",
                                url: "/employes/departmenView.png",
                                type: 'img'
                            },
                            {
                                title: "Solicitudes de licencia",
                                url: "/employes/licensePersonal.png",
                                type: 'img'
                            },
                            {
                                title: "Respuestas de licencias",
                                url: "/employes/answerLicense.png",
                                type: 'img'
                            },
                            {
                                title: "Encuestas de rendimiento",
                                url: "/employes/createPerformance.png",
                                type: 'img'
                            },
                            {
                                title: "Supervisores de desempeño",
                                url: "/employes/answerPerformance.png",
                                type: 'img'
                            },
                        ]
                    }}

                />

                <ProjectCard
                    project={{
                        title: "Mind Metrics",
                        tools: ['html', 'css'],
                        description: `Una Landing Page para una plataforma llamada Mind Metrics que estuve desarrollando por un periodo de tiempo en el año 2022 en el espacio curricular practicas profesionalizantes 1 y la tuve que descontinuar debido a un cambio de proyecto.`,
                        description_ampliated: `
                        Mind Metrics consistia en una plataforma diseñada para evaluar la salud mental de manera precisa y confiable, utilizando escalas reconocidas como el CIE-10 y el DSM-IV. Ofreciendo recomendaciones personalizadas, seguimiento de actividades y garantizando la privacidad del usuario, además de brindar acceso a espacios de apoyo social para un bienestar integral.
                        `,
                        links: [
                            {
                            type: 'website',
                            url: 'https://mind-metrics.netlify.app/viewregistro'
                        },
                        {
                            type: 'repository',
                            url: 'https://github.com/maurolezcano81/mindmetrics'
                        },
                    ],
                        imgs: [
                            {
                                title: "Mind Metrics",
                                url: "/MindMetrics/logo.png",
                                type: 'img'
                            },
                            {
                                title: "Landing Page",
                                url: "/MindMetrics/Home.png",
                                type: 'img'
                            },
                            {
                                title: "Inicio de Sesión",
                                url: "/MindMetrics/Login.png",
                                type: 'img'
                            },
                            {
                                title: "Registro",
                                url: "/MindMetrics/register.png",
                                type: 'img'
                            },
                        ]
                    }}
                />
            </CardContainer>
        </div>

    )
}


export default ProjectsContainer;