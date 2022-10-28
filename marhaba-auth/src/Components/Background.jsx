import '../index.css'
import * as react from 'react';
import background from '../assets/background.png';



export default function form() {
    return (

    <div 
    className=' lg:flex  h-full w-1/2 items-center justify-center relative' 
    style={{backgroundImage: `url(${background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center',}}>
    <p 
    className='absolute bottom-20 text-lg left-500 text-white text-center italic'>I’m the pizza protector. I will defend each slice to your door. <br /> 
    <span 
    className=' text-xs'>u want to become delivery men ?
    </span> <br /> Join The  FastestGrowing Driver Community! </p>
    </div>
)
}