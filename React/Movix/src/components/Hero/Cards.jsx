import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Card = ({ title }) => (
  <div className='bg-white rounded-lg shadow-lg p-4 m-2'>
    <h2 className='text-lg font-bold'>{title}</h2>
    <p className='text-gray-600'>Some description about the card.</p>
  </div>
);

const Cards = () => {
  const sections = [
    { title: "Trending", cards: ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"] },
    { title: "What's Popular", cards: ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"] },
    { title: "Top Rated", cards: ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"] },
  ];

  return (
    <div className='p-4'>
      {sections.map((section) => (
        <div key={section.title} className='mb-8'>
          <h1 className='text-2xl font-bold mb-4'>{section.title}</h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
          >
            {section.cards.map((cardTitle, index) => (
              <SwiperSlide key={index}>
                <Card title={cardTitle} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

export default Cards;
