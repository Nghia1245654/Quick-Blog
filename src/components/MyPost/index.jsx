import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import React from "react";
export default function MyPost({listPost}) {
  const MyPost = [
    {
      title: "ty",
      content: "ádadsadds...",
    },
  ];
  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div className="overflow-auto">
        <h2 className="hero-title text-3xl sm:text-5xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
          ✍️ My Post
        </h2>

        <div className="relative w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>TITLE</TableHead>
                <TableHead>CONTENT</TableHead>
                <TableHead>ACTION</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {listPost.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.title}
                  </TableCell>

                  <TableCell className="max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.content}
                  </TableCell>

                  <TableCell className="whitespace-nowrap">
                    <div className="flex items-center gap-2 ">
                      {/* VIEW */}
                      <button
                        class="bg-blue-500 text-white px-2 py-1 rounded-md"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      >
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
                          class="tabler-icon tabler-icon-binoculars w-5 h-5"
                        >
                          <path d="M7 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                          <path d="M17 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                          <path d="M16.346 9.17l-.729 -1.261c-.16 -.248 -1.056 -.203 -1.117 .091l-.177 1.38"></path>
                          <path d="M19.761 14.813l-2.84 -5.133c-.189 -.31 -.592 -.68 -1.421 -.68c-.828 0 -1.5 .448 -1.5 1v6"></path>
                          <path d="M7.654 9.17l.729 -1.261c.16 -.249 1.056 -.203 1.117 .091l.177 1.38"></path>
                          <path d="M4.239 14.813l2.84 -5.133c.189 -.31 .592 -.68 1.421 -.68c.828 0 1.5 .448 1.5 1v6"></path>
                          <rect width="4" height="2" x="10" y="12"></rect>
                        </svg>
                      </button>

                      {/* DELETE */}
                      <button
                        class="bg-red-500 text-white px-2 py-1 rounded-md"
                        data-state="closed"
                        data-slot="tooltip-trigger"
                      >
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
                          class="tabler-icon tabler-icon-trash-x w-5 h-5"
                        >
                          <path d="M4 7h16"></path>
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                          <path d="M10 12l4 4m0 -4l-4 4"></path>
                        </svg>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
