import React from 'react'
import './content.css'
import Row from '../row/Row'
import Constant from '../contant/Constant'
import Footer from '../footer/Footer'
function Content(){
    return(
        <div className='contentWrapper'>
            {Constant.map((el)=>{
               return <Row title = {el.title} url = {el.url}/>
            })}
            <Footer/>
        </div>
    )
}

export default Content