export default function ExperienceCard({ company, role, date, description, href }: {
  company: string;
  role: string;
  date: string;
  description: string;
  href?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col h-full w-full overflow-hidden rounded-xl bg-gray-100 p-4">

      {/* Top bar — mb-auto pushes everything else to the bottom */}
      <div className="flex items-center justify-between mb-auto">
        <p className="text-sm text-gray-400">Experience</p>
        <span className="text-gray-400 group-hover:text-gray-900 rounded-full w-8 h-8 border border-transparent group-hover:border-gray-300 transition-colors inline-flex items-center justify-center text-sm">
          ↗
        </span>
      </div>

      {/* Content in the lower half */}
      <div>
        <h3 className="text-2xl font-light text-gray-900 leading-tight mb-1">{role}</h3>
        <p className="text-sm text-gray-400 mb-2">{company} · {date}</p>
        <p className="text-base text-gray-900 line-clamp-3">{description}</p>
      </div>

    </a>
  );
}
