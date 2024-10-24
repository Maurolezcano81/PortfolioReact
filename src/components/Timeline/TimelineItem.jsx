
const TimelineItem = ({
    date,
    title,
    description
}) => {


    return (
        <li className="flex flex-col gap-2 mb-10 ms-4 bg-zinc-800 p-10">
            <div
                className="absolute z-10 w-3 h-3 rounded-full mt-1.5 -start-1.5 border  bg-violet-400 border-violet-400 dark:border-violet-400 dark:bg-violet-400">

            </div>
            <time className="mb-1 text-xs leading-none text-violet-400 dark:text-violet-400 font-bold">{date}</time>
            <h3 className="text-md font-semibold text-neutral-50 dark:text-white">{title}</h3>
            <p className="mb-4 font-normal text-neutral-400 dark:text-neutral-400 text-xs">{description}</p>

        </li>
    )
}

export default TimelineItem