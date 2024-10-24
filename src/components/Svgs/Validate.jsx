const Validate = ({
    width = 32,
    height = 32,
    className = "stroke-neutral-400",
    url = "#"

}) => {

    return (
        <a href={url} target="_blank" className="flex flex-col items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                className={` ${className} group-hover:stroke-neutral-50 transition-colors ease-linear duration-100`}
                viewBox="0 0 24 24">
                <path fill="none" strokeWidth="2" d="M20 15c-1 1 1.25 3.75 0 5s-4-1-5 0s-1.5 3-3 3s-2-2-3-3s-3.75 1.25-5 0s1-4 0-5s-3-1.5-3-3s2-2 3-3s-1.25-3.75 0-5s4 1 5 0s1.5-3 3-3s2 2 3 3s3.75-1.25 5 0s-1 4 0 5s3 1.5 3 3s-2 2-3 3ZM7 12l3 3l7-7" /> 
                </svg>
        </a>


    )
}

export default Validate;