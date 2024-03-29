import { useRouter } from "next/router";
import Card from "./Card";
import { BiHome, BiGroup, BiLogOut } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { RiNotificationBadgeLine } from "react-icons/ri";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
export default function NavigationCard() {
  const router = useRouter();
  const { asPath: pathname } = router;
  // const activeLinksClasses =
  //   "flex gap-1 md:gap-3 py-3 my-1 items-center bg-socialBlue text-white md:-mx-8 px-6 md:px-8 rounded-md shadow-green-300";
  // const nonActiveLinksClasses =
  //   "flex gap-1 md:gap-3 py-2 my-2 items-center hover:bg-socialBlue hover:bg-opacity-20 md:-mx-4 px-6 md:px-8 transition-all rounded-md hover:scale-110 hover:shadow-md shadow-gray-300";

  const activeLinksClasses =
    "text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-7 px-6 md:px-7 rounded-md shadow-md shadow-gray-300 items-center";
  const nonActiveLinksClasses =
    "text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300 items-center";
  const supabase = useSupabaseClient();
  const logout = async () => {
    await supabase.auth.signOut();
  };
  return (
    <Card noPadding={true} className={`bg-pink-500`}>
      <div className="md:px-12 py-2 flex md:flex-col gap-2 justify-between shadow-md shadow-gray-500 md:shadow-none ">
        <div className=" hidden md:block">
          <img src="/icon.png" alt="" />
        </div>
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
            pathname === "/notifications"
              ? activeLinksClasses
              : nonActiveLinksClasses
          }
        >
          <RiNotificationBadgeLine />
          <span className="hidden md:block">Notifications</span>
        </Link>
        <button onClick={logout} className={nonActiveLinksClasses}>
          <BiLogOut />
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </Card>
  );
}
