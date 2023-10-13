import { uploadUserProfileImage } from "@/helpers/user";
import { useSession } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { AiFillCamera } from "react-icons/ai";
import Preloader from "./Preloader";
import { useState } from "react";

export default function Avatar({ size, url, editable, onChange }) {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [isUploading, setIsUploading] = useState(false);
  async function handleAvatarChange(ev) {
    const file = ev.target.files[0];
    if (file) {
      setIsUploading(true);
      await uploadUserProfileImage(
        supabase,
        session.user.id,
        file,
        "avatars",
        "avatar"
      );
      setIsUploading(false);
      if (onChange) {
        onChange();
      }
    }
  }

  let width = "w-12";
  if (size === "lg") {
    width = "w-24";
  }
  return (
    <>
      <div className={`${width} relative`}>
        <div className="rounded-full overflow-hidden">
          <img src={url} alt="" className="object-cover rounded-full" />
        </div>
        {isUploading && (
          <div className="absolute inset-0 bg-white z-10 bg-opacity-80 flex items-center">
            <div className="inline-block mx-auto">
              <Preloader />
            </div>
          </div>
        )}
        {editable && (
          <label className="absolute bottom-0 right-0 shadow-sm shadow-black p-2 bg-white rounded-full cursor-pointer ">
            <input
              type="file"
              onChange={handleAvatarChange}
              className="hidden"
            />
            <AiFillCamera />
          </label>
        )}
      </div>
    </>
  );
}
