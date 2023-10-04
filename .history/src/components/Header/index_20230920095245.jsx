// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

// eslint-disable-next-line react/prop-types
const Header = ({button}) => {
  
  return (
    <header className={styles.container}>
      <img src={logo} alt='Logo do aluraflix' />
      {button ? <Button variant="outlined" size="medium">Novo vídeo</Button> : ''}
    </header>
  )
}

export default Header