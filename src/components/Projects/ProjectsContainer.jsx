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
                        links: [
                            {
                                type: 'website',
                                url: 'url'
                            },
                            {
                                type: 'repository',
                                url: 'url'
                            }

                        ],
                        imgs: [{
                            title: "Landing Page",
                            url: "/public/employes/screen1.png",
                            type: 'img'
                        },
                        {
                            title: "Video promocional",
                            url: "/public/employes/employes.mp4",
                            type: 'video'
                        },
                        {
                            title: "Landing Page",
                            url: "/public/employes/1.png",
                            type: 'img'
                        },
                        {
                            title: "Landing Page",
                            url: "/public/employes/2.png",
                            type: 'img'
                        },
                        {
                            title: "Landing Page",
                            url: "/public/employes/3.png",
                            type: 'img'
                        },
                        {
                            title: "Landing Page",
                            url: "/public/employes/4.png",
                            type: 'img'
                        },
                        ]
                    }}

                />

                <ProjectCard
                    project={{
                        title: "Sistema Gestor de Recursos Humanos (Employes)",
                        tools: ['react', 'nodejs', 'mysql'],
                        description: `Employes es una plataforma integral diseñada para simplificar y optimizar la gestión de recursos humanos, desde el registro de empleados hasta la planificación del desarrollo profesional.`,
                        links: [],
                        imgs: []
                    }}
                />
            </CardContainer>
        </div>

    )
}


export default ProjectsContainer;