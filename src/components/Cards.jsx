import React, { useState } from 'react'

const Cards = ({planet}) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const toggleEnlargement = () => {
        setIsEnlarged(!isEnlarged);
    }

    let formattedPopulation;
    if(planet.population > 1000000000){
        formattedPopulation = `${(planet.population / 1000000000)} bil`;
    }
    else if (planet.population > 1000000) {
        formattedPopulation = `${(planet.population / 1000000)} mil`;
    } else {
        formattedPopulation = planet.population;
    }

    return (
        <div
            className={`card ${isEnlarged ? 'enlarged' : ''}`} onClick={toggleEnlargement}
        >
            <div className="blur-bg"></div>
            <div className="bottom-section">

                <span className="title text-lg">{planet.name}</span>
                <div className="row row1">
                    <div className="item">
                        <span className="big-text">{planet.residents.length}</span>
                        <span className="regular-text">Residents</span>
                    </div>
                    <div className="item">
                        <span className="big-text">{planet.surface_water === "unknown" ? "-" : planet.surface_water}</span>
                        <span className="regular-text">Surface Water</span>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-[10px] mt-[10px]'>
                    <div className="text-[#a0def7] opacity-[0.5] text-[15px] font-semibold">
                        <span className="regular-text">Population : </span>
                        <span className="big-text">{formattedPopulation}</span>
                    </div>
                    <div className='text-[#a0def7] opacity-[0.5] text-[15px] font-semibold'>
                        <span className="regular-text">Residents : </span>
                        <span className="big-text">{planet.residents.length}</span>
                    </div>
                    <div className='text-[#a0def7] opacity-[0.5] text-[15px] font-semibold'>
                        <span className="regular-text">Terrains : </span>
                        <span className="big-text">{planet.terrain}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards