import React, {useState, useEffect} from 'react'

const Planets = () => {
    const [planetData, setPlanetData] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [prevPage, setPrePage] = useState();

    // Fetch data when the component mounts
    useEffect(()=>{
        fetchPlanets();
    },[currPage]);

    const fetchPlanets = async() => {
        try{
            const response = await fetch(`https://swapi.dev/api/planets/?page=${currPage}&format=json`);
            const data = await response.json();
            console.log(data);
        } catch(error){
            console.log("error fetching planets : ", error);
        }
    }

    const changePage = () => {
    }

  return (
    <div>
        <div className='Page-slider'>
            <button className='prevPage' disabled={currPage === 1} onClick={}>prev</button>
            <button className='nextPage' onClick={(e) => changePage}>next</button>
        </div>
    </div>
  )
}

export default Planets;