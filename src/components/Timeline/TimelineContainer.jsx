import TimelineItem from "./TimelineItem";

const TimelineContainer = ({ children, title }) => {

    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold">{title}</h2>
            <ol className="relative border-s border-gray-200 dark:border-violet-400">

                {children}

            </ol>
        </div>

    )
}

export default TimelineContainer;