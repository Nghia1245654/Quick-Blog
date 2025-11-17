import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Spinner } from "@/components/ui/spinner";

export default function UserManagementTable({ listUser, loading, openDialog }) {
  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div className="overflow-auto">
        <h2 className="hero-title text-3xl sm:text-5xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
          🧩 User Management
        </h2>

        <div className="relative w-full overflow-x-auto">
          <Table className="w-full caption-bottom text-sm">
            <TableHeader>
              <TableRow className="hover:bg-muted/50 border-b transition-colors">
                <TableHead>USERNAME</TableHead>
                <TableHead>EMAIL</TableHead>
                <TableHead>ROLE</TableHead>
                <TableHead>ACTION</TableHead>
              </TableRow>
            </TableHeader>
            {loading ? (
              <div colSpan={4} className=" fixed flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Spinner />
              </div>
            ) : (
              <TableBody>
                {listUser.map((user) => (
                  <TableRow
                    className="hover:bg-muted/50 border-b transition-colors"
                    key={user.id}
                  >
                    {/* USERNAME */}
                    <TableCell className="p-2 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {user.username}
                    </TableCell>

                    {/* EMAIL */}
                    <TableCell className="p-2 max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {user.email}
                    </TableCell>

                    {/* ROLE BADGE */}
                    <TableCell className="p-2 whitespace-nowrap">
                      <Badge className="border px-2 py-0.5 text-xs bg-white text-black border-gray-300">
                        {user.role}
                      </Badge>
                    </TableCell>

                    {/* ACTION BUTTONS */}
                    <TableCell className="p-2 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {/* DELETE BUTTON */}
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => openDialog(user._id ?? user.id)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-5 h-5"
                                >
                                  <path d="M4 7h16"></path>
                                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                  <path d="M10 12l4 4m0 -4l-4 4"></path>
                                </svg>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Delete User</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        {/* CHANGE ROLE BUTTON */}
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="bg-primary/10 text-primary px-2 py-1 rounded-md">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-5 h-5"
                                >
                                  <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
                                  <path d="M15 9h.01"></path>
                                </svg>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Change Role</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
}
