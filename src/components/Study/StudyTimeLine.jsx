import Validate from "../Svgs/Validate"

const StudyTimeLine = ({
    children,
    date,
    institute,
    title,
    description,
    link = ""
}) => {


    return (
        <li className="flex flex-col gap-2 mb-10 ms-4 bg-zinc-800 p-4">
            <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-violet-400 bg-violet-400 dark:border-violet-400 dark:bg-violet-400">

            </div>

            <div className="flex gap-2 items-center">
                {children}
                <time className="mb-1 text-xs leading-none text-violet-400 dark:text-violet-400 font-bold">{date}</time>
            </div>


            <h3 className="text-md font-bold text-neutral-50 dark:text-white">{institute}</h3>

            <p className="text-neutral-50 dark:text-neutral-50 font-semibold text-xs">{title}</p>

            <p className="mb-4 font-normal text-neutral-400 dark:text-neutral-400 text-xs">{description}</p>

            <div className="flex items-center gap-2 group">

                {link.length > 0 && (

                    <div className="">
                        <Validate
                            url={link}
                        />
                    </div>

                )}


            </div>
        </li>
    )
}

export default StudyTimeLine