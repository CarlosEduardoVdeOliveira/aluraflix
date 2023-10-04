/* eslint-disable react/prop-types */
import styles from './Banner.module.css'
import {TitleCategory} from '../TitleCategory';
import {videos, categories} from '../../json/db.json'
import { Card } from '../Card';

export const Banner = ({banner}) => {
  return(
    <>
      {
        banner && (
        <div className={styles.container}>
          <div className={styles.content}>
            <TitleCategory 
              bgColor={categories[1].color}
              color="#f5f5f5"
            >
              {categories[1].name}
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
          <Card {...videos[1]  />
        </div>
        )
      }
    </>
  );
}
