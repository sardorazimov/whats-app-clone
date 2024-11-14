import {
  Menu,
  MessageSquare,
  NotebookPen,
  Phone,
  Settings,
  Star,
  User,
  Users2,
} from "lucide-react";
import { Sheets } from "./sheets";

const RightSide = () => {
  return (
    <div className=" h-screen lg:flex hidden">
      <div className="fixed bg-white/5  w-14 h-screen ">
        <div className="flex flex-col items-center">
          <div className="flex-1 flex flex-col items-center justify-start space-y-4 pt-4">
            <button className="p-2 hover:text-white transition-colors duration-200">
              <Sheets />
            </button>
            <button className="p-2 hover:text-white transition-colors duration-200">
              <Phone size={24} className="text-gray-300 hover:bg-gray-600" />
            </button>
            <button className="p-2 hover:text-white transition-colors duration-200">
              <Users2 size={24} className="text-gray-300 hover:bg-gray-600" />
            </button>
          </div>
          <div className="bottom-0 mt-80 space-y-5">
            <button className="p-2 hover:text-white transition-colors duration-200">
              <Star size={24} className="text-gray-300 hover:bg-gray-600" />
            </button>
            <button className="p-2 hover:text-white transition-colors duration-200">
              <NotebookPen size={24} className="text-gray-300 hover:bg-gray-600" />
            </button>
            <button className="p-2 hover:text-white transition-colors duration-200">
              <Settings size={24} className="text-gray-300 hover:bg-gray-600" />
            </button>
            <button className="p-2 hover:text-white transition-colors duration-200">
              <User size={24} className="text-gray-300 hover:bg-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
