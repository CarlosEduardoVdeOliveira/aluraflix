
import logo from '../../assets/logo.png'
import { Button } from '@mui/material'

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined" size="medium">Novo vídeo</Button>
    </header>
  )
}

export default Header