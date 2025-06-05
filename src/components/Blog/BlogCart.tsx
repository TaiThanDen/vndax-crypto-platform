import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  description?: string;
  image: string;
  // Nếu có id thì thêm: id: string;
}

const BlogCart: React.FC<BlogCardProps> = ({
  title,
  date,
  description,
  image,
}) => {
  return (
    <Link to="/blog" className="h-full">
      <div className="bg-card text-card-foreground rounded-lg shadow hover:shadow-lg duration-200 max-w-[410px] min-h-[370px] flex flex-col mx-auto cursor-pointer h-full transform transition-transform hover:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full rounded-t h-40 object-cover"
        />
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-1">{date}</p>
          <p className="text-sm line-clamp-3 flex-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default BlogCart;
