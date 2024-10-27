import { useState } from "react";
import SeeMoreProject from "./SeeMoreProject";
import Github from "../Svgs/Github";
import Website from "../Svgs/Website";
import RightArrow from "../Svgs/RightArrow";

const ProjectCard = ({
    tools = [],
    title,
    description,
    links = [],
    project
}) => {
    const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false);

    const handleSeeMoreOpen = () => {
        setIsSeeMoreOpen(true);
    };

    const handleSeeMoreClose = () => {
        setIsSeeMoreOpen(false);
    };

    return (
        <div className={`min-h-44 min-w-[100%] bg-zinc-800 shadow-sm flex flex-col justify-around gap-10 py-10 px-8 rounded-sm max-h-max md:min-w-full 
            ${isSeeMoreOpen ? 'transition-none' : 'transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:z-10'}`}>
            {!isSeeMoreOpen ? (
                <>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            {project?.tools.length > 0 && project.tools.map((tool) => (
                                <p key={tool} className="text-xs uppercase font-bold text-violet-400">
                                    {tool} <span className="text-neutral-50">/</span>
                                </p>
                            ))}
                        </div>

                        <h4 className="text-md font-bold text-neutral-50">{project?.title}</h4>
                        <p className="text-xs text-neutral-400 ">{project?.description}</p>
                    </div>

                    <div className="flex items-center gap-2 group md:justify-between">

                        <div className="flex gap-2 items-center">
                            {project?.links && project.links.map((link) => (
                                link.type === 'website' ? (
                                    <div className="">
                                        <Website
                                            url={link.url}
                                        />
                                    </div>

                                ) : (
                                    <div className="">
                                        <Github
                                            url={link.url}
                                        />
                                    </div>

                                )
                            ))}
                        </div>


                        <button className="flex min-h-[100%] gap-2 items-center text-neutral-400 group-hover:text-neutral-50 transition-colors ease-linear duration-100 bg-neutral-400 bg-opacity-10  px-2 rounded-tl-md  rounded-br-xl text-sm" onClick={handleSeeMoreOpen}>
                            Ver más
                            <RightArrow />
                        </button>
                    </div>
                </>
            ) : (
                <SeeMoreProject handleCloseSeeMore={handleSeeMoreClose} project={project} />
            )}
        </div>
    );
};

export default ProjectCard;
