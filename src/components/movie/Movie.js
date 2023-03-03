import React, { useEffect, useState } from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'

const Movie = () => {
  
  const id = useParams()
  const demo = {
    title:"Demo",
    release_date:"Demo",
    overview:"Demo",
    genres:[{
        name:"Demo"
    }],
    backdrop_path:'https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg'


  }
  let [mvData , setMvData] = useState(demo)
  const [vdoUrl , setVdoUrl] = useState('nPmZ2bN0dhE')
  const fetchMovie = async()=>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=2e3ff8b20381e04b28dec8ccc6a28fed&language=en-US`)
    const data = await res.json()
    return data
  }
  const fetchVideo = async ()=>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id.id}/videos?api_key=2e3ff8b20381e04b28dec8ccc6a28fed&language=en-US`)
    const data = await res.json()
      return data 
    
  }
 
 useEffect(()=>{
    fetchMovie().then((data)=> setMvData(data))
 },[])
 useEffect(()=>{
  fetchVideo().then((data)=> setVdoUrl(data.results[4].key))
},[])
const [player , setPlayer] = useState(false)
const [play , setplay] = useState('Play')
const handleClick=()=>{
  setPlayer(!player)
  player ? setplay("Play") : setplay("Pause")
}

const youtube = `https://www.youtube.com/embed/`
const ytd =`?autoplay=1&origin=http://example.com`
  return (
        <div className='mvWrapper'>
            <img className='mvImg' src={`https://image.tmdb.org/t/p/w500${mvData.backdrop_path}`} alt='poster'/>
            {
              player ? 
              <iframe width='60%' height="60%"
              src={`${youtube}${vdoUrl}${ytd}`} 
              // allow='accelerometer; autoplay;'
              autoplay={1}
              mute={1}
              controls
              allowFullScreen
              frameBorder='0'
              >
              </iframe>
            
              :
              null
            }
           
            <div className='mvDetails'>
                <div className='mvInner'>
                    <h1>{mvData.title}</h1>
                    <h4>
                        <span>{mvData.release_date}</span>
                        <span>{mvData.genres[0].name}</span>
                        
                    </h4>
                    <p>{mvData.overview}</p>
                    <div className='mvButton'>
                <button className="mvButton playMv" onClick={handleClick}>{play}</button>
                <button className="mvButton infoMv">+ MY LIST</button>
            </div>
                </div>
            </div>
            
        </div>
        
   
  )
}

export default Movie