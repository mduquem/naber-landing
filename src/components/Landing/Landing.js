import React from 'react';
import { Reveal, Animation } from 'react-genie';

import classes from './Landing.module.css';

import people from '../../assets/img/people.png';

const Landing = () => {
   return (
      <div className='row  no-gutters  d-flex flex-column justify-content-center align-items-center'>
         <div className='col-md-8'>
            <div
               style={{ backgroundColor: 'transparent ', border: 'none' }}
               className='card m-5  d-flex flex-column justify-content-center align-items-center flex-lg-row'
            >
               <img style={{ maxWidth: '500px' }} src={people} alt='' className='card-img' />
               <div style={{ borderColor: 'none', boxShadow: 'none' }} className='card-body'>
                  <div>
                     <h1>Administra más, con menos</h1>

                     <h2>
                        <Reveal>
                           Reduce el tiempo de trabajo y agrega valor a los residentes de la
                           propiedad con la app de <strong>Naber</strong>
                        </Reveal>
                     </h2>
                  </div>
                  <a href='https://naber.co'>
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
