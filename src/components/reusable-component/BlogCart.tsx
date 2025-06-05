import React from "react";
import Document from "@/pages/Document.tsx";

interface BlogCardProps {
    title: string;
    date: string;
    description?: string;
    image: string;

    onClick: () => void;
}

 const BlogCart: React.FC<BlogCardProps> = ({
                                                      title,
                                                      date,
                                                      description,
                                                      image,
                                                      onClick,

                                                  }) => {
    return (
        <div
            className="bg-card text-card-foreground rounded-lg shadow hover:shadow-lg transition-shadow duration-200 max-w-[410px] mx-auton  "
            onClick={onClick}
        >
            <img src={image} alt={title} className="w-full rounded h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{date}</p>
                <p className="text-sm line-clamp-3">{description}</p>
            </div>
        </div>
    );
};
export default BlogCart;