import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar.tsx";
import Footer from "@/components/layout/Footer.tsx";
import { Sidebar } from "@/components/Sidebar.tsx";
import BlogPage from "@/components/Blog/BlogPage.tsx";
import Blog from "@/components/Blog/BlogDetail.tsx";

const Document = () => {
  const [collapsed, setCollapsed] = useState(true);
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
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar: hidden on small, visible from md and up */}

        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Main content area */}
        <div className="flex-1 px-4 py-6 sm:px-8 lg:px-10 pb-20 md:pb-6">
          {!selectedBlog ? (
            <BlogPage
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ) : (
            <Blog blog={selectedBlog} onBack={handleBack} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Document;
