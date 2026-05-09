export default function ProjectCard({ title, link, image }: {
  title: string;
  description: string;
  link: string;
  image?: string;
  square?: boolean;
}) {
  return (
    <div className="group h-full w-full overflow-hidden rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
      <div className="relative isolate h-full w-full">
        <div className="flex items-center justify-between pl-4 pr-2 pt-3 pb-6 text-sm text-gray-500">
          <p>Projects · {title}</p>
          <a href={link} target="_blank" className="text-gray-400 group-hover:text-gray-900 rounded-full w-8 h-8 border border-transparent group-hover:border-gray-300 transition-colors inline-flex items-center justify-center">↗</a>
        </div>
        <a href={link} target="_blank" className="block h-full w-full">
          {image && (
            <img
              src={image}
              alt={title}
              className="absolute h-full w-full object-contain origin-top transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </a>
      </div>
    </div>
  );
}
