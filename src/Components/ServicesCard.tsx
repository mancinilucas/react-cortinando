import styles from './ServicesCard.module.css';

interface ServicesCardProps{
  name: string;
  description: string;
  src: string;
}

export function ServicesCard({name, description, src}:ServicesCardProps){
  return(
    <div className={styles.servicesCard}>
      <strong>{name}</strong>
      <p>{description}</p>
      <div>
        <img src={src} alt={name} />
      </div>
    </div>
  )
}