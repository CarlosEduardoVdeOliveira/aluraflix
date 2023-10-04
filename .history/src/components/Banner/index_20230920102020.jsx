import styles from './Banner.module.css'
import banner from '../../../public/banner.png'

// eslint-disable-next-line react/prop-types
export function Banner({bannerProps}){
  return(
    <>
      {
        bannerProps && (
        <div className={styles.container}>
          <div>
            Front End
          </div>
          <div>
            <h5 variant='h5' fontSize={46} sx={{ color: 'primary.contrastText'}} >
              SEO com React
            </h5>
            <p variant='p' fontSize={18} color='#FFF'>
              Esse desafio é uma forma de aprendizado. 
              É um mecanismo onde você pode se engajar na resolução de um problema 
              para poder aplicar todo o conhecimento adquirido na Formação React.
            </p>
            <img src={banner} alt='Imagem do SEO da alura, '/>
          </div>
      </div>
        )
      }
    </>
  );
}