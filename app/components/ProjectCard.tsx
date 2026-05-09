export default function ProjectCard({ title, description, link, image }: {
  title: string;
  description: string;
  link: string;
  image?: string;
}) {
  return (
    <div className="group border border-gray-200 rounded-xl p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-400">Projects · {title}</p>
        <a href={link} target="_blank" className="text-gray-400 group-hover:text-gray-900 rounded-full w-8 h-8 border border-transparent group-hover:border-gray-300 transition-colors inline-flex items-center justify-center">↗</a>
      </div>
      <a href={link} target="_blank" className="block overflow-hidden rounded-lg">
        {image ? (
          <img src={image} alt={title} className={`w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105`} />
        ) : (
          <div className={`bg-gray-100 rounded-lg h-48 transition-transform duration-300 group-hover:scale-105`} />
        )}
      </a>
      <p className="text-sm text-gray-400 mt-4">{description}</p>
    </div>
  );
}
