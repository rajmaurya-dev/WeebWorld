import Card from "./Card";
import { SiOpenstreetmap } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { MdMood } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import { BiPhotoAlbum } from "react-icons/bi";
import Avatar from "./Avatar";
import { useContext, useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "@/contexts/userContext";
import Preloader from "./Preloader";
export default function PostFormCard({ onPost }) {
  const [content, setContent] = useState();
  const [uploads, setUploads] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession();
  const { profile } = useContext(UserContext);
  const createPost = () => {
    supabase
      .from("posts")
      .insert({
        author: session.user.id,
        content,
        photos: uploads,
      })
      .then((response) => {
        if (!response.error) {
          setContent("");
          setUploads([]);
          if (onPost) {
            onPost();
          }
        }
      });
  };
  async function addPhotos(ev) {
    const files = ev.target.files;
    if (files.length > 0) {
      setIsUploading(true);
      for (const file of files) {
        const newName = Date.now() + file.name;
        const result = await supabase.storage
          .from("photos")
          .upload(newName, file);
        if (result.data) {
          const url =
            process.env.NEXT_PUBLIC_SUPABASE_URL +
            "/storage/v1/object/public/photos/" +
            result.data.path;
          console.log(url);
          setUploads((prevUploads) => [...prevUploads, url]);
        } else {
          console.log(result);
        }
      }
      setIsUploading(false);
    }
  }
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
      {isUploading && (
        <div className="">
          <Preloader />
        </div>
      )}
      {uploads.length > 0 && (
        <div className="flex gap-2">
          {uploads.map((upload) => (
            <div className="mt-2">
              <img src={upload} alt="" className="w-auto h-24 rounded-md" />
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-5 mt-1">
        <div className="">
          <label className="flex gap-3 items-center">
            <input
              type="file"
              multiple
              className="hidden"
              onChange={addPhotos}
            />
            <BiPhotoAlbum className="text-xl" />
            <span className="hidden md:block">Photo</span>
          </label>
        </div>
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
