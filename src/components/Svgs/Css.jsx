




const Css = ({
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
                <path  d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438zm17.09 4.413L5.41 4.41l.213 2.622l10.125.002l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523l-2.91.804l-2.956-.81l-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53z" />

            </svg>
            <span className="text-sm">CSS3</span>

        </div>


    )
}

export default Css;