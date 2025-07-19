import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function BestSeller() {
  const slides = [
    { src: "/images/slider1.jpg", title: "Rice meal", desc: "Rice meal", price: "300 EGP" },
    { src: "/images/slider2.jpg", title: "chicken meal", desc: "checken sandwich", price: "200 EGP" },
    { src: "/images/slider3.jpg", title: "Rockets", desc: "2 Rockets", price: "200 EGP" },
    { src: "/images/slider1.jpg", title: "Rice meal", desc: "Rice meal", price: "300 EGP" },
    { src: "/images/slider2.jpg", title: "chicken meal", desc: "checken sandwich", price: "200 EGP" },
    { src: "/images/slider3.jpg", title: "Rockets", desc: "2 Rockets", price: "200 EGP" },
  ]

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Best Seller</h2>

      <Swiper
        slidesPerView={3} // 3 صور في نفس الوقت
        spaceBetween={20} // المسافة بينهم
        loop={true} // دوران لا نهائي
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-800 p-4 rounded shadow">
              <img
                src={slide.src}
                className="w-full h-48 object-cover rounded"
                alt={slide.title}
              />
              <h3 className="text-xl mt-2 text-yellow-500">{slide.title}</h3>
              <p className="text-sm text-gray-400">{slide.desc}</p>
              <p className="font-bold mt-1 text-yellow-500">{slide.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
