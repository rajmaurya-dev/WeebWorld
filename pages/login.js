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
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  return (
    <Layout hidenavigation={true}>
      <div className=" flex items-center justify-center">
        <div className="max-w-xs grow mt-10">
          <h3 className="text-6xl mb-4 text-center text-gray-400">Login</h3>
          <div className="grid place-content-center">
            <img src="/logo.png" alt="logo" className="w-24" />
          </div>
          <Card>
            <button
              onClick={loginWithGoogle}
              className="flex w-full gap-3 items-center justify-center shadow-md shadow-red-200 p-2 mb-4 rounded-md text-red-600 hover:shadow-red-400 hover:bg-red-600 hover:text-white hover:scale-110  "
            >
              <AiFillGoogleCircle className="text-3xl " />
              Login with Google
            </button>
            <button className="flex w-full gap-3 items-center justify-center shadow-md shadow-blue-200 p-2 mb-4 rounded-md text-blue-600 hover:shadow-blue-400 hover:bg-blue-600 hover:text-white hover:scale-110">
              <AiFillTwitterCircle className="text-3xl " />
              Login with Twitter
            </button>
            <button className="flex w-full gap-3 items-center justify-center shadow-md shadow-gray-200 p-2 mb-2 rounded-md text-gray-600 hover:shadow-gray-400 hover:bg-gray-600 hover:text-white hover:scale-110">
              <AiFillGithub className="text-3xl " />
              Login with Github
            </button>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
