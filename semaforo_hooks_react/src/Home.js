import React, { useState } from 'react';

const Home=()=>{
    const [color, setColor] =useState(" ")
    return(
    <>
    <div id="Trafico_luces">
    <div className='brazo_semaforo'>
        <div className='semaforo'>
            <div className='row'>
                    <div className='col-12 col-md-12 col-sm-12 red_ligth'>
                      <button className={'btn btn-outline-danger'+(color === 'red'? "btn btn-outline-light": null)} onClick={()=>setColor('red')}>                        
                        <i className="fa-solid fa-circle mx-2" ></i></button>
                       
                    </div>
                     <div className='col-12 col-md-12 col-sm-12 amarilla_ligth'>
                     <button className={'btn btn-outline-yellow '+(color === 'yellow'? "btn btn-outline-light": null)} onClick={()=>setColor('yellow')}>
                     <i className="fa-regular fa-circle mx-2"></i></button>
                        
                     </div>
                    <div className='col-12 col-md-12 col-sm-12 verde_ligth'>
                    <button className={'btn btn-outline-success'+(color === 'green'? "btn btn-outline-light": null)} onClick={()=>setColor('green')}>
                    <i className="fa-regular fa-circle mx-2"></i></button>
                    </div>
            </div>
        </div>
    </div>
    </div>
    </>
   )

    }

export default Home
