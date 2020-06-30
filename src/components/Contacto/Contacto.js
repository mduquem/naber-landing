import React from 'react';
import { AnimatedTitle, Reveal, Animation } from 'react-genie';

import classes from './Contacto.module.css';

const Contacto = () => {
   return (
      <div className={classes.Contacto}>
         <h1>
            <AnimatedTitle>¿Qué esperas?</AnimatedTitle>
         </h1>
         <h4>
            Lograrás administrar tantas propiedades horizontales como desees, y siempre generando
            valor a tus clientes.
         </h4>
         <a href='https://naber.co'>
            <Reveal animation={Animation.BounceInRight}>
               {' '}
               <button>Contáctanos</button>
            </Reveal>
         </a>
      </div>
   );
};

export default Contacto;
