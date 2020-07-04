import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
   return (
      <div className={classes.NavigationItems}>
         <nav>
            <ul>
               <NavigationItem clicked={props.clicked} link='#landing'>
                  Inicio
               </NavigationItem>
               <NavigationItem clicked={props.clicked} link='#naber'>
                  ¿Quiénes somos?
               </NavigationItem>
               <NavigationItem clicked={props.clicked} link='#apps'>
                  Propuesta de Valor
               </NavigationItem>
               <NavigationItem clicked={props.clicked} link='#contacto'>
                  Contacto
               </NavigationItem>

               <div className='d-flex justify-content-center align-items-center'>
                  <a
                     style={{
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '15px',
                        padding: '10px',
                        width: '100%',
                        border: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                     }}
                     className='btn btn-primary NavigationItem'
                     href='https://www.admin.naber.co'
                  >
                     Iniciar Sesión
                  </a>
               </div>
            </ul>
         </nav>
      </div>
   );
};

export default NavigationItems;
