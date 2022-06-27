import { RiWhatsappLine, RiPhoneLine, RiInstagramLine, RiMapPin2Line, RiMailLine } from 'react-icons/ri'
import { ButtonContact } from './ButtonContact';

import styles from './Contact.module.css';


export function Contact(){
  return(
    <>
      <div className={styles.contact}>
        <h2>Entre em contato com a gente!</h2>
        <p>Entre em contato com a Cortinando, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
        <ButtonContact text="Entrar em contato"/>

        <div className={styles.contactList}>
          <ul>
            <li>
              <RiPhoneLine className={styles.socialIcon}/><span>11 99845-6754</span> 
            </li>
            <li>
              <RiMapPin2Line className={styles.socialIcon}/><span>Salvador - Lauro de Freitas/BA</span> 
            </li>
            <li>
              <RiMailLine className={styles.socialIcon}/><span>contato.cortinando@gmail.com</span> 
            </li>
          </ul>
        </div>
      </div>   

      <footer>
          <div className={styles.footerLogo}>
            <span><a href="#">Cortinando</a></span>
            <div className={styles.rightsInfo}>
              <p>©2022 Cortinando.</p>
              <p>Todos os direitos reservados.</p>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <a href="#">
              <RiInstagramLine className={styles.socialIcon}/>
            </a>
            <a href="#">
              <RiWhatsappLine className={styles.socialIcon}/>
            </a>
          </div>
       </footer>   
    </>
    
  )
}