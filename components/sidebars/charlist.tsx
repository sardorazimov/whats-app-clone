import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { BookmarkIcon, CheckIcon, Download, MessageSquare, Users, Video } from 'lucide-react'

const chatData = [
  {
    id: 1,
    name: "Arşivlenmiş sohbetler",
    description: "ReactJS Uzbekistan .",
    icon: <Download className="h-6 w-6 text-blue-700" />,
    unreadCount: 12,
  },
  {
    id: 2,
    name: "Kayıtlı Mesajlar",
    description: "2 fotoğraf",
    icon: <BookmarkIcon className="h-6 w-6 text-blue-700" />,
    date: "05/11/2024",
    avatar:'/img/chat.jpg'
  },
  {
    id: 3,
    name: "Rasmlar",
    description: "Siz: Fotoğraf",
    avatar: "/img/chat.jpg",
    date: "05/11/2024",
    isRead: true,
  },
  {
    id: 4,
    name: "I Life This",
    description: "Video #General",
    avatar: "/img/chat.jpg",
    date: "23/08/2024",
    isRead: true,
  },
  {
    id: 5,
    name: "Sardor Azimov",
    description: "Siz: https://sardor-azimov.vercel.app/sign-in",
    avatar: "/img/chat.jpg",
    isRead: true,
  },
  {
    id: 6,
    name: "Azimov official",
    description: "Derdelerim bi dunya",
    avatar: "/img/chat.jpg",
    time: "22:21",
    unreadCount: 33,
  },
  {
    id: 7,
    name: "FUTBOL",
    description: "🏆🏅📨 Pul ishlashni boshlash uchun te...",
    avatar: "/img/chat.jpg",
    time: "22:00",
    unreadCount: 66,
  },
  {
    id: 8,
    name: "IZHORJON",
    description: "Sesli mesaj",
    avatar: "/img/chat.jpg",
    time: "21:52",
    isRead: true,
  },
  {
    id: 9,
    name: "My Love",
    description: "ComeBack i love you",
    avatar: "/img/chat.jpg",
    time: "21:46",
    unreadCount: 31,
  },
  {
    id: 10,
    name: "Sardor bek",
    description: "Хупти",
    avatar: "/img/chat.jpg",
    time: "21:18",
  },
  {
    id: 11,
    name: "My (Official)",
    description: "O'yin nomi: DECEIVE Inc. 🎮 O'yin n...",
    avatar: "/img/chat.jpg",
    time: "19:33",
    unreadCount: 2,
  },
]

export default function ChatList() {
  return (
    <div className="w-96 mt-32 fixed  text-gray-100 h-screen hover:overflow-y-auto">
      <section className="h-full ">
        {chatData.map((chat) => (
          <div key={chat.id} className="flex items-center space-x-4 p-4 hover:bg-white/10">
            <Avatar className="h-12 w-12">
              {chat.icon ? (
                chat.icon
              ) : chat.avatar ? (
                <AvatarImage src={chat.avatar} alt={chat.name} />
              ) : (
                <AvatarFallback>{chat.avatar}</AvatarFallback>
              )}
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{chat.name}</p>
              <p className="text-xs text-gray-400 truncate">{chat.description}</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <span className="text-xs text-gray-500">{chat.date || chat.time}</span>
              {chat.unreadCount && (
                <Badge variant="secondary" className="bg-blue-600">
                  {chat.unreadCount}
                </Badge>
              )}
              {chat.isRead && <CheckIcon className="h-4 w-4 text-blue-500" />}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}