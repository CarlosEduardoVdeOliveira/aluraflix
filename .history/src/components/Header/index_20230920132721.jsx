/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

import logo from '../../assets/logo.png'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import Button from '../Button';


const Header = ({button}) => {
  
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logo} alt='Logo do aluraflix' />
      </Link>
      {button && <Button 
        bgColor="#000" 
        borderColor="1px solid #FFF"
        >
          Novo vídeo
        </Button>}
    </header>
  )
}

export default Header