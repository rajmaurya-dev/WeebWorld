import Card from "./Card";
import { SiOpenstreetmap } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { MdMood } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import Avatar from "./Avatar";
export default function PostFormCard() {
  return (
    <Card>
      <div className="flex gap-1">
        <div>
          <Avatar />
        </div>
        <textarea
          className="grow p-3 h-14"
          placeholder={"Whats on your mind"}
        />
      </div>
      <div className="flex gap-5 mt-1">
        <div className="">
          <button className="flex gap-3 items-center">
            <FaUserAlt className="text-xl" />
            <span className="hidden md:block">People</span>
          </button>
        </div>
        <div className="">
          <button className="flex gap-3 items-center">
            <SiOpenstreetmap className="text-xl" />
            <span className="hidden md:block">Check in</span>
          </button>
        </div>
        <div className="">
          <button className="flex gap-3 items-center">
            <MdMood className="text-2xl" />
            <span className="hidden md:block">Mood</span>
          </button>
        </div>
        <div className="grow text-right">
          <button className="bg-socialBlue text-white px-6 py-2 rounded-md">
            <FaShareSquare />
          </button>
        </div>
      </div>
    </Card>
  );
}
