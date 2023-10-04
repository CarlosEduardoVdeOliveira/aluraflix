import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import videos from '../../json/db.json'
import SwipeableViews from 'react-swipeable-views';
import { Paper } from '@mui/material';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Card() {
  const [index, setIndex] = useState(0);

    const handleChangeIndex = (index) => {
        setIndex(index);
    };
  return (
    <Paper elevation={3}>
  <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
    {
      videos.map((video) => (
        <div key={video.id} className={styles.card}> {/* Troque o Link por uma div por enquanto para testar */}
          <img src={video.thumbnail} alt="teste" />
        </div>
      ))
    }
  </SwipeableViews>
</Paper>

  )
}