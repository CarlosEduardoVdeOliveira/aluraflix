import HeaderComponent from './Header.js'
import logo from '../../assets/logo.png'
import { Button } from '@mui/material'


const HeaderComponent = () => {
  return (
    <HeaderComponent>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined" size="medium">Novo vídeo</Button>
    </HeaderComponent>
  )
}

export default HeaderComponent