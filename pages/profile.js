import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Cover from "@/components/Cover";
import FriendsInfo from "@/components/FriendsInfo";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFilePostFill, BsInfoSquare } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  const session = useSession();
  const userId = router.query.id;
  const { asPath: pathname } = router;
  const supabase = useSupabaseClient();
  useEffect(() => {
    if (!userId) {
      return;
    }
    fetchUser();
  }, [userId]);

  function fetchUser() {
    supabase
      .from("profiles")
      .select()
      .eq("id", userId)
      .then((result) => {
        if (result.error) {
          console.log("error");
          throw result.error;
        }
        if (result.data) {
          setProfile(result.data[0]);
          console.log("noerror");
        }
      });
  }
  const isMyUser = userId === session?.user?.id;
  const isPosts = pathname.includes("posts") || pathname === "/";
  const isAbout = pathname.includes("about");
  const isFriends = pathname.includes("friends");
  const isPhotos = pathname.includes("photos");
  const activeClasses =
    "flex items-center gap-2 px-3 py-1 font-bold text-blue-800 rounded-t-md border-blue-700 border-b-2";
  const tabClasses = "flex items-center gap-2 px-3 py-1 ";
  return (
    <>
      <Layout>
        <Card noPadding={true}>
          <div className="relative overflow-hidden rounded-md">
            <Cover url={profile?.cover} editable={isMyUser} />
            <div className="absolute top-28 left-2">
              {profile && <Avatar url={profile.avatar} size={"lg"} />}
            </div>
            <div className="p-2">
              <div className="ml-28">
                <h1 className=" text-3xl font-bold">{profile?.name}</h1>
                <p className="text-gray-500 leading-2">{profile?.place}</p>
              </div>
            </div>
            <div className="mt-2  ml-2 flex justify-around gap-0">
              <Link
                className={isPosts ? activeClasses : tabClasses}
                href={"/profile/posts"}
              >
                <BsFilePostFill />
                <span className="hidden md:block">Posts</span>
              </Link>
              <Link
                className={isAbout ? activeClasses : tabClasses}
                href={"/profile/about"}
              >
                <BsInfoSquare />
                <span className="hidden md:block">About</span>
              </Link>
              <Link
                className={isFriends ? activeClasses : tabClasses}
                href={"/profile/friends"}
              >
                <FaUserFriends />
                <span className="hidden md:block">Friends</span>
              </Link>
              <Link
                className={isPhotos ? activeClasses : tabClasses}
                href={"/profile/photos"}
              >
                <GrGallery />
                <span className="hidden md:block">Photos</span>
              </Link>
            </div>
          </div>
        </Card>
        {isPosts && (
          <div>
            <PostCard />
          </div>
        )}

        {isAbout && (
          <div>
            <Card>
              <h2 className="text-3xl mb-2">About me</h2>
              <p>
                Hey there, fellow otakus! I am Naresh, and I am a huge anime
                fan. I absolutely love One Piece and Naruto, and I am always
                looking for new recommendations. When I am not binging anime,
                you can usually find me playing video games or hanging out with
                my cats. I am excited to connect with other anime enthusiasts on
                WeebWorld and share my love for all things anime!
              </p>
              <p className="mt-2">
                I am a 25-year-old software engineer living in San Francisco. I
                have been into anime since I was a kid, and I have watched
                hundreds of series over the years. One Piece and Naruto are
                definitely my all-time favorites, but I also really enjoy
                slice-of-life and romance anime. In my free time, I like to read
                manga, play video games, and try out new recipes.
              </p>
              <h2 className="text-2xl mt-2">Personal information</h2>
              <ul>
                <li>Age:25</li>
                <li>Gender:Male</li>
                <li>Location: San Fransisco</li>
                <li>Occupation:Software Developer</li>
                <li>Education: BS in Computer Science</li>
              </ul>
              <h2 className="text-2xl mt-2">All-Time Favorite Anime</h2>
              <ol className="list-disc ml-2 mt-2">
                <li>Attack on titan</li>
                <li>One Piece</li>
                <li>Eminence in shadow</li>
              </ol>
            </Card>
          </div>
        )}

        {isFriends && (
          <div>
            <Card>
              <h2 className="text-3xl">Friends</h2>
              <div className="">
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
                <div className="border-b-2 p-2 -mx-2">
                  <FriendsInfo />
                </div>
              </div>
            </Card>
          </div>
        )}
        {isPhotos && (
          <div>
            <Card>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-md overflow-hidden h-48 items-center flex">
                  <img
                    src="https://images.unsplash.com/photo-1501769752-a59efa2298ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="img"
                  />
                </div>
                <div className="rounded-md overflow-hidden h-48 items-center flex">
                  <img
                    src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="img"
                  />
                </div>
                <div className="rounded-md overflow-hidden h-48 items-center flex">
                  <img
                    className="rounded-md"
                    src="https://plus.unsplash.com/premium_photo-1675610853926-6d69a0a99ea7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    alt="img"
                  />
                </div>
                <div className="rounded-md overflow-hidden h-48 items-center flex">
                  <img
                    src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="img"
                  />
                </div>
              </div>
            </Card>
          </div>
        )}
      </Layout>
    </>
  );
}
