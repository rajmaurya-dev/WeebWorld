import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";

export default function SavedPostsPage() {
  return (
    <Layout>
      <h2 className="text-3xl md:text-5xl mb-4 text-gray-400 font-normal">
        Your Saved Posts
      </h2>
      <PostCard />
      <PostCard />
      <PostCard />
    </Layout>
  );
}
