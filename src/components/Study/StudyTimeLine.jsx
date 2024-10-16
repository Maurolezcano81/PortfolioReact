
const StudyTimeLine = ({
    children,
    date,
    institute,
    title,
    description,
}) => {


    return (
        <li className="flex flex-col gap-2 mb-10 ms-4 bg-zinc-800 p-4">
            <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white dark:border-violet-400 dark:bg-violet-400">

            </div>

            <div className="flex gap-2 items-center">
                {children}
                <time className="mb-1 text-xs leading-none text-violet-400 dark:text-violet-400 font-bold">{date}</time>
            </div>


            <h3 className="text-md font-bold text-neutral-400 dark:text-white">{institute}</h3>

            <p className="text-neutral-400 dark:text-neutral-50 font-semibold text-xs">{title}</p>

            <p className="mb-4 font-normal text-neutral-400 dark:text-neutral-400 text-xs">{description}</p>

            { /* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-900 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-100 hover:text-violet-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-zinc-100 focus:text-violet-400 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700 dark:focus:ring-zinc-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
                </a>
                */}
        </li>
    )
}

export default StudyTimeLine