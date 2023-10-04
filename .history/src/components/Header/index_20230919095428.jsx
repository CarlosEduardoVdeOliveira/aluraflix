import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

const Header = () => {
  return (
    <Header className={styles.container}>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined" size="medium">Novo vídeo</Button>
    </Header>
  )
}

export default Header