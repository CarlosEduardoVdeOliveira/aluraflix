import styles from './Banner.module.css'
import bannerImage from '../../../public/banner.png'
import {TitleCategory} from '../TitleCategory';
// eslint-disable-next-line react/prop-types
export const Banner = ({banner}) => {
  return(
    <>
      {
        banner && (
        <div className={styles.container}>
          <div className={styles.content}>
            <TitleCategory 
              bgColor="#6BD1FF"
              color="#f5f5f5"
            >
              Font End
            </TitleCategory>
            <h5 >
              SEO com React
            </h5>
            <p>
              Esse desafio é uma forma de aprendizado. 
              É um mecanismo onde você pode se engajar na resolução de um problema 
              para poder aplicar todo o conhecimento adquirido na Formação React.
            </p>
          </div>
          <img src={bannerImage} alt='Imagem do SEO da alura, '/>
        </div>
        )
      }
    </>
  );
}
