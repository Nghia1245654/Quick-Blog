import React from "react";
import ListBlog from "@/components/ListBlog";
import { useState, useEffect } from "react";
import { fetchListBlog } from "@/services/api/blog";
import Lottie from "lottie-react";
import LoadingSkeleton from "../Loadingskeleton";
import loadingFiles from "@/assets/loading_files.json";
export default function HeroSection({}) {
  const [loading, setLoading] = useState(true);
  const [listBlog, setListBlog] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);

  // Lấy danh sách blog ban đầu
  useEffect(() => {
    setLoading(true);
    fetchListBlog()
      .then((res) => {
        console.log("Response:", res.data);
        const items = res?.data?.items || [];
        setListBlog(items);
        setFilteredList(items); // ban đầu hiển thị toàn bộ
      })
      .catch((err) => {
        console.error("Error fetching list blog:", err);
        setListBlog([]);
        setFilteredList([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Xử lý khi nhấn nút Search
  const handleSearch = (e) => {
    e.preventDefault();
    //nếu ô search trống thì hiển thị toàn bộ blog
    if (!searchTerm.trim()) {
      setFilteredList(listBlog);
      setNoResults(false);
      return;
    }
    const result = listBlog.filter((post) =>
      post.title?.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
     setNoResults(result.length === 0);
    setFilteredList(result);
    console.log("Result:", result);
  };

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
              value={searchTerm}
              onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter search title..."
              className="w-full pl-4 h-9 bg-transparent outline-none border-none shadow-none
                focus-visible:ring-0 focus-visible:ring-offset-0
                placeholder:text-muted-foreground text-base md:text-sm"
            />
            <button
              onClick={handleSearch}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium
                h-9 bg-primary text-white px-8 py-2 m-1.5 rounded transition-all cursor-pointer
                hover:bg-primary/90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Search
            </button>
          </form>
        </div>
        {noResults ? (
          <div className="flex flex-col items-center justify-center ">
            <div>
              <Lottie animationData={loadingFiles} loop={true} />
            </div>
            <h1 className="text-center text-gray-500 text-xl font-medium mb-1">
              We cound not find any blog
            </h1>
            <p className="text-center text-gray-500 text-xs">
              Please try again with a different search query.
            </p>
          </div>
        ) : (
          <ListBlog
            listBlog={listBlog}
            loading={loading}
            filteredList={filteredList}
          />
        )}
      </div>
    </div>
  );
}
