// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'


const index = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt='Logo do aluraflix' />
      <button></button>
    </header>
  )
}

export default index