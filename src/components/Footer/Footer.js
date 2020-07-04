import React from 'react';

import whatsapp from '../../assets/svg/whatsapp.svg';
import instagram from '../../assets/svg/instagram.svg';
import classes from './Footer.module.css';

const Footer = () => {
   return (
      <div className={classes.Footer}>
         <ul className={classes.Redes}>
            <li>
               <a href='https://wa.me/573138392143?text=Hola%20Naber%2C%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informacion%20sobre%20su%20empresa%20y%20los%20beneficios%20que%20esta%20brinda'>
                  <img src={whatsapp} alt='Naber - Administra más con menos' />
               </a>
            </li>
            <li>
               <a href='https://www.instagram.com/nabercolombia/'>
                  <img src={instagram} alt='Naber - Administra más con menos' />
               </a>
            </li>
         </ul>
         <div>
            <h3>nabercolombia@gmail.com</h3>
            <h3>Whatsapp: +57 3138392143</h3>
            <h3>Carrera 18 a sur #25c25,</h3>
            <h3>Medellín, Colombia</h3>
            <h3>
               Naber - Administra más con menos. Todos los derechos reservados ©{' '}
               {new Date().getFullYear()}
            </h3>
         </div>
      </div>
   );
};

export default Footer;
