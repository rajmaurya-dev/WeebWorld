import { useRouter } from "next/router";
import ProfilePage from "../profile";

export default function Id() {
  const router = useRouter();
  const userId = router.query.id;
  console.log(userId);
  return <ProfilePage />;
}
