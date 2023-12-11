import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
export default function LoginPage() {
  const supabase = useSupabaseClient();
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "http://localhost:3000/";

    url = url.includes("http") ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
    return url;
  };
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getURL(),
      },
    });
  };
  return (
    <Layout hidenavigation={true}>
      <div className=" flex items-center justify-center">
        <div className="max-w-xs grow mt-10">
          <h3 className="text-6xl mb-4 text-center text-white">Login</h3>
          <div className="grid place-content-center">
            <img src="/logo.png" alt="logo" className="w-24" />
          </div>
          <div className="bg-pink-500 shadow-[#FE1075] shadow-none mt-5 drop-shadow-2xl  h-[150px] grid place-content-center rounded-md">
            <button
              onClick={loginWithGoogle}
              className="flex w-full gap-3 items-center justify-center shadow-md drop-shadow-xl shadow-red-600 p-2 mb-4 rounded-md text-white bg-red-500 hover:shadow-red-400 hover:bg-red-600 hover:text-white hover:scale-110  "
            >
              <AiFillGoogleCircle className="text-3xl " />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
