// Import necessary dependencies
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import Image from "next/image";
import { testimonies } from "./data"; // Assuming you have a valid data source

const Testimonies = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full flex flex-col items-center py-8 md:pb-[5rem] gap-y-3 bg-gray-200">
      <h3 className="text-3xl font-bold text-black mb-4">Testimonials</h3>
      <p className="text-center">
        Testimonials from people who shared their problems and suggestions.
      </p>

      <div className="w-full md:h-[90%] relative flex items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          freeMode={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-[60%] flex justify-center bg-white rounded-lg"
        >
          {testimonies.map((testimony, i) => (
            <SwiperSlide
              key={i}
              className="md:w-[35%] h-[60vh] p-8 md:py-[6rem] md:px-[8rem] flex flex-col items-center justify-center gap-4"
            >
              <Image
                alt={testimony.name}
                src={testimony.image}
                width={60}
                height={60}
                layout="fixed"
                className="rounded-full justify-self-center items-center mb-4"
              />
              <p className="w-full text-center mb-4">{testimony.review}</p>
              <h5 className="text-lg font-semibold text-center">
                {testimony.name}
              </h5>
              <h5 className="text-gray-600 text-center">
                {testimony.location}
              </h5>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-button-prev"
          onClick={() => swiper.slidePrev()}
        ></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Testimonies;
