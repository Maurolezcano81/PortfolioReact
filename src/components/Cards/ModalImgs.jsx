import { useState } from "react"
import BackArrow from "../Svgs/BackArrow"
import ForwardArrow from "../Svgs/ForwardArrow"


const ModalImgs = ({
    handleCloseModalImg,
    project
}) => {

    const [indexToView, setIndexToView] = useState(0);

    const handleChangeIndexToView = (item, index) => {
        setIndexToView(index);
    }


    const handleNextAttachment = () => {
        setIndexToView((prevState) => {

            if (prevState >= project.imgs.length) {
                return project.imgs.length
            }

            return prevState + 1
        })
    }


    const handleBackAttachment = () => {
        setIndexToView((prevState) => {

            if (prevState < 1) {
                return 1
            }

            return prevState - 1
        })
    }

    return (

        <div className="fixed flex flex-col gap-4 p-2 items-center justify-center bg-neutral-900 bg-opacity-80 top-0 left-0 w-full h-screen z-20  overflow-scroll "

            onClick={handleCloseModalImg}


        >
            <div className="relative w-full md:w-[90%] xl:p-0 xl:w-[60%]"
                onClick={(e) => e.stopPropagation()}
            >

                {project.imgs[indexToView] && project.imgs[indexToView].type === 'img' ? (
                    <img
                        className="rounded-xl aspect-video min-w-full object-cover shadow-sm shadow-violet-400 "
                        src={project.imgs[indexToView].url} alt={project.imgs[indexToView].title} />
                ) : (
                    <video
                        className=" aspect-video min-w-full object-cover rounded-xl shadow-sm shadow-violet-400 "
                        src={project.imgs[indexToView].url} alt={project.imgs[indexToView].title}
                        controls
                    />
                )}


                {indexToView >= 1 ? (
                    <button
                        className="
                absolute
                top-[50%]
                translate-y-[-50%]
                left-[0]
                p-2
                bg-zinc-800
                bg-opacity-80
                rounded-full
                ml-4
                z-60
                hover:bg-violet-400
                hover:bg-opacity-80

                group
                "
                        onClick={() => handleBackAttachment()}
                    >

                        <BackArrow
                            className="fill-neutral-50 group-hover:fill-neutral-50"

                        />

                    </button>

                ) : null}


                {indexToView + 1 < project?.imgs.length ? (
                    <button
                        className="
                absolute
                z-60
                top-[50%]
                right-[0]
                translate-y-[-50%]
                p-2
                bg-zinc-800
                bg-opacity-80
                rounded-full
                mr-4
                hover:bg-violet-400
                hover:bg-opacity-80
                group
                "
                        onClick={() => handleNextAttachment()}
                    >

                        <ForwardArrow
                            className="fill-neutral-50 group-hover:fill-neutral-50"
                        />

                    </button>
                ) : null}


                <button
                    className="absolute top-0 right-0 mr-6 mt-2 text-neutral-50 bg-zinc-800 py-2 px-4 rounded-xl bg-opacity-80 hover:bg-opacity-100 hover:bg-neutral-50 hover:text-zinc-800"
                    onClick={() => handleCloseModalImg()}
                >
                    Volver
                </button>

            </div>

            <div
                className="flex flex-col gap-4"
            >

                <div className="w-full text-center">
                    <h4 className="font-bold uppercase sm:text-sm">{project.imgs[indexToView].title}</h4>
                </div>


                <div className="flex w-full justify-center items-center flex-wrap px-4 gap-4"
                    onClick={(e) => e.stopPropagation()}

                >
                    {project && project?.imgs && project.imgs.map((thumbnail, index) => (

                        <div className="w-20 h-20" key={index}>

                            {thumbnail.type === 'video' ? (
                                <video onClick={() => handleChangeIndexToView(thumbnail, index)} className="h-20 w-20 object-cover cursor-pointer rounded-xl shadow-sm shadow-violet-400" src={thumbnail.url} />
                            ) : (
                                <img onClick={() => handleChangeIndexToView(thumbnail, index)} className="h-20 w-20 object-cover  cursor-pointer rounded-xl shadow-sm shadow-violet-400" src={thumbnail.url} alt={thumbnail.title} />
                            )}

                        </div>


                    ))}
                </div>


            </div>
        </div>
    )
}


export default ModalImgs