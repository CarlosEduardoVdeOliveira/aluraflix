import { Box, Typography } from '@mui/material';
import styles from './Banner.module.css'
import banner from '../../../public/banner.png'

export function Banner(){
  return(
    <div className={styles.container}>
      <Box
        sx={{
          width: 296,
          height: 92,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <Typography variant='h5' fontSize={46} sx={{ color: 'primary.contrastText'}} >
          Front End
        </Typography>
      </Box>
      <Typography variant='h5' fontSize={46} sx={{ color: 'primary.contrastText'}} >
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
