/* eslint-disable react/prop-types */
import styles from './Banner.module.css'
import {TitleCategory} from '../TitleCategory';
import {videos, categories} from '../../json/db.json'
import { Card } from '../Card';
import { useState } from 'react';

export const Banner = ({banner}) => {
  const [highlight, setHighlight] = useState(5)

  return(
    <>
      {
        banner && (
        <div className={styles.container}>
          <div className={styles.content}>
            <TitleCategory 
              bgColor={categories[highlight].color}
              color="#f5f5f5"
            >
              {categories[highlight].name}
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
          <Card {...videos[categories[highlight].name === videos]} />
        </div>
        )
      }
    </>
  );
}
