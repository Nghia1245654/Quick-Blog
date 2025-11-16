import React, { useState } from "react";
import CreateBlog from "@/components/CreateBlog";
import { createNewBlog } from "@/services/api/blog";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const CreateNewBlog = () => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    setTags([...tags, tagInput.trim()]);
    setTagInput("");
  };

  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };
  const [file, setFile] = useState(null);

  const handleUploadFile = (file) => {
    setFile(file);
  };

  const handleCreateBlog = async () => {
    setLoading(true);
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await res.json();
    console.log(result.secure_url); // ==> URL ảnh
    console.log("post:", title, content, tags);
    const PostBlog = {
      title,
      content,
      tags,
      image: result.secure_url,
    };
    try {
      const data = await createNewBlog(PostBlog);
      console.log("data:", data);
      toast.success("Create blog success!");
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message); // Hiển thị message ở đây
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <CreateBlog
        tagInput={tagInput}
        setTagInput={setTagInput}
        tags={tags}
        handleAddTag={handleAddTag}
        handleRemoveTag={handleRemoveTag}
        handleCreateBlog={handleCreateBlog}
        handleUploadFile={handleUploadFile}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        image={image}
        setImage={setImage}
        Loading={Loading}
      />
    </div>
  );
};

export default CreateNewBlog;
