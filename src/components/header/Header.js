import { useEffect, useState } from 'react'
import './Header.css'

function Header(){
  const [movies, setMovies] = useState()

    const fetchMovies = async()=>{
        const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=2e3ff8b20381e04b28dec8ccc6a28fed')
        const data = await res.json()
        setMovies(data.results[1])
    }
  
    useEffect(()=>{
        fetchMovies()
    },[])
  return(
    <header>
        <div className="headerContent">
            <div className='headerShadow'></div>
            <div className="headerBillboard">
                <img 
                src="https://occ-0-2482-3646.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcZdjcnDphK1TiPkNt19wMxyqql90YEzja-IMmQi9UeArdtQC1CC_yNRYPmTUlb6UXo4UlbH9SAPPZWwwzDdVEwmIRwFQCVAwYzcLP2jRu_p.webp?r=e02"
                alt="billbord"
                />
            </div>
            <h4 className="headerDiscription">
            Yeon-du asks her best friend Bora to collect all the information she can about
          Baek Hyun-jin while she is away in the U.S. for heart surgery. Bora decides to
          get close to Baek's best friend, Pung Woon-ho first. However, Bora's clumsy plan
          unfolds in an unexpected direction. In 1999, a year before the new century,
          Bora, who turns seventeen, falls into the fever of first love.
            </h4>
            <div className='headerButton'>
                <button className="headerButton playButton"> Play</button>
                <button className="headerButton infoButton">More Info</button>
            </div>
        </div>
    </header>
  ) 
}

export default Header