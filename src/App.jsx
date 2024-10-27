import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ProjectsContainer from './components/Projects/ProjectsContainer'
import StudyContainer from './components/Study/StudyContainer'
import TimelineContainer from './components/Timeline/TimelineContainer'
import TimelineItem from './components/Timeline/TimelineItem'
import TechContainer from './Techs/TechContainer'
import NavProvider from './context/navContext'

function App() {
  const [coordsY, setCoordsY] = useState(0);

  const handleCoords = () => {
    setCoordsY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleCoords);

    return () => {
      window.removeEventListener('scroll', handleCoords)
    }

  }, [])



  return (
    <div className='flex justify-center items-center align-middle min-w-full min-h-screen tracking-widest text-neutral-50 bg-neutral-900 font-montserrat'>
      <NavProvider>

        <div className={` flex flex-col md:flex-row justify-around w-[90%] md:w-[70%]  ${coordsY > 0 ? 'pt-12' : 'pt-0'}`}>
          <Hero
          />

          <div className='w-[100%] md:w-[50%] flex flex-col gap-12 relative pt-12'>

            <TimelineContainer title={"Experiencia"} id={"experience"}>
              <TimelineItem
                date={"Septiembre 2023 - Actualidad"}
                title={"Sistema Gestor de Recursos Humanos (Employes)"}
                description={"Un proyecto realizado durante el transcurso de la carrera Tecnicatura en Desarrollo de Software para poder graduarme, llevando a cabo el sistema desde el Analisis de Requerimientos, Desarrollo de Branding, UI/UX, y la Codificación del mismo tanto del Frontend como del Backend."}
              />

              <TimelineItem
                date={"Marzo 2024 - Septiembre 2024"}
                title={"ComforGas (Sistema de Transporte de Gas)"}
                description={"Desarrollando ComforGas, me encargué del diseño UI/UX y del desarrollo del frontend utilizando React. Mi enfoque fue crear una interfaz intuitiva y atractiva, asegurando una experiencia de usuario fluida y eficiente. Esta experiencia me permitió fortalecer mis habilidades en desarrollo web y diseño centrado en el usuario."}
              />

            </TimelineContainer>

            <ProjectsContainer id={"projects"} />

            <TechContainer
              id={"techs"}
            />

            <TimelineContainer title={"Estudios"} id={"studies"}>
              <StudyContainer />
            </TimelineContainer>

          </div>
        </div>

      </NavProvider>

    </div>
  )
}

export default App
