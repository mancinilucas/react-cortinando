import { ReactNode } from 'react'
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper';

import './Slider.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProps{
  children: ReactNode;
  settings: SwiperProps;
}

export function Slider({ settings, children }: SliderProps){
  return(
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}{...settings}
    >
      {children}
    </Swiper>
  )
}