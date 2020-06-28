import React from 'react';
import { Reveal } from 'react-genie';

import classes from './Servicios.module.css';
import iconoUno from '../../assets/svg/icon1.svg';
import iconoDos from '../../assets/svg/icon2.svg';
import iconoTres from '../../assets/svg/icon3.svg';

const Servicios = () => {
   return (
      <div className={classes.Servicios}>
         <Reveal>
            <div className={classes.Servicio}>
               <h1>
                  <span>¿</span>De que forma agregamos valor<span>?</span>
               </h1>

               <h2>
                  Los administradores de propiedad horizontal tendrán una plataforma Web en la que
                  se puede manejar la información de la propiedad eficientemente. De igual manera se
                  habilita un chat para que estos separen su vida persona de la laboral.
               </h2>

               <div className={classes.Icono}>
                  <img
                     src={iconoUno}
                     alt='Empieza desde cero con tu emprendimiento o idea de negocio'
                  />
               </div>
            </div>
         </Reveal>

         <Reveal>
            <div className={classes.Servicio}>
               <h1>
                  1<span>/</span> Conecta con tus clientes<span>.</span>
               </h1>

               <h2>
                  Tu marca es el conjunto de sensaciones que despiertas en{' '}
                  <strong>tu cliente. </strong>
                  No por nada es una de las características más importantes que tu negocio debe
                  desarrollar.
               </h2>
               <div className={classes.Icono}>
                  <img
                     src={iconoDos}
                     alt='Conecta con tus clientes con una marca poderosa e innovadora'
                  />
               </div>
            </div>
         </Reveal>

         <Reveal>
            <div className={classes.Servicio}>
               <h1>
                  2<span>/ </span>Desarrolla tu futuro<span>.</span>
               </h1>
               <h2>
                  El siguiente paso es el desarrollo y la implementación de tu MVP. Luego, debes
                  recibir de tu cliente la <strong>valiosa retroalimentación </strong>que necesitas
                  para la siguiente iteración de tu <strong>modelo de negocio.</strong>
               </h2>
               <div className={classes.Icono}>
                  <img
                     src={iconoTres}
                     alt='Desarrolla tu futuro al tener tu negocio en la web y accede a clientes en todo el mundo'
                  />
               </div>
            </div>
         </Reveal>
      </div>
   );
};

export default Servicios;
