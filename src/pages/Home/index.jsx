import React from "react";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ListBlog from "@/components/ListBlog";
import Lottie from "lottie-react";
import loadingFiles from "@/assets/loading_files.json";
import { fetchListBlog } from "@/services/api/blog";

export default function Home() {
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
    <>
    <HeroSection 
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
    />
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
          <div className="mx-auto max-w-7xl px-5 pb-20">
            <ListBlog
              listBlog={listBlog}
              loading={loading}
              filteredList={filteredList}
            />
          </div>
        )}
    </>
  );
}
