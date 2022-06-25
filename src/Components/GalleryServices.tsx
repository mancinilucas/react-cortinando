import { SwiperProps, SwiperSlide } from 'swiper/react';
import { Slider } from './Slider';

import styles from './GalleryServices.module.css';


export function GalleryServices(){
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 2,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }

  return(
    <div className={styles.container}>
      <h2>Galeria</h2>

      <Slider settings={settings}>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80" alt="" /></SwiperSlide>
      </Slider>
     
    </div>
  )
}