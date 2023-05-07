import Card from "./Card";
import { BiHome, BiGroup, BiNotification, BiLogOut } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
export default function NavigationCard() {
  return (
    <Card>
      <div className="px-4 py-2">
        <h2 className="text-gray-400 font-semibold">Navigation</h2>
        <a href="" className="flex gap-3 py-3 items-center">
          <BiHome />
          Home
        </a>
        <a href="" className="flex gap-3 py-3 items-center">
          <BiGroup />
          Friends
        </a>
        <a href="" className="flex gap-3 py-3 items-center">
          <BsFillBookmarkHeartFill />
          Saved Posts
        </a>
        <a href="" className="flex gap-3 py-3 items-center">
          <BiNotification />
          Notifications
        </a>
        <a href="" className="flex gap-3 py-3 items-center">
          <BiLogOut />
          Logout
        </a>
      </div>
    </Card>
  );
}
