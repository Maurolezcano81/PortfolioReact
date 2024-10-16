const Badget = ({ to, children }) => {
    return (
        <a
            href={to}
            target="_blank"
            className="hover:text-violet-400"
        >
            <div className="fill-neutral-50 opacity-80 hover:fill-violet-400 transform hover:scale-125 transition-transform duration-300">
                {children}
            </div>
        </a>
    );
};

export default Badget;
