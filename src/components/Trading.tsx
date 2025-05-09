import React from "react";

const Trading = () => {
  return (
    <section className="bg-vndax-black py-16 lg:py-24" id="trading">
      <div className="container-custom flex flex-col lg:flex-row items-start justify-between">
        {/* Left Column - Phone Mockup with Video */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-auto h-[600px] overflow-hidden bg-vndax-darkgray shadow-lg">
            <video
              src="https://img.bgstatic.com/video/msg/Ex-EN-1734602916000.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-28 text-center lg:text-left self-start">
            Giao dịch cả khi đang di chuyển. Mọi lúc, mọi nơi.
          </h2>

          {/* QR Code and Text */}
          <div className="flex items-center gap-6 mb-11">
            <div className="bg-white rounded-2xl w-auto h-auto">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                alt="QR Code"
                className="w-auto h-[200px]"
              />
            </div>
            <p className="text-xl text-gray-300">
              Quét để tải về ứng dụng <br />
              <p className="text-xxl text-white font-bold">iOS và Android</p>
            </p>
          </div>

          {/* Platform Icons */}
          <div className="flex gap-32 mt-12">
            <div className="group flex flex-col items-center relative hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-[-25px] bg-vndax-darkgray rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/758px-Apple_logo_white.svg.png?20220821122232"
                alt="MacOS"
                className="w-auto h-10 mb-2 relative z-10"
              />
              <span className="text-gray-300 hover:text-white relative z-10">MacOS</span>
            </div>
            <div className="group flex flex-col items-center relative hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-[-25px] bg-vndax-darkgray rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://img.icons8.com/ios11/512/FFFFFF/windows-11.png"
                alt="Windows"
                className="w-auto h-12 mb-2 relative z-10"
              />
              <span className="text-gray-300 hover:text-white relative z-10">Windows</span>
            </div>
            <div className="group flex flex-col items-center relative hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-[-25px] bg-vndax-darkgray rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://cdn.freelogovectors.net/wp-content/uploads/2023/07/linux-logo-02-freelogovectors.net_.png"
                alt="Linux"
                className="w-auto h-12 mb-2 relative z-10"
              />
              <span className="text-gray-300 hover:text-white relative z-10">Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trading;
