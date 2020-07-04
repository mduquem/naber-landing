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
         <a href='https://wa.me/573138392143?text=Hola%20Naber%2C%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informacion%20sobre%20su%20empresa%20y%20los%20beneficios%20que%20esta%20brinda'>
            <Reveal animation={Animation.BounceInRight}>
               {' '}
               <button>Contáctanos</button>
            </Reveal>
         </a>
      </div>
   );
};

export default Contacto;
