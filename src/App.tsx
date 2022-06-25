import { Header } from './Components/Header'
import { About } from './Components/About'
import { Services } from './Components/Services'

import './global.css'
import styles from './App.module.css'
import { Works } from './Components/Works'

export function App(){
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <About />
          <Services />
          <Works 
            originalWidth={30}
            originalHeight={30}
            showBullets={true}

          />
        </main>
      </div>
    </>
  )
}


