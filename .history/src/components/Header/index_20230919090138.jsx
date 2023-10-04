import Header from './Header'
import logo from '../../assets/logo.png'
import { Button } from '@mui/material'


const HeaderComponent = () => {
  return (
    <Header>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined" size="medium">Novo vídeo</Button>
    </Header>
  )
}

export default HeaderComponent