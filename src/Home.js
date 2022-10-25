import { useState } from 'react'
import { data } from './data'
import './App.css'

import arrowOne from './arrow.png'
import arrowTwo from './iarrow.png'

function Home() {
    const [picture, setPicture] = useState(0);
    const {photo} = data[picture]
    

    const previousPicture = () => {
        setPicture ((picture => {
            picture --;
            if (picture < 0) {
                return data.length -1;
            }
            return picture
        }))
    }

    const nextPicture = () => {
       setPicture ((picture => {
        picture++;
        if (picture > data.length-1) {
         picture=0
        }
        return picture
       }))
    }


    return(
    <div>
    <div className='content'>
    <div className='head'>
       <h1 className='header'>ВОЛШЕБСТВО ФОТОГРАФИИ ...</h1>
    </div>
    <div>
       <img className='photografer' src={photo} alt="photografer"/>
    </div>
    <div className='btn'>
       <button className='left' onClick={previousPicture}><img src={arrowOne} alt="left"/></button>
       <button className='right' onClick={nextPicture}><img src={arrowTwo} alt="right"/></button>
    </div>
    <div className='head_par'>
       <p className='par_one'>В людях...</p>
       <p className='par'>В их чувствах, эмоциях, взглядах, улыбках, слезах, объятиях и переживаниях, в моменте их грусти, радости, счастья и любви.
       </p>
    </div>
    </div>
        
    </div>
    )
}
export default Home;