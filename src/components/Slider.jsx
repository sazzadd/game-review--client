import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const sliderData = [
    {
      image:
        "https://wallpapers.com/images/featured/free-fire-gi0jpopdq4b0q5aj.jpg",
      title: "Game Review 1",
    },
    {
      image:
        "https://dl.memuplay.com/new_market/img/com.tencent.ig.sc0.2021-04-23-14-11-17.jpg",
      title: "Game Review 2",
    },
    {
      image:
        "https://wallpapers.com/images/hd/action-games-1920-x-1080-wallpaper-em1gvdroqkkyzptx.jpg",
      title: "Game Review 3",
    },
  ];

  return (
    <div
      className="slider-container"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "20px auto",
        backgroundColor: "rgba(251, 189, 5, 0.5)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(251, 189, 5, 0.5)",
      }}
    >
      {sliderData.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          style={{ height: "400px" }}
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "5%",
                    color: "#fff",
                    background: "rgba(251, 189, 5, 0.5)",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  <h2>{slide.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "24px",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            borderRadius: "10px",
          }}
        >
          No Images Available
        </div>
      )}
    </div>
  );
};

export default Slider;
