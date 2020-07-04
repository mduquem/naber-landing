import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
   const linkString = props.link;
   return (
      <li className={classes.NavigationItem}>
         <a href={props.link} className={props.active ? 'active' : null}>
            {' '}
            <strong>
               <h3>{props.children}</h3>
            </strong>
         </a>
      </li>
   );
};

export default NavigationItem;
