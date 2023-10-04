import styles from './Card.module.css'

// eslint-disable-next-line react/prop-types
export default function Card({border}) {
  return (
    <section className={styles.container}>
      <div style={{border:border}}>

      </div>
    </section>
  )
}