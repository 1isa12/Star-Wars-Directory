import React from 'react'
import Cards from './Cards';

const PlanetCards = ({planets}) => {
  return (
    <div className='grid grid-cols-5 gap-5 ml-11'>
        {planets.map((planet, index) => {
            return(
                <Cards planet={planet} key={index}/>
            );
        })}
    </div>
  )
}

export default PlanetCards