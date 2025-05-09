import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-vndax-black py-8 lg:py-12">
      <div className="container-custom flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Giao dịch tài sản số <span className="text-vndax-green">an toàn</span> và <span className="text-vndax-green">đơn giản</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            VNDAX cung cấp nền tảng giao dịch tài sản số tiên tiến, bảo mật cao với phí giao dịch thấp. Bắt đầu hành trình đầu tư tài sản số của bạn ngay hôm nay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <Input 
              type="email" 
              placeholder="Email của bạn" 
              className="bg-vndax-darkgray border-vndax-lightgray"
            />
            <Button className="bg-vndax-green hover:bg-vndax-darkgreen text-white whitespace-nowrap">
              Đăng ký ngay <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xxl aspect-[1/1] overflow-hidden rounded-xl">
            <iframe 
              src="../../vndax_visual_final.html"
              title="Coin Animation" 
              className="w-full h-full border-none rounded-xl"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
