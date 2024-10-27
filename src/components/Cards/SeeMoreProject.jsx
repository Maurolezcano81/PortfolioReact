import { useState } from "react";
import BackArrow from "../Svgs/BackArrow";
import ModalImgs from "./ModalImgs";


const SeeMoreProject = ({
  handleCloseSeeMore,
  project
}) => {
  const [isOpenModalImgs, setIsOpenModalImgs] = useState(false);

  const handleOpenModalImgs = () => {
    setIsOpenModalImgs(true);
  };

  const handleCloseModalImgs = () => {
    setIsOpenModalImgs(false);
  };


  console.log(project?.imgs.length)

  return (
    <div className="w-full bg-zinc-800 top-0 left-0 h-[100%] flex flex-col gap-4">
      <div className="flex w-full items-center justify-between font-bold ">
        <button onClick={() => handleCloseSeeMore()}>
          <BackArrow title="Volver" />
        </button>

        <h3 className="text-sm">{project?.title}</h3>
      </div>

      <div className="flex flex-col items-center gap-4 justify-between">

        {project?.imgs.length > 0 && (

          <div className="relative w-full group">
            <div className="overflow-hidden">
              <img
                src={project?.imgs && project?.imgs.length > 0 ? project?.imgs[0].url : ""}
                className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                alt={!project?.imgs || project?.imgs.length < 1 ? project?.title : ""}
              />
            </div>

            <div
              className="
              absolute 
              inset-0 
              flex 
              items-center 
              justify-center 
              bg-neutral-900 
              bg-opacity-0 
              group-hover:bg-opacity-60 
              transition-all 
              duration-300
              z-10
            "
            >
              <button
                className="
                opacity-0 
                group-hover:opacity-100 
                text-white 
                font-bold 
                py-2 
                px-4 
                border 
                border-white 
                rounded-lg 
                transition-opacity 
                duration-300
                z-20
              "
                onClick={() => handleOpenModalImgs()}
              >
                Ver más
              </button>
            </div>
          </div>
        )}
        <div>
          <p className="text-xs text-neutral-400">{project?.description_ampliated}</p>
        </div>
      </div>

      {isOpenModalImgs && (
        <ModalImgs
          project={project}
          handleCloseModalImg={handleCloseModalImgs} />
      )}
    </div>
  );
};

export default SeeMoreProject;
