/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';


const Header = ({button}) => {
  
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logo} alt='Logo do aluraflix' style={{justifyItems: 'center'}} />
      </Link>
      {button && <Button variant="outlined" size="medium">Novo vídeo</Button>}
    </header>
  )
}

export default Header