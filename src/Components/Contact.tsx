import styles from './Contact.module.css';

export function Contact(){
  return(
    <div className={styles.Contact}>
      <h2>Entre em contato com a gente!</h2>
      <p>Entre em contato com a Cortinando, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
      <button><a href="#">Entrar em contato</a></button>
      <div>
        <ul>
         <li>
          <i></i>11 99845-6754
         </li>
         <li>
          <i></i>Salvador - Lauro de Freitas/BA
         </li>
         <li>
          <i></i>contato.cortinando@gmail.com
         </li>
        </ul>
      </div>
    </div>
  )
}