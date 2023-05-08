import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";
import { BsFilePostFill, BsInfoSquare } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
export default function ProfilePage() {
  return (
    <>
      <Layout>
        <Card noPadding={true}>
          <div className="relative overflow-hidden rounded-md">
            <div className="h-36 overflow-hidden flex justify-center items-center">
              <img
                className=""
                src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80"
              />
            </div>
            <div className="absolute top-28 left-4">
              <Avatar size={"lg"} />
            </div>
            <div className="p-4">
              <div className="ml-28">
                <h1 className=" text-3xl font-bold">Naruto Uchiha</h1>
                <p className="text-gray-500 leading-4">
                  Ninja school, Hidden Leaf Village
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-5">
              <Link className="" href={"/"}>
                <BsFilePostFill />
                Posts
              </Link>
              <Link className="" href={"/"}>
                <BsInfoSquare />
                About
              </Link>
              <Link className="" href={"/"}>
                <FaUserFriends />
                Friends
              </Link>
              <Link className="" href={"/"}>
                <GrGallery />
                Photos
              </Link>
            </div>
          </div>
        </Card>
      </Layout>
    </>
  );
}
