export default function AlbumCard({ title, image, href }: { title: string; image?: string; href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative block h-full w-full overflow-hidden rounded-xl bg-gray-100">

      {/* Album cover — slides down on hover, exposing the gray top area */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:translate-y-[20%]"
        />
      )}

      {/* "Music" label + album title — hidden by default, fade in on hover */}
      <div className="absolute top-3 left-4 z-10 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-sm text-gray-500">Music</p>
        <span className="text-sm font-medium text-gray-800">{title}</span>
      </div>

      {/* Green "ALBUM" badge — bare by default, dark pill appears on hover */}
      <p className="absolute bottom-4 right-4 z-10 text-xs font-semibold text-white rounded-lg px-3 py-1.5 bg-green-700/80 tracking-widest uppercase">
        Album
      </p>

    </a>
  );
}
