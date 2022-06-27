import { ServicesCard } from './ServicesCard';

import styles from './Services.module.css';


export function Services(){
  
  return(
    <div className={styles.services}>
      <div className={styles.servicesText}>
        <h2>Serviços</h2>
        <p>A Cortinando já conquistou inúmeros clientes de Salvador e região metropolitana com seus produtos e serviços exclusivos e totalmente personalizados.</p>
      </div>

      <div className={styles.servicesInfo}>
        <ServicesCard 
          name="Cortinas" 
          description="Cortinas sob demanda com material de alta qualidade."
          src="https://images.unsplash.com/photo-1634822929277-0c51ca0e8846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"        
        />
        <ServicesCard 
          name="Persianas" 
          description="Persianas elegantes personalizadas."
          src="https://images.unsplash.com/photo-1587812226208-37081e8c0ede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />
        <ServicesCard 
          name="Toldos" 
          description="Fabricação de toldos resistes."
          src="https://images.unsplash.com/photo-1590499552506-455c5deadc04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />
      </div>

    </div>
  )
}