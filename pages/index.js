import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";

import NavigationCard from "@/components/NavigationCard";
import PostFormCard from "@/components/PostFormCard";
import Avatar from "@/components/Avatar";
import PostCard from "@/components/PostCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex max-w-4xl mx-auto mt-4 gap-5">
        <div className="w-3/12">
          <NavigationCard />
        </div>
        <div className="w-9/12">
          <PostFormCard />
          <PostCard />
        </div>
      </div>
    </>
  );
}
