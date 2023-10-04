import { Button, Typography } from '@mui/material';
import styles from './Banner.module.css'
import banner from '../../../public/banner.png'

export function Banner(){
  return(
    <div className={styles.container}>
      <Button variant="contained" sx={{ bgcolor: 'secondary.light', width: 40, height: 20 }} size="medium">Front-end</Button>
      <Typography variant='h5' fontSize={46} color='#FFF' >
        SEO com React
      </Typography>
      <Typography variant='p' fontSize={18} color='#FFF'>
        Esse desafio é uma forma de aprendizado. 
        É um mecanismo onde você pode se engajar na resolução de um problema 
        para poder aplicar todo o conhecimento adquirido na Formação React.
      </Typography>
      <img src={banner} alt='Imagem do SEO da alura, '/>
    </div>
  );
}
