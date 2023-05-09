import { useRouter } from "next/router";
import Card from "./Card";
import { BiHome, BiGroup, BiNotification, BiLogOut } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Link from "next/link";
export default function NavigationCard() {
  const router = useRouter();
  const { asPath: pathname } = router;
  const activeLinksClasses =
    "flex gap-1 md:gap-3 py-3 my-1 items-center bg-socialBlue text-white md:-mx-8 px-6 md:px-8 rounded-md shadow-green-300";
  const nonActiveLinksClasses =
    "flex gap-1 md:gap-3 py-2 my-2 items-center hover:bg-socialBlue hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 transition-all rounded-md hover:scale-110 hover:shadow-md shadow-gray-300";
  return (
    <Card noPadding={true}>
      <div className="px-4 py-2 flex md:flex-col gap-2 justify-between shadow-md shadow-gray-500 md:shadow-none">
        <h2 className="text-gray-400 font-semibold hidden md:block">
          Navigation
        </h2>
        <Link
          href="/"
          className={
            pathname === "/" ? activeLinksClasses : nonActiveLinksClasses
          }
        >
          <BiHome />
          <span className="hidden md:block">Home</span>
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
          <span className="hidden md:block">Friends</span>
        </Link>
        <Link
          href="/saved"
          className={
            pathname === "/saved" ? activeLinksClasses : nonActiveLinksClasses
          }
        >
          <BsFillBookmarkHeartFill />
          <span className="hidden md:block">Saved Posts</span>
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
          <span className="hidden md:block">Notifications</span>
        </Link>
        <Link href="/login" className={nonActiveLinksClasses}>
          <BiLogOut />
          <span className="hidden md:block">Logout</span>
        </Link>
      </div>
    </Card>
  );
}
