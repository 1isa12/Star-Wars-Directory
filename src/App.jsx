import React from 'react'
import Planets from './components/Planets'

const App = () => {
  return (
    <div className='w-full h-screen bg-cover bg-bottom bg-[url("/assets/starwars-bg4.jpg")] px-6'>
        <main 
            className="w-full h-full text-white p-2"
        >
          <header className='p-0 w-full flex items-center text-center mb-[30px]'>
            <span className='heading font-bold text-[8vh] text-[#6db4d0] opacity-[0.9] rounded-xl border-1 backdrop-blur-sm w-full  '>
              Star Wars Galaxy
            </span>
          </header>

          <Planets />
        </main>
    </div>
  )
}

export default App