import Link from 'next/link';

const badgeColors: Record<string, { pill: string; solid: string }> = {
  Sports:   { pill: 'bg-orange-200 text-orange-700', solid: 'bg-orange-600/80' },
  Pokémon:  { pill: 'bg-blue-200 text-blue-700',     solid: 'bg-blue-600/80'   },
  Gaming:   { pill: 'bg-pink-200 text-pink-700',     solid: 'bg-pink-600/80'   },
  Outdoors: { pill: 'bg-green-200 text-green-700',   solid: 'bg-green-600/80'  },
  Film:     { pill: 'bg-yellow-200 text-yellow-700', solid: 'bg-yellow-600/80' },
  Anime:    { pill: 'bg-amber-200 text-amber-700',   solid: 'bg-amber-600/80'  },
};

const defaultColors = { pill: 'bg-gray-200 text-gray-700', solid: 'bg-gray-600/80' };

function Inner({ name, badge, image, variant, colors }: {
  name: string; badge: string; image?: string;
  variant: 'artist' | 'album';
  colors: { pill: string; solid: string };
}) {
  if (variant === 'album') {
    return <>
      {image && <img src={image} alt={name} className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:translate-y-[20%]" />}
      <div className="absolute top-3 left-4 z-10 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-sm text-gray-500">Hobbies</p>
        <span className="text-sm font-medium text-gray-800">{name}</span>
      </div>
      <p className={`absolute bottom-4 right-4 z-10 text-xs font-semibold text-white rounded-lg px-3 py-1.5 tracking-widest uppercase ${colors.solid}`}>{badge}</p>
    </>;
  }
  return <>
    {image && <img src={image} alt={name} className="absolute inset-0 h-full w-full object-cover z-0 transition-transform duration-500 group-hover:scale-110" />}
    <div className="absolute inset-0 z-[5] bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />
    <p className="absolute top-3 left-4 z-10 text-sm text-white/80 transition-opacity duration-500 group-hover:opacity-50">Hobbies</p>
    <div className="absolute bottom-0 left-0 right-0 z-10 p-4 transition-opacity duration-500 group-hover:opacity-50">
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded mb-2 tracking-widest uppercase ${colors.pill}`}>{badge}</span>
      <h2 className="text-3xl font-light text-white leading-tight">{name}</h2>
    </div>
  </>;
}

export default function HobbyCard({ name, badge, image, href, variant = 'artist' }: {
  name: string; badge: string; image?: string; href?: string; variant?: 'artist' | 'album';
}) {
  const colors = badgeColors[badge] ?? defaultColors;
  const cls = "group relative block h-full w-full overflow-hidden rounded-xl bg-gray-100";
  const inner = <Inner name={name} badge={badge} image={image} variant={variant} colors={colors} />;

  if (href) {
    return <Link href={href} className={cls}>{inner}</Link>;
  }
  return <div className={cls}>{inner}</div>;
}
