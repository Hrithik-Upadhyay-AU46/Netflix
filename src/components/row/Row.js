import React, { useEffect, useState } from 'react'
import "./Row.css"
import Card from '../card/Card'
const Row = (props) => {
    const [movies, setMovies] = useState([])

    const fetchMovies = async()=>{
        const res = await fetch(props.url)
        const data = await res.json()
        console.log(data.results)
        setMovies(data.results)
    }
    useEffect(()=>{
        fetchMovies()
    },[])
  return (
    <div className='rowWrapper'>
        <h2 className='rowTitle'>{props.title}</h2>
        <div className='row'>
            {movies.map((el)=>{
               return <Card title={el.title} poster = {el.backdrop_path } id={el.id}/>
            })}
        </div>
    </div>
  )
}

export default Row