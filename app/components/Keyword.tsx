export default function Keyword({ href, color, external, squiggly, children }: {
  href: string;
  color: string;
  external?: boolean;
  squiggly?: boolean;
  children: React.ReactNode;
}) {
  const encodedColor = color.replace('#', '%23');
  const wave = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='8'%3E%3Cpath d='M0 3 Q5 0 10 3 Q15 6 20 3' stroke='${encodedColor}' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`;

  return (
    <a
      href={href}
      className="text-gray-900 relative inline-block group"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-full ${
          squiggly
            ? 'h-[8px] opacity-0 group-hover:opacity-100'
            : 'h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200'
        }`}
        style={squiggly
          ? { backgroundImage: wave, backgroundRepeat: 'repeat-x', backgroundSize: '12px 8px' }
          : { backgroundColor: color }
        }
      />
    </a>
  );
}
