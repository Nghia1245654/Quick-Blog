import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Shield } from "lucide-react";

export function DialogRole({ open, setOpen }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[400px] p-6 space-y-6 ">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Change User Role
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Select the new role for this user. This action will take effect
            immediately.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2">
          <label className="text-sm font-medium">Select Role</label>
          <Select >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Roles</SelectLabel>

                <SelectItem value="user">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>User</span>
                  </div>
                </SelectItem>

                <SelectItem value="admin">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Admin</span>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="flex mb-2.5">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button >Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
