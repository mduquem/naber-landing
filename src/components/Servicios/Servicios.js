import React from 'react';
import { Reveal, AnimatedTitle } from 'react-genie';

import classes from './Servicios.module.css';
import iconoUno from '../../assets/svg/icon1.svg';
import iconoDos from '../../assets/svg/icon2.svg';
import iconoTres from '../../assets/svg/icon3.svg';

const Servicios = () => {
   return (
      <>
         <div className={classes.Title}>
            <h2>
               <AnimatedTitle>¿De que forma agregamos valor?</AnimatedTitle>
            </h2>
         </div>
         <div className={classes.Servicios}>
            <Reveal>
               <div className={classes.Servicio}>
                  <h1>Si eres administrador:</h1>

                  <ul>
                     <li>
                        <h2>
                           Acceso a una plataforma web para la base de datos de la propiedad
                           horizontal
                        </h2>
                     </li>

                     <li>
                        <h2>Recaudo automatizado de cartera</h2>
                     </li>

                     <li>
                        <h2>Chat para comunicarse con los propietarios, arrendatarios y lobby</h2>
                     </li>
                     <li>
                        <h2>Emisión de encuestas y votaciones para la toma de decisiones</h2>
                     </li>
                  </ul>

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
                  <h1>Si eres propietario, arrendatario o habitante:</h1>

                  <ul>
                     <li>
                        <h2>
                           Acceso APP móvil para Android y iOS con toda la información de tu
                           propiedad
                        </h2>
                     </li>

                     <li>
                        <h2>Pago de cuotas administrativas desde la APP</h2>
                     </li>

                     <li>
                        <h2>Chat para comunicarse con el lobby y la administración</h2>
                     </li>
                     <li>
                        <h2>
                           Información de manuales y reglamentos, zonas comunes y noticias
                           relevantes de la copropiedad
                        </h2>
                     </li>
                  </ul>
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
                     Pensando en la seguridad de la propiedad horizontal hemos desarrollado una APP
                     específicamente para el <strong>Lobby</strong>
                  </h1>

                  <ul>
                     <li>
                        <h2>
                           Acceso APP móvil para Android y iOS con toda la información de la
                           propiedad horizontal
                        </h2>
                     </li>

                     <li>
                        <h2>
                           Chat para comunicarse con la administración, propietarios, arrendatarios
                           y habitantes
                        </h2>
                     </li>

                     <li>
                        <h2>Registro de visitantes automatizado</h2>
                     </li>
                  </ul>
                  <div className={classes.Icono}>
                     <img
                        src={iconoTres}
                        alt='Conecta con tus clientes con una marca poderosa e innovadora'
                     />
                  </div>
               </div>
            </Reveal>
         </div>
      </>
   );
};

export default Servicios;
