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
      <div className="flex gap-2 md:gap-5 mt-1">
        <div className="flex gap-1 md:gap-3 items-center">
          <FaUserAlt />
          <button>People</button>
        </div>
        <div className="flex gap-1 md:gap-3 items-center">
          <SiOpenstreetmap />
          <button>Check in</button>
        </div>
        <div className="flex gap-1 md:gap-3 items-center">
          <MdMood />
          <button>Mood</button>
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
