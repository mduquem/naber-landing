import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
   return (
      <div className={classes.NavigationItems}>
         <ul>
            <NavigationItem clicked={props.clicked} link='/'>
               Inicio
            </NavigationItem>
            <NavigationItem clicked={props.clicked} link='#quienes'>
               ¿Quiénes somos?
            </NavigationItem>
            <NavigationItem clicked={props.clicked} link='#beneficios'>
               Beneficios para ti
            </NavigationItem>
            <NavigationItem clicked={props.clicked} link='#contacto'>
               Contáctanos
            </NavigationItem>
         </ul>
      </div>
   );
};

export default NavigationItems;
