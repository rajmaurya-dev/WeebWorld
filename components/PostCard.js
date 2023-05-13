import Avatar from "./Avatar";
import Card from "./Card";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsCardImage, BsTrash } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
import { BsBookmarkCheck } from "react-icons/bs";
import { BiHide } from "react-icons/bi";
import ClickOutHandler from "react-clickout-handler";
import TimeAgo from "timeago-react";
import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/contexts/userContext";
export default function PostCard({
  content,
  created_at,
  profiles: authorProfile,
}) {
  const [dropdownopen, setDropdownopen] = useState(false);
  const dropdownLink =
    "flex gap-3 py-2 items-center hover:bg-socialBlue hover:text-white -mx-2 px-4 transition-all rounded-md hover:scale-110 hover:shadow-md shadow-gray-300";
  const { profile: myProfile } = useContext(UserContext);
  return (
    <>
      <main className="">
        <Card>
          <div className="flex gap-3 ">
            <div>
              <Link href={"/profile"}>
                <Avatar url={authorProfile.avatar} />
              </Link>
            </div>
            <div className="grow">
              <p>
                <Link href={"/profile"}>
                  <span
                    className="font-semibold cursor-pointer hover:underline"
                    href="#"
                  >
                    {authorProfile.name}&nbsp;
                  </span>
                </Link>
                added a new <span className="text-socialBlue">weeblet</span>
              </p>
              <p className="text-gray-500 text-sm ">
                <TimeAgo datetime={created_at} />
              </p>
            </div>
            <div className="relative">
              <button
                onClick={() => setDropdownopen(true)}
                className="text-gray-400"
              >
                <IoIosMore />
              </button>
              {dropdownopen && (
                <div className="bg-red w-5 h-5 absolute top-0"></div>
              )}
              <ClickOutHandler onClickOut={() => setDropdownopen(false)}>
                <div className="relative">
                  {dropdownopen && (
                    <div className="absolute flex flex-col gap-2 -right-6 bg-white shadow-md shadow-gray-300 p-3 rounded-md border border-gray-100 w-52">
                      <a className={dropdownLink} href="">
                        <BsBookmarkCheck />
                        <h3>Save Weeblet</h3>
                      </a>
                      <a className={dropdownLink} href="">
                        <TbBellRinging />
                        <h3>Turn notification</h3>
                      </a>
                      <a className={dropdownLink} href="">
                        <BiHide />
                        <h3>Hide weeblet</h3>
                      </a>
                      <a className={dropdownLink} href="">
                        <BsTrash />
                        <h3>Delete weeblet</h3>
                      </a>
                    </div>
                  )}
                </div>
              </ClickOutHandler>
            </div>
          </div>
          <div>
            <p className="my-3 text-sm">{content}</p>
            <div className="overflow-hidden">
              <img
                className="rounded-md"
                src="https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-8 mt-5">
            <button className="flex gap-2 items-center">
              <AiOutlineHeart />
              123
            </button>
            <button className="flex gap-2 items-center">
              <AiOutlineComment />
              22
            </button>
            <button className="flex gap-2 items-center">
              <AiOutlineShareAlt />2
            </button>
          </div>
          <div className="flex gap-3 mt-4">
            <div>
              <Avatar url={myProfile?.avatar} />
            </div>
            <div className="border grow rounded-full relative z-20">
              <textarea
                className="p-2 px-4 h-12 rounded-full w-full z-[999]"
                placeholder="Leave a Weeblics"
              ></textarea>
              <button className="absolute top-3 right-3">
                <BsCardImage className="text-2xl text-gray-400" />
              </button>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}
