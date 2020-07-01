import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
   return (
      <div className={classes.NavigationItems}>
         <ul>
            <NavigationItem
               link={{
                  to: '/home',
                  hash: '#landing',
               }}
            >
               Inicio
            </NavigationItem>
            <NavigationItem
               link={{
                  to: '/home',
                  hash: '#naber',
               }}
            >
               ¿Quiénes somos?
            </NavigationItem>
            <NavigationItem
               link={{
                  to: '/home',
                  hash: '#apps',
               }}
            >
               Propuesta de Valor
            </NavigationItem>
            <NavigationItem
               link={{
                  to: '/home',
                  hash: '#contacto',
               }}
            >
               Contacto
            </NavigationItem>
         </ul>
      </div>
   );
};

export default NavigationItems;
