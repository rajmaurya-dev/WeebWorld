import NavigationCard from "./NavigationCard";

export default function Layout({ children, hidenavigation }) {
  return (
    <>
      <div className="flex max-w-4xl mx-auto mt-4 gap-5">
        {!hidenavigation && (
          <div className="w-3/12">
            <NavigationCard />
          </div>
        )}
        <div className={hidenavigation ? "w-full" : "w-9/12"}>{children}</div>
      </div>
    </>
  );
}
