
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: "article-1",
    title: "Blockchain là gì và cách nó hoạt động?",
    content: "Blockchain là một sổ cái phân tán, ghi lại tất cả các giao dịch diễn ra trong mạng của nó. Thông tin được lưu trữ trong các khối được liên kết với nhau bằng mã hóa, tạo thành một chuỗi liên tục. Mỗi khối chứa một timestamp và dữ liệu giao dịch, đảm bảo tính minh bạch và bảo mật cao. Công nghệ Blockchain là nền tảng của các loại tiền điện tử như Bitcoin, Ethereum và nhiều ứng dụng phi tập trung khác."
  },
  {
    id: "article-2",
    title: "Phân tích kỹ thuật và phân tích cơ bản trong đầu tư tiền điện tử",
    content: "Phân tích kỹ thuật là việc dự đoán giá trong tương lai dựa trên dữ liệu giá trong quá khứ, thường sử dụng các biểu đồ và chỉ báo. Phân tích cơ bản đánh giá giá trị thực của một tài sản dựa trên các yếu tố nền tảng như công nghệ, đội ngũ phát triển, đối tác, và mô hình kinh doanh. Nhà đầu tư nên kết hợp cả hai phương pháp để có chiến lược đầu tư hiệu quả."
  },
  {
    id: "article-3",
    title: "DeFi là gì? Cơ hội và rủi ro trong tài chính phi tập trung",
    content: "DeFi (Decentralized Finance) hay Tài chính phi tập trung là một hệ sinh thái các ứng dụng tài chính được xây dựng trên nền tảng blockchain. DeFi cung cấp các dịch vụ tài chính truyền thống như cho vay, đi vay, giao dịch, bảo hiểm mà không cần trung gian như ngân hàng. Cơ hội của DeFi bao gồm khả năng tiếp cận toàn cầu, minh bạch cao và lợi nhuận tiềm năng, trong khi rủi ro bao gồm lỗ hổng bảo mật, biến động giá và rủi ro quy định pháp lý."
  },
  {
    id: "article-4",
    title: "NFT và tiềm năng của tài sản số hóa",
    content: "NFT (Non-Fungible Token) là token không thể thay thế đại diện cho quyền sở hữu tài sản số hoặc vật lý. Khác với tiền điện tử như Bitcoin, mỗi NFT là duy nhất và không thể hoán đổi. NFT mở ra tiềm năng cho việc số hóa và giao dịch nghệ thuật, âm nhạc, bất động sản ảo và nhiều loại tài sản khác trên blockchain, tạo ra tính thanh khoản và khả năng chứng minh quyền sở hữu cho những tài sản trước đây khó giao dịch."
  },
  {
    id: "article-5",
    title: "Quản lý rủi ro trong đầu tư tiền điện tử",
    content: "Quản lý rủi ro trong đầu tư tiền điện tử bao gồm các chiến lược như đa dạng hóa danh mục, đặt lệnh stop-loss, phân bổ vốn hợp lý, và chỉ đầu tư số tiền bạn có thể chấp nhận mất. Thị trường tiền điện tử có tính biến động cao, vì vậy việc tuân thủ kỷ luật đầu tư, nghiên cứu kỹ trước khi đầu tư, và có kế hoạch dài hạn là rất quan trọng để giảm thiểu rủi ro và bảo vệ vốn."
  }
];

const Knowledge = () => {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  
  return (
    <section className="bg-vndax-black py-16" id="knowledge">
      <div className="container-custom">
        <h2 className="section-title text-center text-white mb-12">Kiến thức đầu tư</h2>
        
        <Accordion type="single" collapsible className="w-full" value={expandedArticle || undefined} onValueChange={(value) => setExpandedArticle(value)}>
          {articles.map((article) => (
            <AccordionItem 
              key={article.id}
              value={article.id}
              className="border-b border-vndax-lightgray"
            >
              <AccordionTrigger className="py-6 text-left hover:text-vndax-green">
                <span className="text-lg font-medium">{article.title}</span>
              </AccordionTrigger>
              <AccordionContent className="py-4 text-gray-300">
                <p className="mb-4">{article.content}</p>
                <Button variant="link" className="text-vndax-green p-0 hover:text-vndax-darkgreen hover:no-underline">
                  Đọc thêm
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="border-vndax-green text-vndax-green hover:bg-vndax-green hover:text-white">
            Xem tất cả bài viết
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
