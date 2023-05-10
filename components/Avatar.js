export default function Avatar({ size, url }) {
  let width = "w-12";
  if (size === "lg") {
    width = "w-24";
  }
  return (
    <>
      <div className={`${width} rounded-full overflow-hidden`}>
        <img src={url} alt="" className="object-cover rounded-full" />
      </div>
    </>
  );
}
