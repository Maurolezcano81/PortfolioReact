

const Download = ({
    width = 32,
    height = 32,
    className = "fill-neutral-400",
    url = "#"
}) => {

    return (
        <a href={url} target="_blank" className="flex flex-col items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                className={` ${className} group-hover:fill-neutral-50 transition-colors ease-linear duration-100`}
                viewBox="0 0 24 24">


                <path d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z" />


            </svg>


        </a>


    )
}

export default Download;