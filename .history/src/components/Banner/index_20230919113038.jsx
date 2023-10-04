import { Button } from '@mui/material';
import styles from './Banner.module.css'

export function Banner(){
  return(
    <div className={styles.container}>
      <Button variant="outlined" size="medium">Novo vídeo</Button>
    </div>
  );
}
