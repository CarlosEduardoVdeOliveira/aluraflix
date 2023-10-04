// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

const Header = ({button}) => {
  
  return (
    <header className={styles.container}>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined" size="medium">Novo vídeo</Button>
    </header>
  )
}

export default Header