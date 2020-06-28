import React from 'react';

import whatsapp from '../../assets/svg/whatsapp.svg';
import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import classes from './Footer.module.css';

const Footer = () => {
   return (
      <div className={classes.Footer}>
         <div>
            <h3>
               Todos los derechos reservados © {new Date().getFullYear()} Naber - Administra más con
               menos.
            </h3>
            <h3>contacto@naber.co</h3>
            <h3>Whatsapp: +57 </h3>
            <h3>Medellín, Colombia</h3>
         </div>

         <ul className={classes.Redes}>
            <li>
               <a href='https://wa.me/573112311571'>
                  <img src={whatsapp} alt='Naber - Administra más con menos' />
               </a>
            </li>
            <li>
               <a href='https://www.instagram.com/aftermathventures/'>
                  <img src={instagram} alt='Naber - Administra más con menos' />
               </a>
            </li>
            <li>
               <a href='https://www.facebook.com/aftermathschool/'>
                  <img src={facebook} alt='Naber - Administra más con menos' />
               </a>
            </li>
         </ul>
      </div>
   );
};

export default Footer;
