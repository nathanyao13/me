import ProjectCard from "@/app/components/ProjectCard";

const projects = [
  {
    title: "Personal Website",
    description: "A personal portfolio site built with Next.js, React, and Tailwind CSS to explore modern front-end development.",
    link: "https://github.com/nathanyao13/personal_website", image: "/images/personal_website.png"
  },
  {
    title: "Piano-Gen",
    description: "A piano music generation project exploring multi-quantizer transformers and Mel-spectrogram–based perceptual objectives.",
    link: "https://github.com/nathanyao13/Piano-Gen",
    image: "/images/piano-gen.png",
  },
  {
    title: "Spotipy-Wrapped",
    description: "Implemented Collaborative Filtering and Content-Based Filtering Recommender Systems for Spotify Song Data and a Generated User Matrix.",
    link: "https://github.com/nathanyao13/Spotipy-Wrapped",
    image: "/images/spotipy.png",
    square: true,
  },
  {
    title: "Whos-That-Pokemon",
    description: "Pokémon image classifiers using ResNet Transfer Learning and a Deep CNN from scratch.",
    link: "https://github.com/nathanyao13/Whos-That-Pokemon",
    image: "/images/who_dat_pokemon.png",
    square: true,
  },
  {
    title: "Geometry-Dash-Mini",
    description: "Designed and developed a Python project to remake the rhythm-based action video game, Geometry Dash.",
    link: "https://github.com/nathanyao13/Geometry-Dash-Mini",
    image: "/images/geometry_dash.png",
  },
];

export default function Projects() {
  return (
    <div className="py-12">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h1 className="text-4xl lg:text-6xl font-thin text-gray-900 mb-6 text-center lg:text-left">projects.</h1>
        <p className="text-lg text-gray-400 max-w-xl mb-16 text-center lg:text-left">
          Things I&apos;ve built — mostly for fun and to learn.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <div key={project.title} className={`px-2 pb-4 card-animate ${project.square ? "col-span-1 aspect-square" : "col-span-2 aspect-[2]"}`} style={{ animationDelay: `${i * 0.05}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}