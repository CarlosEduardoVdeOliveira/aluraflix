import { CardContent, Typography } from '@mui/material';
import styles from './Banner.module.css'
import banner from '../../../public/banner.png'

// eslint-disable-next-line react/prop-types
export function Banner({bannerProps}){
  return(
    <>
      {
        bannerProps && (
        <div className={styles.container}>
        <CardContent

          sx={{
            width: 196,
            height: 80,
            textAlign: "center",
            backgroundColor: 'primary.light',
          }}>
          <Typography variant='h5' fontSize={46} sx={{color: 'primary.contrastText'}} >
            Front End
          </Typography>
        </CardContent>
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
        )
      }
    </>
  );
}
