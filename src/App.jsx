import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SocialBadget from './components/Social/SocialBadget'

function App() {

  return (
    <div className='flex justify-center align-middle m-w-screen min-h-screen text-stone-50 bg-stone-900 font-montserrat'>

      <div className='flex justify-around min-w-[90%] gap-4 my-12'>
        <Hero />
      </div>


    </div>
  )
}

export default App
