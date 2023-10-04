import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import initReact from '../../assets/initReact.png'
// eslint-disable-next-line react/prop-types
export default function Card({border}) {
  return (
    <section className={styles.container}>
      <Link to="#" className={styles.card} style={{border:border}}>
        <img src={initReact} alt="teste" />
      </Link>
      <Link to="#" style={{border:border}}>
        <img src={initReact} alt="teste" />
      </Link>
      <Link to="#" style={{border:border}}>
        <img src={initReact} alt="teste" />
      </Link>
      <Link to="#" style={{border:border}}>
        <img src={initReact} alt="teste" />
      </Link>
      <Link to="#" style={{border:border}}>
        <img src={initReact} alt="teste" />
      </Link>
      <Link to="#" style={{border:border}}>
        <img src={initReact} alt="teste" />
      </Link>
      <Link to="#" style={{border:border}}>
        <img src={initReact} alt="teste" />
      </Link>
    </section>
  )
}