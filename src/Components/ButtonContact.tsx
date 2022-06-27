import { IconType } from "react-icons";
import { RiWhatsappLine } from "react-icons/ri";

import styles from './ButtonContact.module.css'

interface ButtonContactProps{
  text: string;
}

export function ButtonContact({text}: ButtonContactProps){
  return(
    <button>
      <RiWhatsappLine className={styles.socialIcon}/>
      <a href="#">{text}</a>
    </button>

  )
}