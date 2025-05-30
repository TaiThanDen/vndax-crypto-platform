import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75')",
        backgroundPositionY: "-300px",
      }}
    >
      <div className=" pb-75 rounded-lg p-8 text-center flex flex-col items-center">
        <h1 className=" text-3xl font-bold text-white mb-4">404</h1>
        <h2 className="text-6xl font-bold text-white mb-2">Page not found</h2>
        <p className="mb-6 text-lg font-light text-gray-300">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-block text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-primary-900"
        >
          &larr; Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
