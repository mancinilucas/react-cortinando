import styles from './Services.module.css';
import { ServicesCard } from './ServicesCard';

export function Services(){
  return(
    <div className={styles.services}>
      <div className={styles.servicesText}>
        <h2>Serviços</h2>
        <p>A Cortinando já conquistou inúmeros clientes de Salvador e região metropolitana com seus produtos e serviços exclusivos e totalmente personalizados</p>
      </div>

      <div className={styles.servicesInfo}>
        <ServicesCard name="Cortinas" description="Cortinas sob demanda com material de resistes."/>
        <ServicesCard name="Persianas" description="Persianas personalizadas."/>
        <ServicesCard name="Toldos" description="Fabricação de toldos personalizados e resistes."/>
      </div>

    </div>
  )
}