import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

type BlogContent = {
    title: string;
    authorInfo: string;
    postdate: string;
    imageUrl: string;
    imageAlt: string;
    footer: string;

};

interface BlogProps {
    blog: BlogContent;
    onBack: () => void;
}

const blogData: BlogContent = {
    title: "Live Trading Trên VNDAX — Trải nghiệm Ngay Trong Các Buổi Livestream Về Crypto",
    authorInfo: "VNDAX Team",
    postdate: "01/06/2025",
    imageUrl: "https://i.imgur.com/XBEKUJK.jpg",
    imageAlt: "Livestream trading feature showcase",
    footer:
        "Cảnh Báo Rủi Ro: Giá tiền mã hóa có thể biến động mạnh và rủi ro cao. ... VNDAX không chịu trách nhiệm cho bất kỳ tổn thất nào. Vui lòng tham khảo Điều khoản Sử dụng và Cảnh báo Rủi ro để biết thêm chi tiết.",
};

const BlogPage: React.FC<BlogProps> = ({ blog, onBack }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id], footer[id], p[id], h2[id], h3[id]");
            let currentSection = null;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom > 100) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        { id: "mainpoints", label: "Điểm chính" },
        { id: "usercanwatch", label: "Cách thức tham gia" },
        { id: "more", label: "Thông tin hữu ích" },
    ];

    return (
        <div className="flex flex-col lg:flex-row bg-[hsl(var(--background))] duration-300 text-left">
            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto text-xl text-left sm:text-xs md:text-xl leading-7 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] duration-300">
                {/* Header Section */}
                <section className="md:px-1 md:pb-2 md:pt-1" id="mainpoints">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={onBack}
                                className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-md  bg-[hsl(var(--background))] hover:bg-[hsl(var(--muted-background))] transition-colors"
                            >
                                <ChevronLeft size={30} />
                                Quay lại
                            </button>
                        </div>
                        <h1 className=" sm:text-xl md:text-3xl  font-bold m:mb-1">{blog.title}</h1>
                        <div className="text-[hsl(var(--muted-foreground))] mb-0 text-xs md:text-sm  space-x-3">
                            <span>{blog.authorInfo}</span>
                            <span className="text-2xl">-</span>
                            <span>{blog.postdate}</span>
                        </div>
                    </div>
                </section>


                {/* Main Points */}
                <section id="mainpoints" className="mx-4 pb-10" data-aos="fade-up">
                    <h1 className="text-lg md:text-xl font-semibold mb-3">Điểm chính:</h1>
                    <ul className="list-disc pl-6 space-y-2 text-base font-semilight text-foreground">
                        <li>Live Trading cho phép bạn xem phân tích trực tiếp và hành động ngay lập tức.</li>
                        <li>Không cần chuyển ứng dụng hay sao chép thiết lập giao dịch.</li>
                        <li>Creator có thể chia sẻ giao dịch thực tế và nhận hoa hồng từ người xem.</li>
                        <li>Trải nghiệm liền mạch giữa nội dung và hành động giao dịch.</li>
                    </ul>
                </section>

                {/* Image Section */}
                <section className="max-w-4xl mx-auto px-4 mt-6" id="mainpoints" data-aos="fade-up">
                    <img
                        src={blog.imageUrl}
                        alt={blog.imageAlt}
                        className="w-full h-auto rounded-md shadow"
                    />
                </section>

                {/* Content Section */}
                <section id="usercanwatch" className="bg-background mt-8 space-y-5 text-base leading-relaxed text-foreground">
                    <p>
                        Điều gì sẽ xảy ra nếu bạn có thể xem một trader phân tích chiến lược của họ qua chia sẻ màn hình, biểu đồ và bình luận trực tiếp — và có thể hành động ngay lập tức dựa trên thông tin đó mà không cần chuyển ứng dụng hay bỏ lỡ thời điểm? Giờ đây điều đó đã khả thi, với <strong>Live Trading</strong>: một cách giao dịch hoàn toàn mới thông qua nội dung trực tiếp, được tích hợp ngay trong <strong className="text-vndax-darkgreen">VNDAX</strong> — nền tảng mạng xã hội dành riêng cho crypto.
                    </p>

                    <p>
                        Không còn phải chuyển tab hay sao chép thiết lập một cách thủ công. Live Trading kết hợp tất cả — kiến thức, lời bình luận và hành động giao dịch — vào một trải nghiệm liền mạch. Trong bài blog này, chúng tôi sẽ giới thiệu cách hoạt động, lợi ích cho cả người dùng và creator, và cách nó đang giúp việc giao dịch crypto trở nên nhanh hơn, dễ dàng hơn và kết nối hơn bao giờ hết.
                    </p>

                    <p>
                        Live Trading là một tính năng mới trong VNDAX cho phép bạn theo dõi các phân tích thị trường theo thời gian thực — và hành động ngay lập tức, tất cả chỉ trong một buổi livestream.
                    </p>

                    <p>
                        Dựa trên khả năng phát trực tiếp (LIVE) của VNDAX — bao gồm âm thanh, video và chia sẻ màn hình — tính năng này bổ sung thêm một lớp tương tác mới. Dù là hướng dẫn đọc biểu đồ, chia sẻ màn hình hay phân tích trực tiếp, creator có thể làm nổi bật các token họ đang phân tích, hiển thị danh mục đầu tư và chia sẻ các giao dịch đang thực hiện.
                    </p>

                    {/* Viewer Actions Section */}
                    <section id="usercanwatch" className="space-y-4">
                        <p className="text-xl md:text-2xl font-semibold text-foreground">
                            Người xem có thể theo dõi và hành động chỉ với một lần chạm.
                        </p>

                        <ul className="list-disc list-inside text-foreground font-semilight space-y-2">
                            <li>Khi creator chia sẻ một giao dịch, giao dịch đó sẽ hiển thị dưới dạng thẻ chiến lược (strategy card) trong livestream.</li>
                            <li>Nhấn vào để xem chi tiết — sau đó đặt lệnh Spot hoặc Futures ngay mà không cần rời khỏi buổi livestream.</li>
                            <li>Trải nghiệm mượt mà này biến nội dung trực tiếp thành giao dịch trực tiếp.</li>
                            <li>Không cần chuyển tab hay sao chép thủ công — chỉ cần nhấn vào thẻ chiến lược để hành động.</li>
                        </ul>

                        <p>
                            Dù bạn đang theo dõi một tín hiệu breakout của BTC hay phân tích chiến lược futures, bạn có thể chuyển từ thông tin sang hành động chỉ trong vài giây — tất cả đều trong ứng dụng VNDAX.
                        </p>

                        <p>
                            Live Trading giúp kết nối giữa nội dung và hành động giao dịch. Đối với người dùng, đây là cơ hội để không chỉ theo dõi thụ động mà còn thực sự tham gia. Bạn có thể vào livestream, nắm bắt lập luận của trader theo thời gian thực và hành động ngay lập tức — mà không rời khỏi buổi stream.
                        </p>

                        <p>
                            Với creator, đó không chỉ là việc chia sẻ phân tích. Bạn có thể hiển thị giao dịch thực tế, công khai cho cộng đồng xem và nhận chia sẻ phí giao dịch khi người xem làm theo chiến lược của bạn. Cách hoạt động như sau:
                        </p>

                        <h2 className="text-lg font-semibold mt-6">
                            Đối với Người Xem: Từ Xem Sang Giao Dịch Crypto Trong Vài Giây
                        </h2>

                        <p>
                            Live Trading biến livestream thành trải nghiệm có thể hành động. Thay vì chỉ ngồi xem, bạn có thể theo dõi chiến lược thực tế và đặt lệnh — mà không gián đoạn.
                        </p>

                        <h3 className="text-md font-semibold mt-4">Cách thực hiện:</h3>
                        <ul className="list-disc list-inside text-foreground space-y-2">
                            <li>Tham gia một buổi livestream trên VNDAX và theo dõi trader thực hiện phân tích chiến lược của họ.</li>
                            <li>Mở tab Chiến lược (Strategy) để xem các giao dịch được chia sẻ trong buổi livestream, hoặc tìm thẻ giao dịch được ghim hiển thị chiến lược cụ thể.</li>
                            <li>Nhấn vào giao dịch để xem chi tiết, bao gồm cặp giao dịch, hướng giao dịch và khối lượng lệnh — sau đó đặt lệnh trực tiếp từ buổi livestream.</li>
                            <li>Vẫn ở lại trong buổi phát sóng khi bạn giao dịch, và học bằng cách thực hành — theo thời gian thực.</li>
                        </ul>

                        <h2 className="text-lg font-semibold mt-6">
                            Đối với Creator: Chia Sẻ Giao Dịch, Kiếm Hoa Hồng, Phát Triển Cộng Đồng
                        </h2>

                        <p>
                            Live Trading mở ra một cách mới để bạn thể hiện kỹ năng giao dịch, mở rộng cộng đồng và gia tăng thu nhập từ nội dung — tất cả đều trong hệ sinh thái VNDAX. Để bật tính năng này, bạn cần có ít nhất 1.000 người theo dõi trên VNDAX. Nếu bạn là trader dày dặn nhưng chưa đủ lượt theo dõi, hãy cân nhắc tham gia Chương trình Ươm Mầm Live Trading trên VNDAX.
                        </p>
                    </section>

                    {/* More Info Section */}
                    <section id="more" data-aos="scroll-up" className="space-y-4">
                        <p className="font-semibold">
                            Khi đã được kích hoạt <strong className="text-vndax-darkgreen">Live Trading</strong>, bạn có thể:
                        </p>

                        <ul className="list-disc list-inside text-foreground space-y-2">
                            <li>Chia sẻ tối đa 100 giao dịch Spot hoặc Futures trong quá khứ trong mỗi buổi livestream, giúp khán giả hiểu rõ phong cách và lịch sử giao dịch của bạn.</li>
                            <li>Ghim các giao dịch dưới dạng thẻ chiến lược xuất hiện ngay trong buổi stream — để người xem dễ dàng theo dõi và đặt lệnh chỉ với một lần chạm.</li>
                            <li>Nhận hoa hồng lên đến 50% từ phí giao dịch khi người xem sao chép giao dịch của bạn — mức hoa hồng cao hơn có thể được VNDAX cấp cho các creator nổi bật.</li>
                        </ul>

                        <h2 className="text-lg font-semibold mt-6">Lợi Ích Nổi Bật của Live Trading Trên VNDAX</h2>

                        <p>
                            Live Trading không chỉ là một tính năng mới. Nó là bước tiến tiếp theo cho VNDAX — đang dần trở thành điểm đến hàng đầu cho việc học hỏi, giao dịch và kết nối trong thế giới crypto — một nơi mà cộng đồng không chỉ bàn luận, mà còn hành động cùng nhau.
                        </p>

                        <p>
                            Với người dùng, Live Trading giảm bớt rào cản giữa việc học và hành động. Thay vì xem một livestream rồi phải mở ứng dụng khác để giao dịch, bạn có thể làm mọi thứ trong một luồng thống nhất. Với creator, đây là công cụ mạnh mẽ để thể hiện chiến lược thật, xây dựng niềm tin và nhận phần thưởng.
                        </p>

                        <p>
                            Bằng cách kết nối giữa thông tin và hành động, Live Trading đang đưa chúng ta đến gần hơn với một trải nghiệm crypto cởi mở, tương tác và có thể hành động ngay. Đây không phải là những bài học lý thuyết hay copy trade bị động — mà là một trải nghiệm trực tiếp, linh hoạt và bắt kịp thời điểm.
                        </p>
                    </section>
                </section>


                {/* Footer */}
                <br></br>
                <br></br>
                <footer
                    className="bg-[hsl(var(--background))] border-t px-6 py-6 text-center text-xs text-gray-500"
                    data-aos="fade-up"
                >
                    {blog.footer}
                </footer>
            </main>

            {/* Sidebar */}
            <aside className="hidden lg:block w-60 sticky top-32 h-fit px-4 py-20 bg-[hsl(var(--background))]">
                <h3 className="text-lg font-semibold mb-6 text-[hsl(var(--foreground))]">Nội dung</h3>

                <ul className="relative pl-6">
                    {/* Vertical Line */}
                    <div className="absolute left-[0.1rem] top-0 bottom-0 w-px bg-gray-600" />

                    {sections.map((section, index) => (
                        <li key={section.id} className="relative mb-6 ">
                            {/* Diamond Marker */}
                            <span
                                className={`absolute left-0 top-1.5 w-3 h-3 transform rotate-45 border-2 ${
                                    activeSection === section.id
                                        ? "bg-vndax-green border-vndax-green shadow-[0_0_8px_rgba(74,222,128,0.7)]"
                                        : "bg-[hsl(var(--background))] border-gray-500"
                                }`}
                            ></span>

                            {/* Section Label */}
                            <a
                                href={`#${section.id}`}
                                className={`block pl-6 text-sm transition-colors pb-10 duration-300 ${
                                    activeSection === section.id
                                        ? "text-vndax-green font-semibold "
                                        : "text-gray-400 hover:text-vndax-darkgreen"
                                }`}
                            >
                                <p>{section.label}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>

        </div>
    );
};

export default function App() {
    const handleBack = () => {
        window.location.reload();
    };

    return <BlogPage blog={blogData} onBack={handleBack} />;
}
