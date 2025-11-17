import React, { useState } from "react";
import MyPost from "@/components/MyPost";
import { DialogDelete } from "@/components/DialogDelete";
import { fetchListBlog } from "@/services/api/blog";
import { useEffect } from "react";
import AuthContext from "@/contexts/authContext";
import { useContext } from "react";
import { deleteBlog } from "@/services/api/blog";
const MyPostTable = () => {
    const [listPost, setListPost] = useState([]);
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [Open, setOpen] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const openDialog = (id) => {
      setIdDelete(id);
      setOpen(true);
    };
 const handleDelete=async(id)=>{
  try{
    
     // gọi hàm xóa blog khỏi server
     await deleteBlog(id);
    //cập nhật lại listPost sau khi xóa
    setListPost(listPost.filter((item) => item._id !== idDelete));
    setOpen(false);
  }catch(err){
    console.error(err);
    setError(err.message);
  }
 }
 const handleViewBlog=async(id)=>{
  try{
    // khi nhấn vào sẽ chuyển sang trang BlogDetail của blog đó
    window.location.href = `/blog/${id}`;
  }catch(err){
    console.error(err);
    setError(err.message);
  }
 }

const { role, userInfo } = useContext(AuthContext);
  const handleMyBlog = async () => {
    try {
      setLoading(true);
      // nếu role là user thì lấy blog nhưng theo id cua người dùng
      if (role === "user") {
        const res = await fetchListBlog();
        console.log("res:", res.data.items);
        //filter blog theo userId
        const filteredPosts = res.data.items.filter(
          (post) => post.author._id === userInfo.id
          
        );
        setListPost(filteredPosts);
      }
      // nếu role là admin thì lấy tất cả blog
      else if (role === "admin") {
        const res = await fetchListBlog({});
        console.log("res:", res);
        setListPost(res.data.items);
      }
    } catch (err) {
      console.error(err);
      setError(err.message); // Bây giờ dòng này mới hoạt động
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
   if (!userInfo?.id) return;
  if (role !== "user" && role !== "admin") return;
      handleMyBlog();
    
  }, [userInfo, role]);
  return (
    <div>
      <MyPost listPost={listPost}  Loading={Loading}  openDialog={openDialog} handleViewBlog={handleViewBlog} />
      <DialogDelete open={Open} setOpen={setOpen} idDelete={idDelete}  onConfirm={() =>handleDelete(idDelete)} />
    </div>
  );
}
export default MyPostTable;