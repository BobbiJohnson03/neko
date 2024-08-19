import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import your images
import Slide1 from '../assets/Slide1.png';
import Slide2 from '../assets/Slide2.png';
import Slide3 from '../assets/Slide3.png';
import Slide4 from '../assets/Slide4.png';
import Slide5 from '../assets/Slide5.png';
import Slide6 from '../assets/Slide6.png';
import Slide7 from '../assets/Slide7.png';

import './RowTwo.css'; // Dodaj tę linię na początku pliku



const RowTwo = () => {
  return (
    <Swiper
      slidesPerView={3} // Wyświetl 3 slajdy jednocześnie
      spaceBetween={0} // Odstęp między slajdami
      pagination={{ type: 'fraction' }} // Paginacja z numerkami
      navigation={true} // Przyciski nawigacyjne
      modules={[Pagination, Navigation]} // Używane moduły
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Slide1} alt="Slide 1" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide2} alt="Slide 2" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide3} alt="Slide 3" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide4} alt="Slide 4" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide5} alt="Slide 5" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide6} alt="Slide 6" className="slide-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide7} alt="Slide 7" className="slide-image" />
      </SwiperSlide>
    </Swiper>
  );
}

export default RowTwo;
