import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import Preloader from "./Preloader";
import { useSession } from "@supabase/auth-helpers-react";
export default function Cover({ url, editable, onChange }) {
  const [isUploading, setIsUploading] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession();
  const updateCover = async (ev) => {
    const file = ev.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const newName = Date.now() + file.name;
      const { data, error } = await supabase.storage
        .from("covers")
        .upload(newName, file);
      setIsUploading(false);
      if (error) throw error;
      console.log(data.path);
      if (data) {
        const url =
          process.env.NEXT_PUBLIC_SUPABASE_URL +
          "/storage/v1/object/public/covers/" +
          data.path;
        console.log(url);
        supabase
          .from("profiles")
          .update({ cover: url })
          .eq("id", session.user.id)
          .then((result) => {
            if (!result.error && onChange) {
              onChange();
            }
            console.log(data);
          });
      }
    }
  };
  return (
    <div className="h-36 overflow-hidden flex justify-center items-center relative">
      <div>
        <img className="" src={url} />
      </div>
      {isUploading && (
        <div className="absolute inset-0 bg-white z-10 bg-opacity-80 flex items-center">
          <div className="inline-block mx-auto">
            <Preloader />
          </div>
        </div>
      )}
      {editable && (
        <div className=" absolute right-0 bottom-0 m-2">
          <label className="flex items-center bg-white py-1 px-4 shadow-md rounded-md">
            <input type="file" onChange={updateCover} />
            <AiFillCamera />
          </label>
        </div>
      )}
    </div>
  );
}
