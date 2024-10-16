import { Children } from "react"


const CardContainer = ({ children, title }) => {


    return (


        <div className="flex flex-col gap-4 min-w-[100%] md:min-w-[100%] md:max-w-[100%]">
            <h3 className="font-bold">{title}</h3>
            {children}

        </div>
    )

}

export default CardContainer