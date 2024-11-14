import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import DesktopMenu from "./desktopmenu"
import { Menu } from "lucide-react"

export function Sheets() {
  return (
    <Sheet >
      <SheetTrigger asChild >
        <Menu className="text-gray-100"/>
      </SheetTrigger>
      <SheetContent side={'left'} className="w-54 ">
       <DesktopMenu/>
      </SheetContent>
    </Sheet>
  )
}
