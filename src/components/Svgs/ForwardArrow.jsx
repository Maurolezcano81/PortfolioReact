const ForwardArrow = ({
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
                <path d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"/>

            </svg>
        </div>


    )
}

export default ForwardArrow;