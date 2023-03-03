import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
const Card = (props) => {
  const naviagte = useNavigate()
   const mvs = ()=>{
    naviagte(`/movie/${props.id}`)
   }
    const imageUrl = `https://image.tmdb.org/t/p/w500${props.poster}`
  return (
    <div className='card' onClick={mvs}>
      <div className='cardId'>{props.id}</div>
        <img className='cardPoster' src={imageUrl} alt='poster'/>
        <div className='details'>{props.title}</div>
    </div>
  )
}

export default Card