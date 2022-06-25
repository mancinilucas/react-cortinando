import { Header } from './Components/Header'
import { About } from './Components/About'
import { Services } from './Components/Services'

import './global.css'
import styles from './App.module.css'
import { Contact } from './Components/Contact'



export function App(){
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <About />
          <Services />
          <Contact />
          
        </main>
      </div>
    </>
  )
}


