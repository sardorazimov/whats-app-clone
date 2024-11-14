import { Menu, MessageCircle, Phone, CircleDot, Star, Archive, Settings, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function DesktopMenu() {
  return (
    <div className="flex flex-col h-screen bg-transparent w-52 text-gray-100">
      {/* Header */}
      <div className="flex items-center  space-x-4">
        <Button variant="ghost" size="icon" className="text-gray-100">
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex items-center space-x-2">
       {/*  */}
          <span className="text-lg font-medium">WhatsApp</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <div className="px-2 py-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-100 hover:bg-white/10 py-6"
          >
            <MessageCircle className="mr-4 h-5 w-5" />
            Chatlar
            <Badge className="ml-auto bg-green-500 text-white">1</Badge>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-gray-100 hover:bg-white/10 py-6"
          >
            <Phone className="mr-4 h-5 w-5" />
            Qo&apos;ng&apos;iroqlar
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-gray-100 hover:bg-white/10 py-6"
          >
            <CircleDot className="mr-4 h-5 w-5" />
            Status
          </Button>
        </div>

        <div className="px-2 py-2 mt-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-100 hover:bg-white/10 py-6"
          >
            <Star className="mr-4 h-5 w-5" />
            Saralangan xabarlar
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-gray-100 hover:bg-white/10 py-6"
          >
            <Archive className="mr-4 h-5 w-5" />
            Arxivlangan chatlar
            <Badge className="ml-auto bg-green-500 text-white">1</Badge>
          </Button>
        </div>

        <div className="px-2 py-2 mt-4 border-t border-white/10">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-100 hover:bg-white/10 py-6"
          >
            <Settings className="mr-4 h-5 w-5" />
            Sozlamalar
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-gray-100 hover:bg-white/10 py-6"
          >
            <User className="mr-4 h-5 w-5" />
            Profil
          </Button>
        </div>
      </nav>
    </div>
  )
}