// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

const Header = () => {
  let width = window.innerWidth;
  console.log(width);
  return (
    <header className={styles.container}>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined" size={width < 570 ? "medium" : 'small'}>Novo vídeo</Button>
    </header>
  )
}

export default Header