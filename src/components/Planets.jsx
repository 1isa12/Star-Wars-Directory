import React, {useState, useEffect} from 'react'
import PlanetCards from './PlanetCards';

const Planets = () => {
    const [planetData, setPlanetData] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    // const [prevPage, setPrePage] = useState();
    // const [nextPage, setNextPage] = useState();

    const [pcount, setPcount] = useState();

    // Fetch data when the component mounts
    useEffect(()=>{
        fetchPlanets();
    },[currPage]);

    const fetchPlanets = async() => {
        try{
            const response = await fetch(`https://swapi.dev/api/planets/?page=${currPage}&format=json`);
            const data = await response.json();
            console.log(data.results);
            setPlanetData(data.results);
            setPcount(data.count);
        } catch(error){
            console.log("error fetching planets : ", error);
        }
    }

    const prevPage = () =>{
        setCurrPage(currPage - 1);
    }

    const nextPage = () =>{
        setCurrPage(currPage + 1);
    }

  return (
    <div>
        <div className='planet-data'>
            <PlanetCards planets={planetData} />
        </div>
        <div className='Page-slider flex gap-10 mt-[10px]'>
            <button className='prevPage' disabled={currPage === 1} onClick={prevPage}>prev</button>
            <button className='nextPage' onClick={nextPage}>next</button>
        </div>
    </div>
  )
}

export default Planets;