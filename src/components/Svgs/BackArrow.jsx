const BackArrow = ({
    width = 32,
    height = 32,
    className = "fill-violet-400"
}) => {

    return (
        <div className="flex gap-2 items-center justify-center "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                className={`${className} hover:fill-neutral-50`}
                viewBox="0 0 24 24">
                <path d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z" />

            </svg>
        </div>


    )
}

export default BackArrow;