import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchListBlog } from "@/services/api/blog";
import LoadingSkeleton from "@/components/Loadingskeleton";
import loadingFiles from "@/assets/loading_files.json";
export default function ListBlog({listBlog, loading,filteredList}) {
  

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {loading && (
        // show a grid of skeletons while loading
        Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-full">
            <LoadingSkeleton />
          </div>
        ))
      )}

      {!loading && Array.isArray(listBlog) && listBlog.length > 0 &&
        filteredList.map((post) => (
          <Link
            key={post?._id ?? Math.random().toString(36).slice(2)} // fallback key nếu cực kỳ cần
            to={`/blog/${post?._id ?? "unknown"}`}
            data-discover="true"
            className="grid h-full"
          >
            <div className="shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02] h-full">
              <img
                alt={post.title}
                className="w-full h-48 object-cover"
                src={post.image}
                onError={(e) => {
                  e.currentTarget.src = "/images/fallback-image.jpg";
                }}
              />
              <div className="p-4 bg-card">
                <div className="flex gap-2 mb-2 flex-wrap">
                  {Array.isArray(post?.tags) &&
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

                <h5 className="text-lg font-semibold mb-2 truncate">
                  {post.title}
                </h5>

                <p className="text-foreground mb-2 text-xs text-ellipsis line-clamp-3">
                  
                  {stripHtmlTags(decodeHtml(post.content))}...
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
