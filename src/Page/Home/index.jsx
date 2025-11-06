import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_KEY}/api/posts`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        console.log(data); // 👈 Xem cấu trúc dữ liệu thật sự
        setPosts(data.items);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);
  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  // Xóa tất cả thẻ HTML (vd: <h2>, <span>)
  function stripHtmlTags(html) {
    return html.replace(/<[^>]*>/g, "");
  }

  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      {/* Hero section */}
      <div>
        <div className="text-center mt-10 mb-8">
          <h1 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700">
            Your own <span className="text-primary">blogging</span>
            <br />
            platform.
          </h1>

          <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
            This is your space to think out loud, to share what matters, and to
            write without filters. Whether it's one word or a thousand, your
            story starts right here.
          </p>

          {/* Search form */}
          <form className="flex bg-card justify-between items-center max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded overflow-hidden">
            <input
              placeholder="Enter search title..."
              className="w-full pl-4 h-9 bg-transparent outline-none border-none shadow-none
                focus-visible:ring-0 focus-visible:ring-offset-0
                placeholder:text-muted-foreground text-base md:text-sm"
              defaultValue=""
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium
                h-9 bg-primary text-white px-8 py-2 m-1.5 rounded transition-all cursor-pointer
                hover:bg-primary/90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Search
            </button>
          </form>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              to={`/blog/${post._id || "unknown"}`}
              data-discover="true"
              className="grid h-full"
            >
              <div className="shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                <img
                  alt="12tsfasdasd"
                  className="w-full h-48 object-cover"
                  src={post.image}
                />
                <div className="p-4 bg-card">
                  <div className="flex gap-2 mb-2">
                    {Array.isArray(post.tags) &&
                      post.tags.length > 0 &&
                      post.tags.map((tag, i) => (
                        <span
                          key={i}
                         className="inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent bg-[#dcdafa] text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-ellipsis whitespace-nowrap overflow-hidden">
                    {post.title}
                  </h5>
                  <p className="text-foreground mb-2 text-xs text-ellipsis line-clamp-3">
                    {decodeHtml(stripHtmlTags(post.content))}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
