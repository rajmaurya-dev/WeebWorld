import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function LoginPage() {
  return (
    <Layout hidenavigation={true}>
      <div className="h-screen flex items-center">
        <div className="max-w-md grow mx-auto -mt-34">
          <Card>
            <h1>Login Form</h1>
            <a href="">Login with Google</a>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
