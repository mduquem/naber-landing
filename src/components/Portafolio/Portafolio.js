import React from 'react';
import { Reveal, AnimatedTitle } from 'react-genie';
import Project from './Project/Project';

import naber from '../../assets/img/naber.png';

import classes from './Portafolio.module.css';

const Portafolio = () => {
   return (
      <div className={classes.Portafolio}>
         <div className=' flex-lg-column'>
            <h2>
               <AnimatedTitle>¿Qué es Naber?</AnimatedTitle>
            </h2>
            <Reveal>
               <Project img={naber} />
            </Reveal>
         </div>
         <div style={{ maxWidth: '540px' }}>
            <Reveal>
               <h3>
                  <strong>Naber</strong> es una APP web y móvil que ayuda a las empresas
                  administradoras de propiedades horizontales a mejorar su desempeño mediante la
                  creación de un ecosistema que les permite recaudar la cartera, compartir manuales
                  y reglamentos, realizar encuestas y votaciones, almacenar información de
                  proveedores y números de emergencia, comunicarse por chat y llamadas con todos los
                  individuos de la copropiedad… ¡y mucho más!
               </h3>
            </Reveal>
         </div>
      </div>
   );
};

export default Portafolio;
