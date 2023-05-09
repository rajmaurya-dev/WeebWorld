import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
export default function LoginPage() {
  return (
    <Layout hidenavigation={true}>
      <div className="h-screen flex items-center">
        <div className="max-w-xs grow mx-auto -mt-34">
          <h3 className="text-6xl mb-4 text-center text-gray-400">Login</h3>

          <Card>
            <Link
              className="flex gap-3 items-center justify-center shadow-md shadow-red-200 p-2 mb-4 rounded-md text-red-600 hover:shadow-red-400 hover:bg-red-600 hover:text-white hover:scale-110  "
              href="/"
            >
              <AiFillGoogleCircle className="text-3xl " />
              Login with Google
            </Link>
            <Link
              className="flex gap-3 items-center justify-center shadow-md shadow-blue-200 p-2 mb-4 rounded-md text-blue-600 hover:shadow-blue-400 hover:bg-blue-600 hover:text-white hover:scale-110"
              href="/"
            >
              <AiFillTwitterCircle className="text-3xl " />
              Login with Twitter
            </Link>
            <Link
              className="flex gap-3 items-center justify-center shadow-md shadow-gray-200 p-2 mb-2 rounded-md text-gray-600 hover:shadow-gray-400 hover:bg-gray-600 hover:text-white hover:scale-110"
              href="/"
            >
              <AiFillGithub className="text-3xl " />
              Login with Github
            </Link>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
