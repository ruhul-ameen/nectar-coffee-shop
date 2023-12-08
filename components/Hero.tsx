import { Carousel } from "antd";
import Link from "next/link";
import React from "react";

const images = [
  {
    id: 1,
    image: "/images/hero-slider/hero-slider-1.png",
    title: "Espresso",
    des: "Served in small, potent shots, this Italian-born beverage is the foundation for various coffee concoctions and stands as a testament to the artistry of brewing.",
  },
  {
    id: 2,
    image: "/images/hero-slider/hero-slider-2.png",
    title: "Americano",
    des: "Americano coffee, a simple yet satisfying brew, is created by diluting a shot of espresso with hot water. This service style offers a versatile and milder coffee experience, perfect for those who appreciate a smoother flavor profile.",
  },
  {
    id: 3,
    image: "/images/hero-slider/hero-slider-3.png",
    title: "Caffè macchiato",
    des: `Caffè macchiato, an Italian favorite, features a shot of espresso "stained" or "marked" with a small amount of steamed milk. This minimalist coffee service skillfully balances the boldness of espresso with a hint of creamy richness, creating a delightful and nuanced beverage.`,
  },
  {
    id: 4,
    image: "/images/hero-slider/hero-slider-4.png",
    title: "Cappuccino",
    des: "Cappuccino, a classic Italian coffee, is expertly crafted by combining equal parts of espresso, steamed milk, and frothed milk. The result is a velvety and well-balanced beverage, where the boldness of espresso harmonizes with the creamy texture of milk.",
  },
  {
    id: 5,
    image: "/images/hero-slider/hero-slider-5.png",
    title: "Caffè mocha",
    des: "Caffè mocha, a luscious blend of espresso, steamed milk, and chocolate, indulges the senses with its rich and decadent flavor. This delightful coffee service combines the robust notes of coffee with the sweetness of chocolate, creating a luxurious treat for those with a sweet tooth.",
  },
  {
    id: 6,
    image: "/images/hero-slider/hero-slider-6.png",
    title: "Cold brew",
    des: "Cold brew, a trendy and refreshing coffee option, is made by steeping coarsely ground coffee beans in cold water for an extended period. This method of coffee service results in a smooth, low-acid brew, often served over ice and enjoyed for its bold flavor and subtle sweetness.",
  },
];

const Hero = () => {
  return (
    <section className="mt-10 mb-24">
      <Carousel autoplay dots={true} draggable={false} className="-z-30">
        {images.map((imageUrl, index) => (
          <div key={index} className="max-h-full overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 mb-20 md:mb-0">
              <div className="w-full md:w-2/4 p-5">
                <div className="mb-10 max-h-min">
                  <h1 className="text-xl md:text-3xl lg:text-6xl text-white uppercase mb-4">
                    {imageUrl.title}
                  </h1>
                  <p className="text-white text-xs md:text-sm uppercase w-full">
                    {imageUrl.des}
                  </p>
                </div>
                <button className="border rounded-sm px-4 py-2 text-white hover:text-[#361500] hover:bg-white font-semibold">
                  <Link href={"/signin"}>Taste Now</Link>
                </button>
              </div>
              <div className="max-w-max max-h-full p-5">
                <img
                  src={imageUrl.image}
                  alt={`Image ${index + 1}`}
                  className="h-auto w-96"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
