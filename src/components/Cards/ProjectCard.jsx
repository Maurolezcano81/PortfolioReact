const ProjectCard = ({
    tools = [],
    title,
    description,
    links = []
}) => {
    return (
        <div className="
            group
            min-h-44 
            min-w-[100%] 
            bg-zinc-800 shadow-sm
            flex
            flex-col
            justify-around
            gap-10
            py-4
            px-8
            rounded-sm
            transition-all 
            duration-300 
            ease-in-out
            hover:scale-105
            hover:shadow-lg
            hover:z-10
        ">
            <div className="
                flex
                flex-col
                gap-2
                transition-all
                duration-300
                ease-in-out
            ">
                <div className="flex gap-2">
                    {tools.length > 0 && tools.map((tool) => (
                        <p key={tool} className="text-sm uppercase font-bold text-violet-400">
                            {tool} <span className="text-neutral-50">/</span>
                        </p>
                    ))}
                </div>

                <h4 className="text-md font-bold text-neutral-50">{title}</h4>

                <p className="text-xs text-neutral-400">{description}</p>
            </div>

            <div className="
                flex
                flex-col
                gap-2
                group-hover:blur-sm
                transition-all
                duration-300
                ease-in-out
            ">
                {links.length > 0 && links.map((link) => (
                    <p key={link.name} className="text-sm text-neutral-400">{link.name}</p>
                ))}
            </div>
            
        </div>
    );
}

export default ProjectCard;
