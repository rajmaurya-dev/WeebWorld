export default function Card({ children, noPadding, className }) {
  let classes = `bg-pink-500 shadow-md shadow-gray-300 rounded-md mb-5 text-white ${className} `;
  if (!noPadding) {
    classes += " p-4";
  }
  return <div className={classes}>{children}</div>;
}
