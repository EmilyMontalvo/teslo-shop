'use client'
import { Swiper, SwiperSlide } from 'swiper/react'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination'
// import required modules
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

// Import css
import './slideShow.css';
import Image from 'next/image';



interface Props {
  images: string[];
  title: string;
  className?: string;
}



export const MobileSlideShow = ({ images, title, className }: Props) => {

  return (
    <div className={className}>
      <Swiper
       style={{
        width: '100vh',
        height: '500px'
      }}
        pagination
        autoplay = {{
          delay: 2500
        }}
        
        modules={[FreeMode, Thumbs, Autoplay, Pagination]}
        className="mySwiper2"
      >

        {images.map(image => (
          <SwiperSlide key={image}>
            <Image src={`/products/${image}`} width={600} height={500} alt={title}
              className='object-fill' />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}
