




const ExternalLink = ({
    width = 32,
    height = 32,
    className = "fill-violet-400"
}) => {

    return (
        <div className="flex flex-col items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                className={className}
                viewBox="0 0 24 24">
                <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6zM13 3v2h4.586l-7.793 7.793l1.414 1.414L19 6.414V11h2V3z" />
            </svg>
        </div>


    )
}

export default ExternalLink;