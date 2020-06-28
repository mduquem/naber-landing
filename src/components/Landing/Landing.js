import React from 'react';
import { Reveal, Animation } from 'react-genie';

import classes from './Landing.module.css';

const Landing = () => {
   return (
      <div className={classes.Landing}>
         <div className={classes.Lead}>
            <h1>Administra más con menos</h1>
            <h2>
               <Reveal>
                  Facilitamos la administración de propiedades horizontales en términos de recaudo
                  de cartera, manejo de la información y toma de decisiones.
               </Reveal>
            </h2>

            <a href='mailto:aftermathventures.col@gmail.com'>
               <Reveal animation={Animation.BounceInLeft}>
                  <button>Contáctanos</button>
               </Reveal>
            </a>
         </div>
      </div>
   );
};

export default Landing;
