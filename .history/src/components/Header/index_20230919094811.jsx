import { Button } from '@mui/material'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined" size="medium">Novo vídeo</Button>
    </header>
  )
}

export default Header