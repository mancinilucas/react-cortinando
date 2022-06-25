import ImageGallery from 'react-image-gallery';

import styles from './Works.module.css'

interface worksImagesProps{
  originalWidth: number;
  originalHeight: number;
  showBullets: boolean;
}

const worksImages = [
  {
    original: 'https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1570427224050-b080ad19e3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80',
  },
];

export function Works({originalWidth, ...props}: worksImagesProps){
  return(
    <div className={styles.imageSlider}>
      <ImageGallery 
        items={worksImages}
        {...props}
      />
    </div>
  )
}