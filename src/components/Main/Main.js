import React from 'react';
import Landing from '../Landing/Landing';
import Portafolio from '../Portafolio/Portafolio';
import Servicios from '../Servicios/Servicios';
import Contacto from '../Contacto/Contacto';

const Main = () => {
   return (
      <>
         <section id='landing'>
            <Landing />
         </section>
         <section id='naber'>
            <Portafolio />
         </section>
         <section id='apps'>
            <Servicios />
         </section>
         <section id='contacto'>
            <Contacto />
         </section>
      </>
   );
};

export default Main;
