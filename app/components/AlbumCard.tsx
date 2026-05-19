import Link from 'next/link';

export default function AlbumCard({ title, image, href }: { title: string; image?: string; href?: string }) {
  const isExternal = href?.startsWith('http');
  return (
    <Link href={href ?? '#'} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} className="group relative block h-full w-full overflow-hidden rounded-xl bg-[#E3D5CA]">

      {image && (
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:translate-y-[20%]" />
      )}

      <div className="absolute top-3 left-4 z-10 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-sm text-gray-500">Music</p>
        <span className="text-sm font-medium text-gray-800">{title}</span>
      </div>

      <p className="absolute bottom-4 right-4 z-10 text-xs font-semibold text-white rounded-lg px-3 py-1.5 bg-green-700/80 tracking-widest uppercase">
        Album
      </p>

    </Link>
  );
}
