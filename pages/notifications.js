import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function NotificationPage() {
  return (
    <Layout>
      <h3 className="text-6xl text-gray-400">Notifications</h3>
      <Card noPadding={true}>
        <div className="">
          <div className="flex items-center gap-3 border-b border-b-gray-100 p-4">
            <Link href={""}>
              <Avatar />
            </Link>

            <p>
              <Link href={""} className="font-semibold hover:underline">
                Baba Yaga
              </Link>{" "}
              liked
              <Link href={""} className="text-socialBlue ml-1 hover:underline">
                your weeblet
              </Link>{" "}
            </p>
          </div>
          <div className="flex items-center gap-3 border-b border-b-gray-100 p-4">
            <Link href={""}>
              <Avatar />
            </Link>

            <p>
              <Link href={""} className="font-semibold hover:underline">
                Rahul Oberoi
              </Link>{" "}
              liked
              <Link href={""} className="text-socialBlue ml-1 hover:underline">
                your weeblet
              </Link>{" "}
            </p>
          </div>
          <div className="flex items-center gap-3 border-b border-b-gray-100 p-4">
            <Link href={""}>
              <Avatar />
            </Link>

            <p>
              <Link href={""} className="font-semibold hover:underline">
                Baba Yaga
              </Link>{" "}
              liked
              <Link href={""} className="text-socialBlue ml-1 hover:underline">
                your weeblics
              </Link>{" "}
            </p>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
