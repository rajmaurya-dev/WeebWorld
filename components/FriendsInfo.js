import Avatar from "./Avatar";
import Card from "./Card";

export default function FriendsInfo() {
  return (
    <>
      <div className="flex">
        <div className="flex items-center gap-2 px-4 py-2">
          <Avatar />

          <div>
            <h3 className="text-blue-800 font-bold">Hinata Hyuga</h3>
            <h5 className="text-sm leading-3">5 Mutual Friends</h5>
          </div>
        </div>
      </div>
    </>
  );
}
