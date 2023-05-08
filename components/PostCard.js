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
import { useState } from "react";
import Link from "next/link";
export default function PostCard() {
  const [dropdownopen, setDropdownopen] = useState(false);
  const dropdownLink =
    "flex gap-3 py-2 items-center hover:bg-socialBlue hover:text-white -mx-2 px-4 transition-all rounded-md hover:scale-110 hover:shadow-md shadow-gray-300";
  return (
    <>
      <main className="">
        <Card>
          <div className="flex gap-3 ">
            <div>
              <Link href={"/profile"}>
                <Avatar />
              </Link>
            </div>
            <div className="grow">
              <p>
                <Link href={"/profile"}>
                  <span
                    className="font-semibold cursor-pointer hover:underline"
                    href="#"
                  >
                    Naresh&nbsp;
                  </span>
                </Link>
                added a new <span className="text-socialBlue">weeblet</span>
              </p>
              <p className="text-gray-500 text-sm ">2 Hour ago</p>
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
            <p className="my-3 text-sm">
              Just weebleted about my favorite anime scene on WeebWorld! 😍 This
              moment from Attack on Titan still gives me chills every time I
              watch it. Who else loves this show? #AttackOnTitan #AnimeLove"
            </p>
            <div className="overflow-hidden">
              <img
                className="rounded-md"
                src="https://external-preview.redd.it/oKEpTvgj6wChtmuqvx5KtUIn-8bECpJRfJHbbEkmwX4.png?format=pjpg&auto=webp&s=b47affa6768f522af35083462f81fc1922cc4e71"
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
              <Avatar />
            </div>
            <div className="border grow rounded-full relative">
              <textarea
                className="p-2 px-4 h-12 rounded-full w-full"
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
