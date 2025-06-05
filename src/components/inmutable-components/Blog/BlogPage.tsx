import React, { useState, useEffect, useRef } from "react";
import  BlogCart  from "@/components/reusable-component/BlogCart.tsx";
import Document from "@/pages/Document.tsx";

interface BlogPageProps {
    onBlogClick: (blog: any) => void;
    selectedCategory: string | null;
    setSelectedCategory: (cat: string | null) => void;
}

 const BlogPage: React.FC<BlogPageProps> = ({ onBlogClick, selectedCategory, setSelectedCategory }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const dragStartX = useRef<number | null>(null);
    const isDragging = useRef<boolean>(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const blogListRef = useRef<HTMLDivElement>(null);
    const [isWideEnough, setIsWideEnough] = useState(false);
    const categoryContainerRef = useRef<HTMLDivElement>(null);

    const featuredBlogs = [
        {
            title: "VNDAX luôn AN TOÀN: Cách chúng tôi bảo vệ tài sản của bạn 24/7",
            date: "2025-02-25",
            image: "https://i.imgur.com/XBEKUJK.jpg",
            tag: "BINANCE",
            subtitle: "Bảo vệ tài sản của bạn mọi lúc mọi nơi"
        },
        {
            title: "Thông điệp từ CEO: Bảy năm tiền phong trong d...",
            subtitle: "Thế giới tiền mã hóa đã đi được một chặng đường dài trong bảy năm qua.",
            date: "2024-07-12",
            image: "https://images.alphacoders.com/116/1169181.jpg",
            tag: "#BINANCETURNS7",
        },
    ];

    const blogs = [
        {
            title: "Introducing Live Trading",
            date: "2025-04-01",
            description: "Live Trading trên VNDAX Square - Trải nghiệm Ngay Trong Các Buổi Livestream và Mua/Bán Cùng Với Các Chuyên Gia.",
            image: "https://i.ytimg.com/vi/FCAb8kQn90s/hqdefault.jpg",
            category: "Futures",
        },
        {
            title: "The Real-World Power of Crypto",
            date: "2025-03-10",
            description: "Không chỉ là câu chuyện về pizza: Sức mạnh của tiền mã hóa trong thế giới thực tế.",
            image: "https://media.licdn.com/dms/image/v2/C4E1BAQEEtbEVtow0LQ/company-background_10000/company-background_10000/0/1648575083256/crypto_power_cover?e=2147483647&v=beta&t=2KlerXr80tMFbzrWp5yo-R0n3RHHSMb1ZhztS5GZbtM",
            category: "Thị trường",
        },
        {
            title: "Pizza Day",
            date: "2025-05-22",
            description: "Thưởng to đến hơn 55 triệu đô!",
            image: "https://images.ctfassets.net/hzjmpv1aaorq/3RTCLGRJFZgzy44YOIUGHK/c6eff0ea84bb0ea64b99a47cae2f5a63/Copy_of_Blog_Images_-_Skilling__47_.jpg?q=70",
            category: "Earn",
        },
        {
            title: "Hiểu VNDAX là gì (và không phải là gì)",
            date: "2025-03-14",
            description: "Hiểu rõ vai trò của chúng tôi trong không gian tiền mã hóa và cách chúng tôi bảo vệ tài sản của bạn.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh7x-SKSK_gw3UuzcgB75xMMvOtJuaLvF6g&s",
            category: "Từ CEO",
        },
        {
            title: "Thông điệp từ CEO: Bảy năm tiền phong",
            date: "2024-07-12",
            description: "Thế giới tiền mã hóa đã đi được một chặng đường dài trong bảy năm qua.",
            image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/nam_ca_nhan_so_7_nam_2025_thumbnail_2b665aa462.jpg",
            category: "Từ CEO",
        },
        {
            title: "Tiểu sử: Nguyễn Văn A – CEO mới của VNDAX",
            date: "2023-11-22",
            description: "Nguyễn Văn A  đã được bổ nhiệm làm CEO mới của VNDAX trong giai đoạn đầy thách thức.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh7x-SKSK_gw3UuzcgB75xMMvOtJuaLvF6g&s",
            category: "Lãnh đạo",
        },
    ];

    const categories = [
        "Từ CEO", "Lãnh đạo", "Hệ sinh thái", "Cộng đồng", "Thị trường",
        "Từ thiện", "P2P", "Futures", "Thanh toán", "Earn", "NFT"
    ];

    const filteredBlogs = selectedCategory
        ? blogs.filter((blog) => blog.category === selectedCategory)
        : blogs;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            const width = entries[0].contentRect.width;
            setIsWideEnough(width >= 1315);
        });

        if (categoryContainerRef.current) {
            observer.observe(categoryContainerRef.current);
        }

        return () => observer.disconnect();
    }, []);


    const goToSlide = (index: number) => setCurrentSlide(index);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        dragStartX.current = e.clientX;
        isDragging.current = true;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || dragStartX.current === null) return;
        const dragDistance = dragStartX.current - e.clientX;

        if (Math.abs(dragDistance) > 50) {
            setCurrentSlide((prev) =>
                dragDistance > 0
                    ? (prev + 1) % featuredBlogs.length
                    : (prev - 1 + featuredBlogs.length) % featuredBlogs.length
            );
            isDragging.current = false;
            dragStartX.current = null;
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        dragStartX.current = null;
    };

    return (
        <div className="bg-background text-foreground">
            <h1 className="section-title">VNDAX Blog</h1>

            <div
                className="relative mb-8 cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {featuredBlogs.map((blog, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-500 ${
                            currentSlide === index ? "opacity-100" : "opacity-0 absolute inset-0"
                        }`}
                    >
                        <div
                            className="relative h-[400px] sm:h-[450px] md:h-[500px] transition-transform hover:scale-[1.01] rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => onBlogClick(blog)}
                        >
                            <img
                                src={blog.image}
                                alt="Banner"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-3 sm:p-6">
                                <div className="inline-flex w-fit bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded mb-1">
                                    {blog.tag}
                                </div>
                                <p className="text-white text-xs mb-1">{blog.date}</p>
                                <h2
                                    className="text-white text-sm sm:text-lg md:text-xl font-bold line-clamp-2 hover:underline cursor-pointer"
                                    onClick={() => onBlogClick(blog)}
                                >
                                    {blog.title}
                                </h2>
                                {blog.subtitle && (
                                    <h3
                                        className="text-white text-sm line-clamp-1"
                                    >
                                        {blog.subtitle}
                                    </h3>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {featuredBlogs.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-1 rounded-none ${
                                currentSlide === index ? "bg-primary" : "bg-muted"
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div
                ref={scrollRef}
                className={`mb-10 pb-1 flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide transition-all duration-300 ${isWideEnough ? "justify-center flex-wrap" : "flex-nowrap"}`}
            >
                {["All", ...categories].map((cat) => {
                    const isSelected = selectedCategory === (cat === "All" ? null : cat);
                    return (
                        <button
                            key={cat}
                            className={`flex-shrink-0 text-sm px-3 py-1 rounded-full shadow-md transition bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-primary hover:text-primary-foreground ${
                                isSelected ? "bg-primary text-primary-foreground font-semibold" : ""
                            }`}
                            onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            <div ref={blogListRef} className="grid md:grid-cols-Responsive-md lg:grid-cols-Responsive-lg gap-5">
                {filteredBlogs.map((blog, idx) => (
                    <BlogCart key={idx} {...blog} onClick={() => onBlogClick(blog)} />
                ))}
            </div>
        </div>
    );
};
export default BlogPage;