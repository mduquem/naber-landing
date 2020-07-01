import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

import Logo from './Logo/Logo';

import DrawerToggle from './DrawerToggle/DrawerToggle';

import colombia from '../../../assets/img/colombia.png';

const Toolbar = (props) => {
   return (
      <header className={classes.Toolbar}>
         <Logo />
         <div className='d-flex align-items-center'>
            <nav className={classes.DesktopOnly}>
               <NavigationItems clicked={props.clicked} active={props.active} />
            </nav>
            <div className={classes.Colombia}>
               <img src={colombia} alt='100% Colombiano' />
            </div>
         </div>

         <DrawerToggle clicked={props.setShowDrawer} />
      </header>
   );
};

export default Toolbar;
