import React ,{ useState , useEffect }from 'react'
import axios from './axios';
function Row( {title}) {

    const [movie, setMovies] = useState([]);

    useEffect(()=>{

    },[]);

    return (
        <div>
           <h1> {title} </h1> 
        </div>
    )
}

export default Row;
