export default function Album({
  id,
  name,
  image_url,
}: {
  id: string;
  name: string;
  image_url: string;
}) {
  const className = "absolute top-0 opacity-0 vynil-animation-in";

  return (
    <div className="relative shadow-xl mr-32 w-72 lg:w-auto">
      <img
        src={image_url}
        alt={name}
        width="400"
        height="400"
        className="relative rounded-md z-10 bg-white"
        style={{ viewTransitionName: `album-${id}` }}
      />
      <img
        src="/vynil.webp"
        width="400"
        height="400"
        className={className}
        style={{ viewTransitionName: `vinyl-${id}` }}
      />
    </div>
  );
}
