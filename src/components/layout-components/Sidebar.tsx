import React, { useState, useEffect, useRef } from "react";
import {
    BookText,
    FileText,
    BarChart2,
    Search,
    DollarSign,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const menuItems = [
    { icon: BookText, label: "Hướng dẫn giao dịch futures" },
    { icon: FileText, label: "Quy tắc giao dịch futures" },
    { icon: BarChart2, label: "Dữ liệu giao dịch futures" },
    { icon: Search, label: "Spot" },
    { icon: Search, label: "Category" },
    { icon: DollarSign, label: "Khoản vay ký quỹ" },
];

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (v: boolean) => void;
    selectedCategory: string | null;
    setSelectedCategory: (cat: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed, selectedCategory, setSelectedCategory }) => {
    const [activePopup, setActivePopup] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const categoryContainerRef = useRef<HTMLDivElement>(null);
    const [isWideEnough, setIsWideEnough] = useState(false);

    const categories = [
        "Từ CEO", "Lãnh đạo", "Hệ sinh thái", "Cộng đồng", "Thị trường",
        "Từ thiện", "P2P", "Futures", "Thanh toán", "Earn", "NFT",
    ];

    const togglePopup = (idx: number) => {
        setActivePopup(prev => (prev === idx ? null : idx));
    };

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
        <>
            <motion.div
                animate={{ width: collapsed ? 64 : 260 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="hidden md:block relative h-screen text-[hsl(var(--foreground))] overflow-visible"
            >
                <div className="p-4 flex flex-col gap-2">
                    {menuItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 text-sm hover:bg-primary p-2 rounded cursor-pointer transition"
                        >
                            <item.icon size={20} />
                            <AnimatePresence>
                                {!collapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-[-12px] z-20">
                    <button
                        className="bg-[#2e2e2e] hover:bg-[#444] text-white p-1 rounded-full shadow-md border border-gray-700"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                    </button>
                </div>
            </motion.div>

            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background flex justify-around items-center pt-5">
                <div
                    ref={scrollRef}
                    className={`mb-10 pb-1 flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide transition-all duration-300 ${isWideEnough ? "justify-center flex-wrap" : "flex-nowrap"}`}
                >
                    {["All", ...categories].map((cat) => {
                        const isSelected = selectedCategory === (cat === "All" ? null : cat);

                        return (
                            <button
                                key={cat}
                                className={`flex-shrink-0 text-sm px-3 py-1 rounded-full shadow-md transition bg-[hsl(var(--background))] text-[hsl(var(--foreground))] hover:bg-primary hover:text-primary-foreground ${isSelected ? "bg-primary text-primary-foreground font-semibold" : ""}`}
                                onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
