/* eslint-disable react/prop-types */
import styles from './Banner.module.css'
import {TitleCategory} from '../TitleCategory';
import {videos, categories} from '../../json/db.json'
import { Card } from '../Card';
import { useState } from 'react';

export const Banner = ({banner}) => {
  const [highlightCategory, setHighlightCategory] = useState(0)
  function findVideo() {
    return videos.find(video => video.category === categories[0].name)
  }
  return(
    <>
      {
        banner && (
        <div className={styles.container}>
          <img className={styles.backgroundImage}
            src={findVideo().thumbnail}
            alt={findVideo().description}
          />
          <div className={styles.content}>
            <TitleCategory 
              bgColor={categories[highlightCategory].color}
              color="#f5f5f5"
            >
              {categories[highlightCategory].name}
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
          <Card className={styles.cardBanner}
            {...videos.find(video => video.category === categories[highlightCategory].name)}
            borderColor={categories[highlightCategory].color}
          />
        </div>
        )
      }
    </>
  );
}
