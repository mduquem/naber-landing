import React from 'react';

import classes from './Project.module.css';

const Project = (props) => {
   return (
      <div className={classes.Project}>
         <a href={props.link}>
            <img src={props.img} alt='Naber - Administra más con menos' />
         </a>
      </div>
   );
};

export default Project;
