import Link from 'next/link';

export default function SongCard({ title, artist, image, href }: {
  title: string;
  artist: string;
  image?: string;
  href?: string;
}) {
  const isExternal = href?.startsWith('http');
  return (
    <Link href={href ?? '#'} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} className="group relative flex h-full w-full overflow-hidden rounded-xl bg-gray-100 p-3">

      <div className="absolute top-3 left-4 right-3 flex items-center justify-between z-10">
        <p className="text-sm text-gray-500">Music</p>
        <span className="text-gray-400 group-hover:text-gray-900 rounded-full w-8 h-8 border border-transparent group-hover:border-gray-300 transition-colors inline-flex items-center justify-center text-sm">
          ↗
        </span>
      </div>

      <div className="flex items-center justify-center w-1/2 pt-6">
        {image && (
          <img src={image} alt={title} className="w-4/5 rounded shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2" />
        )}
      </div>

      <div className="flex flex-col justify-center w-1/2 pl-4 pt-8">
        <span className="inline-block w-fit bg-red-200 text-red-700 text-xs font-semibold px-3 py-1 rounded mb-3 tracking-widest uppercase">
          Song
        </span>
        <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-1">{title}</h3>
        <p className="text-xs text-gray-400">{artist}</p>
      </div>

    </Link>
  );
}
