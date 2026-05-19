import Link from 'next/link';

export default function ArtistCard({ name, image, href }: { name: string; image?: string; href?: string }) {
  const isExternal = href?.startsWith('http');
  return (
    <Link href={href ?? '#'} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined} className="group relative block h-full w-full overflow-hidden rounded-xl bg-[#E3D5CA]">

      {/* Image — scales up on hover */}
      {image && (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Dark overlay — dims the image by default so text is readable, fades out on hover */}
      <div className="absolute inset-0 z-[5] bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />

      {/* "Music" label — dims slightly on hover */}
      <p className="absolute top-3 left-4 z-10 text-sm text-white/80 transition-opacity duration-500 group-hover:opacity-50">
        Music
      </p>

      {/* Badge + artist name — dims slightly on hover */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 transition-opacity duration-500 group-hover:opacity-50">
        <span className="inline-block bg-blue-200 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3 tracking-widest uppercase">
          Artist
        </span>
        <h2 className="text-2xl lg:text-4xl font-light text-white leading-tight">{name}</h2>
      </div>

    </Link>
  );
}
