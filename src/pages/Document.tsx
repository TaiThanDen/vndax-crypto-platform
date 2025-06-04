import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { BlogPage } from "@/components/ui/BlogPage";
import Blog from "@/components/ui/blog";

const Document = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<any>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleBlogClick = (blog: any) => {
        setSelectedBlog(blog);
    };

    const handleBack = () => {
        setSelectedBlog(null);
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col md:flex-row">
                {/* Sidebar: hidden on small, visible from md and up */}

                    <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
đ

                {/* Main content area */}
                <div className="flex-1 px-4 py-6 sm:px-8 lg:px-12 pb-20 md:pb-6">
                    {!selectedBlog ? (
                        <BlogPage
                            onBlogClick={handleBlogClick}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    ) : (
                        <Blog blog={selectedBlog} onBack={handleBack} />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Document;
