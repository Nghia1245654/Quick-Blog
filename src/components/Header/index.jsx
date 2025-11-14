import React from "react";
import logo from "@/assets/logo-lGLL0Zb0.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthMenu from "@/components/AuthMenu";
function Header({  }) {
  const [Themes, setThemes] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Mỗi khi Themes thay đổi => cập nhật class và lưu vào localStorage
  useEffect(() => {
    if (Themes === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [Themes]);
  const toggleTheme = () => {
    setThemes(Themes === "dark" ? "light" : "dark");
  };
  return (
    <div className="xl:container mx-auto py-4 fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Logo */}
        <Link to="/" data-discover="true">
          <img
            className="logo max-w-12 cursor-pointer"
            alt="Vite logo"
            src={logo}
          />
        </Link>

        <div className="flex justify-end items-center gap-2">
          
          <Link
            to="/CreateBlog"
            data-discover="true"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all
              disabled:pointer-events-none disabled:opacity-50
              [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4
              shrink-0 [&_svg]:shrink-0 outline-none
              focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
              aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
              bg-primary hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus text-white"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Create Blog
          </Link>
      
          <button
            onClick={toggleTheme}
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all
            disabled:pointer-events-none disabled:opacity-50
            [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4
            shrink-0 [&_svg]:shrink-0 outline-none
            focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
            aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
            hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3"
          >
            {Themes === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brightness-down"
              >
                <path d="M0 0h24v24H0z" stroke="none" fill="none"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M12 5l0 .01"></path>
                <path d="M17 7l0 .01"></path>
                <path d="M19 12l0 .01"></path>
                <path d="M17 17l0 .01"></path>
                <path d="M12 19l0 .01"></path>
                <path d="M7 17l0 .01"></path>
                <path d="M5 12l0 .01"></path>
                <path d="M7 7l0 .01"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path>
              </svg>
            )}
          </button>

          {/* User Button */}
          <AuthMenu />
        </div>
      </div>
    </div>
  );
}
export default Header;
