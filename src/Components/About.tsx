import styles from './About.module.css'
import { ButtonContact } from './ButtonContact'

export function About(){
  return(
    <div className={styles.about}>
      <div className={styles.homeImage}>
        <img src="https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80" alt="" />
      </div>

      <div className={styles.homeText}>
        <h1>Cortinas alto padrão e persianas personalizadas</h1>
        <p>A Cortinando oferece um serviço diferenciado de consultoria e produção de cortinas e persianas sob medida para você.</p>

        <ButtonContact text="Solicite um orçamento" />
      </div>

      
    </div>
  )
}