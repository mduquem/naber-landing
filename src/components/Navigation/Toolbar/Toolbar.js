import React from 'react';

import classes from './Toolbar.module.css';

import Logo from './Logo/Logo';

import DrawerToggle from './DrawerToggle/DrawerToggle';
import Aftermath from './Aftermath/Aftermath';

import colombia from '../../../assets/img/colombia.png';

const Toolbar = (props) => {
   return (
      <header className={classes.Toolbar}>
         <Logo />

         <Aftermath />
         <div className={classes.Colombia}>
            <img src={colombia} alt='100% Colombiano' />
         </div>

         <DrawerToggle clicked={props.setShowDrawer} />
         {/* 
      <nav className={classes.DesktopOnly}>
        <NavigationItems clicked={props.clicked} active={props.active} />
      </nav> */}
      </header>
   );
};

export default Toolbar;
