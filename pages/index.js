import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";

import NavigationCard from "@/components/NavigationCard";
import PostFormCard from "@/components/PostFormCard";
import Avatar from "@/components/Avatar";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";
import { useSession } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  if (!session) {
    return <LoginPage />;
  }
  return (
    <>
      <Layout>
        <PostFormCard />
        <PostCard />
      </Layout>
    </>
  );
}
