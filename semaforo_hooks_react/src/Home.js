import React from 'react';

const Home=()=>{
   return(
    <>
    <div id="Trafico-luces">
    <div className='container brazo_semaforo'>
        <div className='container'>
            <div className='row'>
                    <div className='col-12 col-md-12 col-sm-12 red_ligth'>
                    <i class="fa-regular fa-circle fa-3x my-1 mx-0 px-0"></i></div>
            </div>
                <div className='row'>
                     <div className='col-12 col-md-12 col-sm-12 amarilla_ligth'>
                     <i class="fa-regular fa-circle fa-3x my-1 mx-0 px-0"></i></div>
                </div>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-sm-12 verde_ligth'>
                        <i class="fa-regular fa-circle fa-3x my-1 mx-0 px-0"></i></div>
                    </div>
        </div>
    </div>
    </div>
    </>
   )
}


export default Home