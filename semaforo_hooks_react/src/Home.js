import React, { useEffect, useState } from 'react';


const Home=(props)=>{
    const [color_R , setColor1] =useState("red")
    const [show_R,setShow_R]=useState(true)
    const [color_A , setColor2] =useState("yellow")
    const [color_V , setColor3] =useState("green")
    
    useEffect(()=>{
        setColor1("#de5d5b")
    },[color_R])

    useEffect(()=>{
        setColor2("#eef800")
    },[color_A])

    useEffect(()=>{
        setColor3("#00f800")
    },[color_V])


    return(
    <>
    <div id="Trafico-luces">
    <div className='container brazo_semaforo'>
        <div className='container'>
            <div className='row'>
                    <div className='col-12 col-md-12 col-sm-12 red_ligth'>
                    <i class="fa-regular fa-circle fa-3x my-1 mx-0 px-0" 
                    onclick={()=>{
                        setShow_R(show_R)
                    }}></i>
                        {color_R}
                    </div>
            </div>
                <div className='row'>
                     <div className='col-12 col-md-12 col-sm-12 amarilla_ligth'>
                     <i class="fa-regular fa-circle fa-3x my-1 mx-0 px-0"></i>
                     {color_A}
                     </div>
                </div>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-sm-12 verde_ligth'>
                        <i class="fa-regular fa-circle fa-3x my-1 mx-0 px-0"></i>
                        {color_V}
                        </div>
                    </div>
        </div>
    </div>
    </div>
    </>
   )
}


export default Home