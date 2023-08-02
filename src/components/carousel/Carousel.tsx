import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import ImageThumbnail from './components/ImageThumbnail';

interface CarouselProps {
  images: string[];
  imagesThumbnail?: string[];
}

export default function Carousel(props: CarouselProps) {
  const { images, imagesThumbnail } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
        className='md:hidden flex flex-row items-center justify-between h-full w-full bg-cover duration-300'
      >
        <div className='text-2xl ml-5 rounded-full p-2 bg-white text-gray-900 cursor-pointer active:scale-90'>
          <IoChevronBack onClick={prevSlide} size={22} className='active:scale-90' />
        </div>

        <div className='text-2xl mr-5 rounded-full p-2 bg-white text-gray-900 cursor-pointer active:scale-90'>
          <IoChevronForward onClick={nextSlide} size={22} className='active:scale-90' />
        </div>
      </div>

      <div className='hidden md:block'>
        <img src={images[currentIndex]} className="md:w-96 md:rounded-xl "/>

        <div className="hidden md:inline-flex mt-6 w-96 justify-between">
          {imagesThumbnail?.map((image, index) => 
            <ImageThumbnail index={currentIndex} image={image} imageIndex={index} setImage={() => setCurrentIndex(index)}/>
          )}
        </div>
      </div>
    </>

  );
}