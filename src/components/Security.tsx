import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Activity } from 'lucide-react';

const securityFeatures = [
  {
    title: "Xác thực 2 lớp",
    description: "Bảo vệ tài khoản của bạn với lớp bảo mật bổ sung thông qua xác thực hai yếu tố (2FA).",
    icon: <ShieldCheck className="h-8 w-8 text-vndax-green" />,
    link: "#xac-thuc-2-lop"
  },
  {
    title: "Lưu trữ lạnh",
    description: "95% tài sản số được lưu trữ trong ví lạnh (cold wallet) để bảo vệ khỏi các cuộc tấn công mạng.",
    icon: <Lock className="h-8 w-8 text-vndax-green" />,
    link: "#luu-tru-lanh"
  },
  {
    title: "Hệ thống giám sát 24/7",
    description: "Đội ngũ an ninh mạng của chúng tôi giám sát hệ thống 24/7 để phát hiện và ngăn chặn các hoạt động đáng ngờ.",
    icon: <Activity className="h-8 w-8 text-vndax-green" />,
    link: "#giam-sat-24-7"
  }
];

const Security = () => {
  return (
    <section className="bg-vndax-black py-16" id="security">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-44xl font-bold section-title text-center text-white mb-12">An toàn và đáng tin cậy</h2>
        
        {/* Video Embed */}
        <div className="relative rounded-lg overflow-hidden bg-black mb-16 m-[150px] h-auto">
          <video 
            src="https://img.bgstatic.com/video/msg/Safe-5s-1732170834-2x.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-auto object-contain"
          ></video>
          {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-lg font-medium text-white">Công nghệ bảo mật tiên tiến</h3>
            <p className="text-sm text-gray-300">Tìm hiểu cách VNDAX bảo vệ tài sản số của bạn</p>
          </div> */}
        </div>
        
        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-vndax-darkgray rounded-lg p-6 hover:bg-vndax-lightgray transition-colors">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <a 
                href={feature.link} 
                className="text-vndax-green hover:underline inline-flex items-center"
              >
                Tìm hiểu thêm
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
