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
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetchPost();
  }, []);

  if (!session) {
    return <LoginPage />;
  }
  function fetchPost() {
    supabase
      .from("posts")
      .select("id,content,created_at, profiles(id, avatar, name)")
      .order("created_at", { ascending: false })
      .then((results) => setPosts(results.data));
  }
  return (
    <>
      <Layout>
        <PostFormCard onPost={fetchPost} />
        {posts && posts.map((post) => <PostCard {...post} />)}
      </Layout>
    </>
  );
}
