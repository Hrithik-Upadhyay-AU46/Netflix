import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()

  const [scrl,scrlhandle] = useState(false)

  const scrollHandle=()=>{ 
    if(window.scrollY > 50){
      scrlhandle(true)
    }
    else{
      scrlhandle(false)
    }
  }
  const back= async()=>{
    // let bck = await fetch('http://localhost:8888/id/delete',{
    //   method:"DELETE"
    // })
    //  let bckData = await bck.json()
    //  if(bckData.msg === 'deleted'){
      navigate('/')
     }

  useEffect(()=>{
    window.addEventListener('scroll',scrollHandle)
    return()=>{
      window.removeEventListener('scroll',scrollHandle)
    }

  },)

 
    return (<nav style={{
      background: scrl? '#141414' : 'transparent'
    }}>
        <section>
            <div className='nav_left'>
                <img 
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
                alt='logo'/>
                <div className='nav_links'>
                  <Link to='/home'>Home</Link>
                                      
                </div>
            </div>
           <button className='logout' onClick={back}>Log out</button>
            
        </section>
    </nav>
    )
}

export default Nav