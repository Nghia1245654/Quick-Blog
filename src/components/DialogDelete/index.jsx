import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Item } from "@radix-ui/react-dropdown-menu"

export function DialogDelete({ open, setOpen, handleDelete, idDelete, onConfirm }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-lg leading-none font-semibold text-red-600">Confirm delete </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            This action cannot be undone. Are you sure you want to delete?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button 
            variant="outline" type="button"
            onClick={() => setOpen(false)}
            >Cancel</Button>
          </DialogClose>
          <Button
            type="button"
            onClick={() => onConfirm()}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
