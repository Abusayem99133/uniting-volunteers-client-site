import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "animate.css";
const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        pagination={true}
        loop={true}
        // autoplay={{
        //   delay: 2000,
        // }}
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/Jn1c8M0b/pexels-thirdman-7656742.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="animate__animated animate__fadeInDown mb-5 text-5xl font-bold">
                  We Try To Help People With Volunteering{" "}
                </h1>
                <p className="mb-5 animate__animated animate__fadeInUp">
                  Try Our Programs And Help People For Their Needs
                </p>
                <div className="space-x-4">
                  <button
                    data-aos="fade-right"
                    className="border-2 py-2 px-4 hover:bg-orange-500 hover:border-orange-500"
                  >
                    Donate
                  </button>
                  <button
                    data-aos="fade-left"
                    className=" py-2 px-4 bg-orange-700 hover:bg-blue-950"
                  >
                    Check Our Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/k4fNXzRL/pexels-ron-lach-9543732.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="animate__animated animate__fadeInDown mb-5 text-5xl font-bold">
                  We Try To Help People With Volunteering{" "}
                </h1>
                <p className="mb-5 animate__animated animate__fadeInUp">
                  Try Our Programs And Help People For Their Needs
                </p>
                <div className="space-x-4">
                  <button
                    data-aos="fade-right"
                    className="border-2 py-2 px-4 hover:bg-orange-500 hover:border-orange-500"
                  >
                    Donate
                  </button>
                  <button
                    data-aos="fade-left"
                    className=" py-2 px-4 bg-orange-700 hover:bg-blue-950"
                  >
                    Check Our Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/MZ3bkkSQ/pexels-newmanphotographs-14831743.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="animate__animated animate__fadeInDown mb-5 text-5xl font-bold">
                  We Try To Help People With Volunteering{" "}
                </h1>
                <p className="mb-5 animate__animated animate__fadeInUp">
                  Try Our Programs And Help People For Their Needs
                </p>
                <div className="space-x-4">
                  <button
                    data-aos="fade-right"
                    className="border-2 py-2 px-4 hover:bg-orange-500 hover:border-orange-500"
                  >
                    Donate
                  </button>
                  <button
                    data-aos="fade-left"
                    className=" py-2 px-4 bg-orange-700 hover:bg-blue-950"
                  >
                    Check Our Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
