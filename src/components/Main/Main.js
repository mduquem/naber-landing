import React from 'react';
import Landing from '../Landing/Landing';
import Portafolio from '../Portafolio/Portafolio';
import Servicios from '../Servicios/Servicios';
import Contacto from '../Contacto/Contacto';

const Main = () => {
   return (
      <div>
         <Landing />
         <Portafolio />
         <Servicios />
         <Contacto />
      </div>
   );
};

export default Main;
