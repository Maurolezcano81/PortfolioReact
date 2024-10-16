import { Children } from "react"


const CardContainer = ({ children }) => {


    return (


        <div className="flex flex-col gap-4 min-w-[100%] md:min-w-[100%] md:max-w-[100%]">
            <h3 className="font-bold">Proyectos</h3>
            {children}

        </div>
    )

}

export default CardContainer