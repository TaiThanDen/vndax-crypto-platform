import React, { useState, useEffect, useRef } from "react";
import { BlogCard } from "@/components/ui/BlogCart";

interface BlogPageProps {
    onBlogClick: (blog: any) => void;
    selectedCategory: string | null;
    setSelectedCategory: (cat: string | null) => void;
}
export const BlogPage: React.FC<BlogPageProps> = ({ onBlogClick, selectedCategory, setSelectedCategory }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const dragStartX = useRef<number | null>(null);
    const isDragging = useRef<boolean>(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const blogListRef = useRef<HTMLDivElement>(null);



    const featuredBlogs = [
        {
            title: "Binance luôn AN TOÀN: Cách chúng tôi bảo vệ tài sản của bạn 24/7",
            date: "2025-02-25",
            image: "/images/safu.jpg",
            tag: "BINANCE",
        },
        {
            title: "Thông điệp từ CEO: Bảy năm tiền phong trong d...",
            subtitle: "Thế giới tiền mã hóa đã đi được một chặng đường dài trong bảy năm qua.",
            date: "2024-07-12",
            image: "/images/ceo-message.jpg",
            tag: "#BINANCETURNS7",
        },
    ];

    const blogs = [
        {
            title: "Introducing Live Trading",
            date: "2025-04-01",
            description: "Live Trading trên Binance Square - Trải nghiệm Ngay Trong Các Buổi Livestream và Mua/Bán Cùng Với Các Chuyên Gia.",
            image: "/images/live-trading.jpg",
            category: "Futures",
        },
        {
            title: "The Real-World Power of Crypto",
            date: "2025-03-10",
            description: "Không chỉ là câu chuyện về pizza: Sức mạnh của tiền mã hóa trong thế giới thực tế.",
            image: "/images/real-world.jpg",
            category: "Thị trường",
        },
        {
            title: "Pizza Day",
            date: "2025-05-22",
            description: "Thưởng to đến hơn 55 triệu đô!",
            image: "/images/pizza.jpg",
            category: "Earn",
        },
        {
            title: "Hiểu Binance là gì (và không phải là gì)",
            date: "2025-03-14",
            description: "Hiểu rõ vai trò của chúng tôi trong không gian tiền mã hóa và cách chúng tôi bảo vệ tài sản của bạn.",
            image: "/images/what-binance-is.jpg",
            category: "Từ CEO",
        },
        {
            title: "Thông điệp từ CEO: Bảy năm tiền phong",
            date: "2024-07-12",
            description: "Thế giới tiền mã hóa đã đi được một chặng đường dài trong bảy năm qua.",
            image: "/images/ceo-message.jpg",
            category: "Từ CEO",
        },
        {
            title: "Tiểu sử: Richard Teng – CEO mới của Binance",
            date: "2023-11-22",
            description: "Richard Teng đã được bổ nhiệm làm CEO mới của Binance trong giai đoạn đầy thách thức.",
            image: "/images/richard-teng.jpg",
            category: "Lãnh đạo",
        },
    ];




    const categories = [
        "Từ CEO",
        "Lãnh đạo",
        "Hệ sinh thái",
        "Cộng đồng",
        "Thị trường",
        "Từ thiện",
        "P2P",
        "Futures",
        "Thanh toán",
        "Earn",
        "NFT",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        dragStartX.current = e.clientX;
        isDragging.current = true;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || dragStartX.current === null) return;

        const dragEndX = e.clientX;
        const dragDistance = dragStartX.current - dragEndX;

        if (Math.abs(dragDistance) > 50) {
            if (dragDistance > 0) {
                setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
            } else {
                setCurrentSlide((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
            }
            isDragging.current = false;
            dragStartX.current = null;
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        dragStartX.current = null;
    };
    const [isWideEnough, setIsWideEnough] = useState(false);
    const categoryContainerRef = useRef<HTMLDivElement>(null);

    const filteredBlogs = selectedCategory
        ? blogs.filter((blog) => blog.category === selectedCategory)
        : blogs;

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

    return (
        <div className="bg-background text-foreground">
            <h1 className="section-title">Binance Blog</h1>

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
                        <div className="bg-card rounded-lg shadow overflow-hidden cursor-pointer" >
                            <div className="relative">
                                <img
                                    src={blog.image}
                                    alt="Banner"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                                    {blog.tag}
                                </div>
                                {index === 0 && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">

                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <p className="text-muted-foreground text-xs mb-1">{blog.date}</p>
                                <h2 className="text-lg font-bold mb-1 line-clamp-2">{blog.title}</h2>
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
                                isSelected ? "bg-primary text-primary-foreground font-semibold" : ""}`}
                            onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            <div ref={blogListRef} className="grid md:grid-cols-2 lg:grid-cols-3  gap-6" >
                {filteredBlogs.map((blog, idx) => (
                    <BlogCard
                        key={idx}
                        {...blog}
                        onClick={() => onBlogClick(blog)}
                    />
                ))}
            </div>
        </div>
    );
};