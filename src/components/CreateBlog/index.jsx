import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-hot-toast";
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  // xử lý tag

  const [image, setImage] = useState(null);


  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div>
        <h2 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-16 text-primary text-center mt-10 mb-8">
          📝 Create a New Blog
        </h2>

        <form className="grid gap-6">
          <div className="space-y-4">
            <div>
              <label className="font-medium block mb-2">Blog Image</label>
              <div className="border border-dashed border-gray-400 rounded-lg p-4 grid justify-center">
                <label
                  htmlFor="blog-image"
                  className="border-gray-400 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 transition"
                >
                  <div className="text-sm text-gray-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-upload inline-block mr-2 w-5 h-5"
                    >
                      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M7 9l5 -5l5 5"></path>
                      <path d="M12 4l0 12"></path>
                    </svg>
                    Click to upload image
                  </div>
                </label>
                <input
                  id="blog-image"
                  accept="image/*"
                  type="file"
                  className="hidden"
                  onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium">
                Blog Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                className="border-input h-9 w-full rounded-md border px-3 py-1"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium"
              >
                Blog Content
              </label>
              <Editor
                apiKey="6qiluy8w50xqs31yne724ppi0foa2whmic87byawy1t080il"
                init={{
                  plugins: [
                    // Core editing features
                    "anchor",
                    "autolink",
                    "charmap",
                    "codesample",
                    "emoticons",
                    "link",
                    "lists",
                    "media",
                    "searchreplace",
                    "table",
                    "visualblocks",
                    "wordcount",
                    // Your account includes a free trial of TinyMCE premium features
                    // Try the most popular premium features until Nov 28, 2025:
                    "checklist",
                    "mediaembed",
                    "casechange",
                    "formatpainter",
                    "pageembed",
                    "a11ychecker",
                    "tinymcespellchecker",
                    "permanentpen",
                    "powerpaste",
                    "advtable",
                    "advcode",
                    "advtemplate",
                    "ai",
                    "uploadcare",
                    "mentions",
                    "tinycomments",
                    "tableofcontents",
                    "footnotes",
                    "mergetags",
                    "autocorrect",
                    "typography",
                    "inlinecss",
                    "markdown",
                    "importword",
                    "exportword",
                    "exportpdf",
                  ],
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                  uploadcare_public_key: "69eaa83fa129473d256a",
                }}
              />
            </div>

            <div>
              <label htmlFor="tag" className="block mb-2 text-sm font-medium">
                Blog Tag
              </label>
              <div className="flex gap-2 ">
                <input
                  id="tag"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="Enter blog tag"
                  className="border-input h-9 w-full rounded-md border px-3 py-1"
                />

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 text-white"
                  onClick={() => {
                    // khi click vào button Add Tag, kiểm tra xem tag có rỗng không
                    if (tag.trim()) {
                      setTags([...tags, tag.trim()]);
                      setTag("");
                    }
                    //chỉ khi click mới hiện thị tag
                    // không hiển thị tag trùng nhau
                    if (tags.includes(tag.trim())) {
                      setTag("");
                      return;
                    }
                  }}
                >
                  Add Tag
                </button>
              </div>
            </div>
            <div class="flex gap-2">
              <span
                data-slot="badge"
                class="inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-primary text-white"
              >
                {tag}
                <span>
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
                    class="tabler-icon tabler-icon-x cursor-pointer w-3 h-3"
                  >
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </span>
              </span>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded"
              >
                Create Blog
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
