import React from "react";

interface BlogCardProps {
  title: string;
  date: string;
  description?: string;
  image: string;
  onBlogClick: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  description,
  image,
  onBlogClick,
}) => {
  return (
    <div
      className="bg-card text-card-foreground rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
      onClick={onBlogClick}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-1">{date}</p>
        <p className="text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
};
