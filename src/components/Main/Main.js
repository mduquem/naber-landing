import React from 'react';
import Landing from '../Landing/Landing';
import Portafolio from '../Portafolio/Portafolio';
import Servicios from '../Servicios/Servicios';
import Contacto from '../Contacto/Contacto';

const Main = () => {
   return (
      <div>
         <Landing id='landing' />
         <Portafolio id='naber' />
         <Servicios id='apps' />
         <Contacto id='contacto' />
      </div>
   );
};

export default Main;
