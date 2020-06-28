import React from 'react';

import classes from './Logo.module.css';
import logo from '../../../../assets/img/name.png';

const Logo = (props) => {
   return (
      <div className={classes.Logo}>
         <a href='/'>
            <img src={logo} alt='Naber - Administra más con menos' />
         </a>
      </div>
   );
};

export default Logo;
