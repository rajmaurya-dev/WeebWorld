import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";

import NavigationCard from "@/components/NavigationCard";
import PostFormCard from "@/components/PostFormCard";
import Avatar from "@/components/Avatar";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <PostFormCard />
        <PostCard />
      </Layout>
    </>
  );
}
