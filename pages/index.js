import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";

import NavigationCard from "@/components/NavigationCard";
import PostFormCard from "@/components/PostFormCard";
import Avatar from "@/components/Avatar";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { useEffect, useState } from "react";
import { UserContext } from "@/contexts/userContext";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((results) => {
        if (results.data.length) {
          setProfile(results.data[0]);
        }
      });
  }, [session?.user?.id]);
  // console.log(profile);
  if (!session) {
    return <LoginPage />;
  }
  function fetchPost() {
    supabase
      .from("posts")
      .select("id,content,created_at,photos, profiles(id, avatar, name)")
      .order("created_at", { ascending: false })
      .then((results) => setPosts(results.data));
  }
  return (
    <>
      <Layout>
        <UserContext.Provider value={{ profile }}>
          <PostFormCard onPost={fetchPost} />
          {posts && posts.map((post) => <PostCard key={post.id} {...post} />)}
        </UserContext.Provider>
      </Layout>
    </>
  );
}
