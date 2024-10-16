import './App.css'
import CardContainer from './components/Cards/CardContainer'
import ProjectCard from './components/Cards/ProjectCard'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SocialBadget from './components/Social/SocialBadget'
import TimelineContainer from './components/Timeline/TimelineContainer'

function App() {

  return (
    <div className='flex justify-center align-middle m-w-screen min-h-screen text-neutral-50 bg-neutral-900 font-montserrat'>

      <div className='flex flex-col md:flex-row justify-around w-[70%] gap-4 my-12'>
        <Hero />

        <div className='w-[100%] md:w-[50%] flex flex-col gap-4'>
          <CardContainer>

            <ProjectCard
              title={"Sistema Gestor de Recursos Humanos (Employes)"}
              tools={['react', 'nodejs', 'mysql']}
              description={`Employes es una plataforma integral diseñada para simplificar y optimizar la gestión de recursos humanos, desde el registro de empleados hasta la planificación del desarrollo profesional.`}
            />

            <ProjectCard
              title={"Sistema Gestor de Recursos Humanos (Employes)"}
              tools={['react', 'nodejs', 'mysql']}
              description={`Un proyecto realizado durante el transcurso de la carrera Tecnicatura en Desarrollo de Software, llevando a cabo el sistema desde el Analisis de Requerimientos, Desarrollo de Branding, UI/UX, y la Codificación del mismo tanto del Frontend como del Backend.`}
            />
          </CardContainer>

          <TimelineContainer />
        </div>
      </div>

    </div>
  )
}

export default App
