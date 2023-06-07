import { AiFillCamera } from "react-icons/ai";
export default function Cover({ url, editable }) {
  return (
    <div className="h-36 overflow-hidden flex justify-center items-center relative">
      <div>
        <img className="" src={url} />
      </div>
      {editable && (
        <div className=" absolute right-0 bottom-0 m-2">
          <button className="flex bg-white py-1 px-4 shadow-md rounded-md">
            <AiFillCamera />
            Change cover img
          </button>
        </div>
      )}
    </div>
  );
}
