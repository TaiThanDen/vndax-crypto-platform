import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-vndax-black py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-vndax-green font-bold text-2xl uppercase">VNDAX</a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-vndax-green transition-colors">Trang chủ</a>
            <a href="#trading" className="text-white hover:text-vndax-green transition-colors">Giao dịch</a>
            <a href="#security" className="text-white hover:text-vndax-green transition-colors">Bảo mật</a>
            <a href="#knowledge" className="text-white hover:text-vndax-green transition-colors">Kiến thức</a>
            <a href="#support" className="text-white hover:text-vndax-green transition-colors">Hỗ trợ</a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-vndax-black">Đăng nhập</Button>
          <Button className="bg-vndax-green hover:bg-vndax-darkgreen text-white">Đăng ký</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-vndax-darkgray mt-2 py-4">
          <div className="container-custom flex flex-col space-y-4">
            <a href="/" className="text-white hover:text-vndax-green transition-colors px-2 py-2">Trang chủ</a>
            <a href="#trading" className="text-white hover:text-vndax-green transition-colors px-2 py-2">Giao dịch</a>
            <a href="#security" className="text-white hover:text-vndax-green transition-colors px-2 py-2">Bảo mật</a>
            <a href="#knowledge" className="text-white hover:text-vndax-green transition-colors px-2 py-2">Kiến thức</a>
            <a href="#support" className="text-white hover:text-vndax-green transition-colors px-2 py-2">Hỗ trợ</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-vndax-black w-full">Đăng nhập</Button>
              <Button className="bg-vndax-green hover:bg-vndax-darkgreen text-white w-full">Đăng ký</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
