import styles from './ServicesCard.module.css';

interface ServicesCardProps{
  name: string;
  description: string;
}

export function ServicesCard({name, description}:ServicesCardProps){
  return(
    <div className={styles.servicesCard}>
      <strong>{name}</strong>
      <p>{description}</p>
    </div>
  )
}