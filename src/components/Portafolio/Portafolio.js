import React from 'react';
import { Reveal } from 'react-genie';

import logo from '../../assets/img/logo.png';

import classes from './Portafolio.module.css';

const Portafolio = () => {
   return (
      <div className={classes.Portafolio}>
         <div className={classes.Title}>
            <h2>¿Quiénes somos?</h2>
            <img src={logo} alt='Logo' />
         </div>
         <ul className={classes.List}>
            <li>
               <Reveal>
                  <h3>
                     Somos una empresa tecnológica enfocada en facilitar la vida en las propiedades
                     horizontales para los administradores, propietarios, arrendatarios, habitantes
                     y lobby por medio de una APP (Web y Móvil).
                  </h3>
               </Reveal>
            </li>
         </ul>
      </div>
   );
};

export default Portafolio;
