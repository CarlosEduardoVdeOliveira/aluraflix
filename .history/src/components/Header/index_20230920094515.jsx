// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Header = () => {
  const location = useLocation()
  return (
    <header className={styles.container}>
      <img src={logo} alt='Logo do aluraflix' />
      {location.pathname === '/' && <Button variant="outlined" size="medium">Novo vídeo</Button>}
    </header>
  )
}

export default Header