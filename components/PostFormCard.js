import Card from "./Card";
import { SiOpenstreetmap } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { MdMood } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import Avatar from "./Avatar";
import { useContext, useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "@/contexts/userContext";
export default function PostFormCard({ onPost }) {
  const [content, setContent] = useState();
  const supabase = useSupabaseClient();
  const session = useSession();
  const { profile } = useContext(UserContext);
  console.log(profile);
  const createPost = () => {
    supabase
      .from("posts")
      .insert({
        author: session.user.id,
        content,
      })
      .then((response) => {
        if (!response.error) {
          setContent("");
          alert("Created!");
          if (onPost) {
            onPost();
          }
        }
      });
  };
  return (
    <Card>
      <div className="flex gap-1">
        <div>
          <Avatar url={profile && profile.avatar} />
        </div>
        {profile && (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="grow p-3 h-14"
            placeholder={`Whats on your mind ${profile && profile.name}`}
          />
        )}
      </div>
      <div className="flex gap-5 mt-1">
        <div className="">
          <button className="flex gap-3 items-center">
            <FaUserAlt className="text-xl" />
            <span className="hidden md:block">People</span>
          </button>
        </div>
        <div className="">
          <button className="flex gap-3 items-center">
            <SiOpenstreetmap className="text-xl" />
            <span className="hidden md:block">Check in</span>
          </button>
        </div>
        <div className="">
          <button className="flex gap-3 items-center">
            <MdMood className="text-2xl" />
            <span className="hidden md:block">Mood</span>
          </button>
        </div>
        <div className="grow text-right">
          <button
            onClick={createPost}
            className="bg-socialBlue text-white px-6 py-2 rounded-md"
          >
            <FaShareSquare />
          </button>
        </div>
      </div>
    </Card>
  );
}
