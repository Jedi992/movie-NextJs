'use client' // Важно для использования Swiper в Next.js
import  {fetchTvShows}  from '@/api/fetchTvShows';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface Film {
  id: string;
  nameRu: string;
  posterUrl: string;
  year:number;
}

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
// 

export default function SliderMovie() {
  const [dataFilms, setDataFilms] = useState<Film[]>([])
  const [isLoading, setIsLoading] = useState(true)
  // 
  //
  useEffect(() => {
    fetchTvShows().then(data => setDataFilms(data.items))
  }, [setDataFilms])
  const findFilms = (film ) => {
    console.log(film)
  }
  
  

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
        // pagination={{ clickable: true }}
      className="w-full h-[400px]"
    >
      {dataFilms.map((slide, i) => (
        <SwiperSlide key={i}  className="bg-gray-800 rounded-lg p-6 flex items-center justify-center">
          <div className="text-white">
            <ul onClick={() => findFilms(slide)} className='cursor-pointer'>
              <li><img className="size-[300px] rounded-[10px]" src={slide.posterUrl} alt="" /></li>
              <li className='text-center mt-[10px]'>{slide.nameRu}</li>
              <li  className='text-center'>{slide.year}</li>
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    
  );
};
