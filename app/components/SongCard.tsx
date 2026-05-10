export default function SongCard({ title, artist, image, href }: {
  title: string;
  artist: string;
  image?: string;
  href?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative flex h-full w-full overflow-hidden rounded-xl bg-gray-100 p-5">

      {/* Top bar: "Music" label + arrow button */}
      <div className="absolute top-3 left-4 right-3 flex items-center justify-between z-10">
        <p className="text-sm text-gray-500">Music</p>
        <span className="text-gray-400 group-hover:text-gray-900 rounded-full w-8 h-8 border border-transparent group-hover:border-gray-300 transition-colors inline-flex items-center justify-center text-sm">
          ↗
        </span>
      </div>

      {/* Left: album cover — scales and rotates on hover */}
      <div className="hidden sm:flex items-center justify-center w-1/2 pt-6">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-4/5 rounded shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
          />
        )}
      </div>

      {/* Right: badge + song title + artist */}
      <div className="flex flex-col w-full sm:w-1/2 pl-4 pt-10">
        <span className="inline-block w-fit bg-red-200 text-red-700 text-xs font-semibold px-3 py-1 rounded mb-3 tracking-widest uppercase">
          Song
        </span>
        <h3 className="text-xl font-semibold text-gray-900 leading-tight mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{artist}</p>
      </div>

    </a>
  );
}
