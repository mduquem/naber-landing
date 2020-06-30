import React from 'react';

import classes from './Project.module.css';

const Project = (props) => {
   return (
      <div className={classes.Project}>
         <img src={props.img} alt='Naber - Administra más con menos' />
      </div>
   );
};

export default Project;
