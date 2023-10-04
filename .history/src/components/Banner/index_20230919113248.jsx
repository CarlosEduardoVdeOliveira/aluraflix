import { Button, Typography } from '@mui/material';
import styles from './Banner.module.css'

export function Banner(){
  return(
    <div className={styles.container}>
      <Button variant="outlined" size="medium">Novo vídeo</Button>
      <Typography variant='h1'>
        SEO com React
      </Typography>
    </div>
  );
}