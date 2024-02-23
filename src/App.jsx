import React from 'react'
import Planets from './components/Planets'

const App = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center bg-[url("/assets/starwars-bg3.jpg")] p-6'>
        <main 
            className="w-full h-full border-white border-2 text-white p-2"
        >
          <Planets />
        </main>
    </div>
  )
}

export default App