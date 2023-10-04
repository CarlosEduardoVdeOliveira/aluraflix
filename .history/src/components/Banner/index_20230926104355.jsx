/* eslint-disable react/prop-types */
import styles from './Banner.module.css'
import bannerImage from '../../../public/banner.png'
import {TitleCategory} from '../TitleCategory';
import {videos, categories} from '../../json/db.json'

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
              {categories[0].name}
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
          <img src={videos[0].thumbnail} alt='Imagem do SEO da alura, '/>
        </div>
        )
      }
    </>
  );
}
