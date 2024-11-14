import { List, NotebookPenIcon } from "lucide-react"
import { Input } from "../ui/input"
import ChatList from "./charlist"


const Sidebar = () => {
  return (
    <div className="fixed bg-white/10 lg:left-14 ">
     <div className="hidden lg:flex w-96 min-h-screen lg:flex-col ">
        <div className="flex w-full justify-between ">
            <h1 className="font-medium text-xl mt-5 mx-1">Chats</h1>
            <div className="mt-6 space-x-2 flex mx-1">
                <List className="text-gray-300"/>
                <NotebookPenIcon className="text-gray-300"/>
            </div>
        </div>
        <div className="mt-10 w-full  h-14 border- ">
          <Input className="border-neutral-400  placeholder:sticky"/>
        </div>
        <ChatList/>
     </div>
    </div>
  )
}

export default Sidebar