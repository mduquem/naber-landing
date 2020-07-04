import React from 'react';
import { Reveal, Animation } from 'react-genie';

import people from '../../assets/img/people.png';

const Landing = () => {
   return (
      <div className='row  no-gutters  d-flex flex-column justify-content-center align-items-center'>
         <div className='col-md-8'>
            <div
               style={{ backgroundColor: 'transparent ', border: 'none' }}
               className='card m-5  d-flex flex-column justify-content-center align-items-center flex-lg-row'
            >
               <img style={{ maxWidth: '300px' }} src={people} alt='' className='card-img' />
               <div style={{ borderColor: 'none', boxShadow: 'none' }} className='card-body'>
                  <div>
                     <h1>¡Administra más, con menos!</h1>

                     <h2>
                        <Reveal>
                           Reduce el tiempo de trabajo y agrega valor a los residentes de la
                           propiedad con la app de <strong>Naber</strong>
                        </Reveal>
                     </h2>
                  </div>
                  <a href='https://wa.me/573138392143?text=Hola%20Naber%2C%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informacion%20sobre%20su%20empresa%20y%20los%20beneficios%20que%20esta%20brinda'>
                     <Reveal animation={Animation.BounceInLeft}>
                        <button className='button'>Contáctanos</button>
                     </Reveal>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Landing;
