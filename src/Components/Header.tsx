import styles from './Header.module.css'

export function Header(){
  return(
    <header className={styles.header}>
      <a className={styles.logo} href="#">Cortinando</a>
    </header>
  )
}