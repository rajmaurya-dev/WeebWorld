export default function Avatar({ size }) {
  let width = "w-12";
  if (size === "lg") {
    width = "w-24";
  }
  return (
    <>
      <div className={`${width} rounded-full overflow-hidden`}>
        <img
          src="https://th.bing.com/th/id/R.5a578588cd1047f9a92535875ba80447?rik=VC02Vv9H%2fHJDLA&riu=http%3a%2f%2fimages3.wikia.nocookie.net%2f__cb20110817164808%2fnaruto-bleach%2fimages%2f9%2f9f%2fSmallnaruto.png&ehk=a%2bf0zTk9Ddoe3p6E1xal541gpoGUYinYCar9fAOOPKg%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="object-cover rounded-full"
        />
      </div>
    </>
  );
}
