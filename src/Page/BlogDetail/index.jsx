import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetail() {
    // lấy id từ param route
    const [id, setId] = useState(useParams().id);
    const [detailBlog, setDetailBlog] = useState(null);

    useEffect(() => {
      if (!id) return;
      fetch(`${import.meta.env.VITE_URL_KEY}/api/posts/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch post");
          return res.json();
        })
        .then((data) => {
          console.log(data); // xem cấu trúc dữ liệu
          setDetailBlog(data);
        })
        .catch((err) => {
          console.error("Error fetching post:", err);
        });
    }, [id]);

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
      <div>
        {detailBlog ? (
          <div>
            <div className="text-center">
              <p className="text-primary font-medium">
                Published on {new Date(detailBlog.createdAt).toLocaleDateString()}
              </p>
              <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto py-4">
                {detailBlog.title}
              </h1>
              <p
                className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary"
              >
                {detailBlog.author?.username || 'Unknown'}
              </p>
            </div>
            <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
              <img
                alt=""
                className="rounded-3xl mb-5 mx-auto"
                src={detailBlog.image}
              />
            </div>
            <div
              className="blog-details rich-text max-w-3xl mx-auto px-4 text-left text-foreground"
            >
              {stripHtmlTags(decodeHtml(detailBlog.content))}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

