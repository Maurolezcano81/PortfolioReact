
const RightArrow = ({
    width = 32,
    height = 32,
    className = "stroke-neutral-400"
}) => {

    return (
        <div className="flex gap-2 items-center justify-center "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                className={`${className} group-hover:stroke-neutral-50 transition-colors ease-linear duration-100`}
                viewBox="0 0 48 48">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
            </svg>
        </div>


    )
}

export default RightArrow;