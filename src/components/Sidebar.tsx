import React, { useState } from "react";
import { BookText, FileText, BarChart2, Search, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const menuItems = [
    { icon: BookText, label: "Hướng dẫn giao dịch futures" },
    { icon: FileText, label: "Quy tắc giao dịch futures" },
    { icon: BarChart2, label: "Dữ liệu giao dịch futures" },
    { icon: Search, label: "Spot" },
    { icon: DollarSign, label: "Khoản vay ký quỹ" },
];

 const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative h-screen bg-[#0f0f0f] text-white transition-all duration-300 ${
                collapsed ? "w-16" : "w-64"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {collapsed && hovered && (
                <div className="absolute top-0 bottom-0 left-full w-10 flex items-center">
                    <div className="w-px h-full bg-gray-700" />
                    <button
                        className="absolute left-1 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded-full"
                        onClick={() => setCollapsed(false)}
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            )}

            <div className="p-4 flex flex-col gap-3">
                {menuItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3 text-sm hover:bg-gray-800 p-2 rounded cursor-pointer"
                    >
                        <item.icon size={20} />
                        {!collapsed && <span>{item.label}</span>}
                    </div>
                ))}
            </div>

            {!collapsed && (
                <button
                    className="absolute right-[-12px] top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded-full"
                    onClick={() => setCollapsed(true)}
                >
                    <ChevronLeft size={16} />
                </button>
            )}
        </div>
    );
};
export default Sidebar