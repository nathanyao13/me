import Keyword from '@/app/components/Keyword';
import ArtistCard from '@/app/components/ArtistCard';
import AlbumCard from '@/app/components/AlbumCard';
import SongCard from '@/app/components/SongCard';
import ExperienceCard from '@/app/components/ExperienceCard';
import HobbyCard from '@/app/components/HobbyCard';
import ProjectCard from '@/app/components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-screen-2xl mx-auto px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">

          {/* Bio — spans left 2 cols, locked to exactly 3 card-row heights */}
          <div className="col-span-2 lg:row-span-2 flex flex-col justify-center gap-4 lg:gap-8 lg:pr-8 pb-4">
            <p className="text-xl lg:text-3xl text-gray-400 leading-relaxed">
              Hello! I&apos;m Nathan Yao👋 Welcome to my personal website. I enjoy solving problems using{" "}
              <Keyword href="/projects" color="#3b82f6">software</Keyword> tools.
              I am currently studying Machine Learning at{" "}
              <Keyword href="https://www.cmu.edu" color="#c41230" external squiggly>Carnegie Mellon</Keyword>.
            </p>
            <p className="text-xl lg:text-3xl text-gray-400 leading-relaxed">
              Outside of school, I am a student-athlete on{" "}
              <Keyword href="https://athletics.cmu.edu/sports/msoc/index" color="#c41230" external squiggly>CMU Men&apos;s Soccer Team</Keyword>.
              I am interested in{" "}
              <Keyword href="/hobbies" color="#16a34a">Sports</Keyword>,{" "}
              <Keyword href="/music" color="#6116a3">Music</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Pokémon</Keyword>,{" "}
              <Keyword href="/hobbies" color="#16a34a">Hiking</Keyword>,{" "} and{" "}
              <Keyword href="/hobbies" color="#16a34a">Movies</Keyword>.
            </p>
            <p className="text-xl lg:text-3xl text-gray-400 leading-relaxed">
              I also play{" "}
              <Keyword href="/hobbies" color="#16a34a">Piano</Keyword>{" "}and{" "}
              <Keyword href="/hobbies" color="#16a34a">Read</Keyword>, although not as consistently. But I&apos;m working on being better at that.
            </p>
          </div>

          {/* Cards in cols 3–4, rows 1–2 (alongside bio) */}
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.00s' }}>
            <ArtistCard name="Olivia Rodrigo" image="/images/olivia_rodrigo.png" href="/music" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.05s' }}>
            <HobbyCard name="Copa Del Rey Semifinal" badge="Sports" image="/images/soccer_5.jpeg" href="/hobbies" variant="album" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.10s' }}>
            <AlbumCard title="The Queen Is Dead" image="/images/queen_is_dead_smiths.png" href="/music" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.15s' }}>
            <ExperienceCard company="Applovin" role="Software Engineer Intern" date="Summer 2026" description="Current Internship. Ads Experience Team." href="/experience" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.20s' }}>
            <ExperienceCard company="CMU ML Department" role="Teaching Assistant" date="Spring 2026" description="Worked as a TA for 10707: Advanced Deep Learning, a graduate-level course on deep learning theory and research." href="/experience" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.25s' }}>
            <ArtistCard name="Playboi Carti" image="/images/playboi_carti.png" href="/music" />
          </div>

          {/* All cards below — full 4 cols */}
          <div className="col-span-2 aspect-[2] px-2 pb-4 card-animate" style={{ animationDelay: '0.30s' }}>
            <ProjectCard title="Piano-Gen" description="" link="/projects" image="/images/piano-gen.png" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.35s' }}>
            <ProjectCard title="Spotipy-Wrapped" description="" link="/projects" image="/images/spotipy.png" square />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.40s' }}>
            <HobbyCard name="New Mexico" badge="Outdoors" image="/images/hike_1.jpeg" href="/hobbies" variant="album" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.45s' }}>
            <SongCard title="Semi-Charmed Life" artist="Third Eye Blind" image="/images/semi-charmed_life.jpeg" href="/music" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.50s' }}>
            <HobbyCard name="500 Days of Summer" badge="Film" image="/images/500_days.jpg" href="/hobbies" variant="album" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.55s' }}>
            <SongCard title="Walking on a Dream" artist="Empire of the Sun" image="/images/walking_on_a_dream.png" href="/music" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.60s' }}>
            <AlbumCard title="3D Country" image="/images/3d_country_geese.jpg" href="/music" />
          </div>
          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.65s' }}>
            <ProjectCard title="Whos-That-Pokemon" description="" link="/projects" image="/images/who_dat_pokemon.png" square />
          </div>

          <div className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: '0.15s' }}>
            <ExperienceCard company="St. Louis City SC" role="Professional Soccer Player" date="Spring 2023" description="Played MLSNEXT for STLCITYSC academy throughout high school. Held an Amateur contract with STLCITY 2 in MLSNEXT Pro" href="/experience" />
          </div>

        </div>
      </main>
    </div>
  );
}
