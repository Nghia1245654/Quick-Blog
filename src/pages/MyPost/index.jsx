import React, { useState } from "react";
import MyPost from "@/components/MyPost";
import { fetchListBlog } from "@/services/api/blog";
import { useEffect } from "react";
const MyPostTable = () => {
    const [listPost, setListPost] = useState([]);

  const handleMyBlog = async () => {
    try {
      // lấy blog nhưng theo id cua người dùng
      const res = await fetchListBlog({ userId: "current" });
      console.log("res:", res);
      setListPost(res.data.items);
    } catch (err) {
      console.error(err);
      setError(err.message); // Bây giờ dòng này mới hoạt động
    }
  };
  useEffect(() => {
    handleMyBlog();
  }, []);
  return (
    <div>
      <MyPost listPost={listPost} />
    </div>
  );
}
export default MyPostTable;