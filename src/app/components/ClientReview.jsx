'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Avid Reader",
    review:
      "BookMart transformed my reading habits. I can browse and borrow books from anywhere!",
    initials: "SJ",
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Tech Enthusiast",
    review:
      "The tech book collection is incredible. Found all the programming books I needed.",
    initials: "MC",
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "Book Lover",
    review:
      "Amazing user experience and a huge collection of books. Highly recommended!",
    initials: "EW",
    color: "bg-pink-500",
  },
];

export default function ReviewCarousel() {
  return (
    <div className="bg-gray-100 py-16 px-4">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        What Our Readers Say
      </h1>
      <p className="text-gray-500 text-center mb-12">
        Don`t just take our word for it. Here`s what our readers have to say about their experience with BookMart.
      </p>
      <div className="max-w-3xl mx-auto shadow-xl p-6 rounded-3xl ">
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm h-full">
                
               
                <div className="flex text-yellow-500 text-xl mb-6">
                  ★ ★ ★ ★ ★
                </div>

            
                <p className="text-gray-500 italic text-xl leading-relaxed mb-10">
                  {review.review}
                </p>

              
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full ${review.color} text-white flex items-center justify-center font-semibold text-xl`}
                  >
                    {review.initials}
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}