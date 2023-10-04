import styles from './Card.module.css'
import videos from '../../json/db.json'
import SwipeableViews from 'react-swipeable-views';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div key={video.id} className={styles.card}>
        <Link to={video.link} target='_blank'>
          <img src={video.thumbnail} alt="teste" />
        </Link>
      </div>
      
      ))
    }
  </SwipeableViews>
</Paper>

  )
}