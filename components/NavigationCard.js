import { useRouter } from "next/router";
import Card from "./Card";
import { BiHome, BiGroup, BiNotification, BiLogOut } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Link from "next/link";
export default function NavigationCard() {
  const router = useRouter();
  const { asPath: pathname } = router;
  const activeLinksClasses =
    "flex gap-3 py-3 my-1 items-center bg-socialBlue text-white -mx-10 px-10 rounded-md shadow-green-300";
  const nonActiveLinksClasses =
    "flex gap-3 py-2 my-2 items-center hover:bg-socialBlue hover:bg-opacity-20 -mx-4 px-4 transition-all rounded-md hover:scale-110 hover:shadow-md shadow-gray-300";
  return (
    <Card>
      <div className="px-4 py-2 flex flex-col gap-2">
        <h2 className="text-gray-400 font-semibold">Navigation</h2>
        <Link
          href="/"
          className={
            pathname === "/" ? activeLinksClasses : nonActiveLinksClasses
          }
        >
          <BiHome />
          Home
        </Link>
        <Link
          href="/profile/friends"
          className={
            pathname === "/profile/friends"
              ? activeLinksClasses
              : nonActiveLinksClasses
          }
        >
          <BiGroup />
          Friends
        </Link>
        <Link
          href="/saved"
          className={
            pathname === "/saved" ? activeLinksClasses : nonActiveLinksClasses
          }
        >
          <BsFillBookmarkHeartFill />
          Saved Posts
        </Link>
        <Link
          href="/notifications"
          className={
            pathname === "notification"
              ? activeLinksClasses
              : nonActiveLinksClasses
          }
        >
          <BiNotification />
          Notifications
        </Link>
        <Link href="/login" className={nonActiveLinksClasses}>
          <BiLogOut />
          Logout
        </Link>
      </div>
    </Card>
  );
}
