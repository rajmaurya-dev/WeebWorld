import Card from "./Card";
import { BiHome, BiGroup, BiNotification, BiLogOut } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
export default function NavigationCard() {
  const activeLinks =
    "flex gap-3 py-2 items-center bg-socialBlue text-white -mx-10 px-10 rounded-md shadow-green-300";
  const nonActiveLinks =
    "flex gap-3 py-2 items-center hover:bg-socialBlue hover:bg-opacity-20 -mx-4 px-4 transition-all rounded-md hover:scale-110 hover:shadow-md shadow-gray-300";
  return (
    <Card>
      <div className="px-4 py-2 flex flex-col gap-2">
        <h2 className="text-gray-400 font-semibold">Navigation</h2>
        <a href="" className={activeLinks}>
          <BiHome />
          Home
        </a>
        <a href="" className={nonActiveLinks}>
          <BiGroup />
          Friends
        </a>
        <a href="" className={nonActiveLinks}>
          <BsFillBookmarkHeartFill />
          Saved Posts
        </a>
        <a href="" className={nonActiveLinks}>
          <BiNotification />
          Notifications
        </a>
        <a href="" className={nonActiveLinks}>
          <BiLogOut />
          Logout
        </a>
      </div>
    </Card>
  );
}
