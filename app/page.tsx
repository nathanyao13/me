import Keyword from '@/app/components/Keyword';
import ArtistCard from '@/app/components/ArtistCard';
import AlbumCard from '@/app/components/AlbumCard';
import SongCard from '@/app/components/SongCard';
import ExperienceCard from '@/app/components/ExperienceCard';
import HobbyCard from '@/app/components/HobbyCard';
import ProjectCard from '@/app/components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-screen-2xl mx-auto px-8">

        {/* Bio section */}
        <section className="py-12 lg:py-20 flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <p className="text-2xl lg:text-4xl text-gray-400 leading-relaxed">
              Hello! My name is Nathan Yao. I enjoy solving problems using{" "}
              <Keyword href="/projects" color="#3b82f6">software</Keyword> tools.
              I am currently studying Machine Learning and Computer Science at{" "}
              <Keyword href="https://www.cmu.edu" color="#c41230" external squiggly>Carnegie Mellon</Keyword>.
            </p>
            <p className="text-2xl lg:text-4xl text-gray-400 leading-relaxed">
              Outside of school, I am a student-athlete on{" "}
              <Keyword href="https://athletics.cmu.edu/sports/msoc/index" color="#c41230" external squiggly>CMU Men&apos;s Soccer Team</Keyword>.
              I am interested in{" "}
              <Keyword href="/music" color="#6116a3">Music</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Sports</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Films</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Hiking</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Books</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Anime</Keyword>, {" "} and{" "}
              <Keyword href="/hobbies" color="#16a34a">Video Games</Keyword>.
            </p>
            <p className="text-2xl lg:text-4xl text-gray-400 leading-relaxed">
              You can find me at{" "}
              <Keyword href="mailto:nate.yao@gmail.com" color="#c41230" external squiggly>nate.yao@gmail.com</Keyword>,{" "}
              <Keyword href="https://www.linkedin.com/in/nathanyao13/" color="#c41230" external squiggly>LinkedIn</Keyword>, or{" "}
              <Keyword href="https://github.com/nathanyao13" color="#c41230" external squiggly>GitHub</Keyword>.
            </p>
          </div>

          {/* Photo */}
          <div className="group relative w-full lg:w-80 xl:w-96 min-h-[320px] lg:min-h-0 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
            <img src="/images/me.jpeg" alt="Nathan" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-500 group-hover:opacity-0">
              <h2 className="text-xl font-light text-white">Me</h2>
            </div>
          </div>

        </section>

        {/* Cards section */}
        <section className="pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.00s' }}>
              <ArtistCard name="Olivia Rodrigo" image="/images/olivia_rodrigo.png" href="/music" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.10s' }}>
              <HobbyCard name="Copa Del Rey Semifinal" badge="Sports" image="/images/soccer_5.jpeg" href="/hobbies" variant="album" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.15s' }}>
              <AlbumCard title="The Queen Is Dead" image="/images/queen_is_dead_smiths.png" href="/music" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.20s' }}>
              <ExperienceCard company="Applovin" role="Software Engineer Intern" date="Summer 2026" description="Current Internship. Ads Experience Team." href="/experience" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.25s' }}>
              <ExperienceCard company="CMU ML Department" role="Teaching Assistant" date="Spring 2026" description="Worked as a TA for 10707: Advanced Deep Learning, a graduate-level course on deep learning theory and research." href="/experience" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.30s' }}>
              <ArtistCard name="Playboi Carti" image="/images/playboi_carti.png" href="/music" />
            </div>
            <div className="col-span-2 aspect-[2] card-animate" style={{ animationDelay: '0.35s' }}>
              <ProjectCard title="Piano-Gen" description="" link="/projects" image="/images/piano-gen.png" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.40s' }}>
              <ProjectCard title="Spotipy-Wrapped" description="" link="/projects" image="/images/spotipy.png" square />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.45s' }}>
              <HobbyCard name="New Mexico" badge="Outdoors" image="/images/hike_1.jpeg" href="/hobbies" variant="album" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.50s' }}>
              <SongCard title="Semi-Charmed Life" artist="Third Eye Blind" image="/images/semi-charmed_life.jpeg" href="/music" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.55s' }}>
              <HobbyCard name="500 Days of Summer" badge="Film" image="/images/500_days.jpg" href="/hobbies" variant="album" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.60s' }}>
              <SongCard title="Walking on a Dream" artist="Empire of the Sun" image="/images/walking_on_a_dream.png" href="/music" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.65s' }}>
              <AlbumCard title="3D Country" image="/images/3d_country_geese.jpg" href="/music" />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.70s' }}>
              <ProjectCard title="Whos-That-Pokemon" description="" link="/projects" image="/images/who_dat_pokemon.png" square />
            </div>
            <div className="col-span-1 aspect-square card-animate" style={{ animationDelay: '0.75s' }}>
              <ExperienceCard company="St. Louis City SC" role="Professional Soccer Player" date="Spring 2023" description="Played MLSNEXT for STLCITYSC academy throughout high school. Held an Amateur contract with STLCITY 2 in MLSNEXT Pro" href="/experience" />
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
