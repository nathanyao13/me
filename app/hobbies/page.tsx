import HobbyCard from '@/app/components/HobbyCard';

const hobbies = [
  { name: 'Arsenal',              badge: 'Sports',   image: '/images/bukayo_pop.png',    variant: 'artist' as const },
  { name: 'STLCITYSC Academy',    badge: 'Sports',   image: '/images/soccer_1.jpg',      variant: 'album'  as const },
  { name: 'Piano Recital (2015)',           badge: 'Piano',     image: '/images/piano.jpeg',      variant: 'album'  as const },
  { name: 'CMU Men\'s Soccer',    badge: 'Sports',   image: '/images/soccer_2.jpeg',     variant: 'album'  as const },
  { name: 'Russell Westbrook',    badge: 'Sports',   image: '/images/westbrook_pop.png', variant: 'artist' as const },
  { name: 'Chicago Bulls',        badge: 'Sports',   image: '/images/basketball.JPG',    variant: 'album'  as const },
  { name: 'One Piece',            badge: 'Anime',    image: '/images/anime_1_pop.png',   variant: 'artist' as const },
  { name: 'Jujutsu Kaisen',       badge: 'Anime',    image: '/images/anime_2.JPG',       variant: 'album'  as const },
  { name: 'Oshawott',             badge: 'Pokémon',  image: '/images/pokemon_pop.png',   variant: 'artist' as const },
  { name: 'New Mexico',           badge: 'Outdoors', image: '/images/hike_1.jpeg',       variant: 'album'  as const },
  { name: 'Me',                   badge: 'Sports',   image: '/images/soccer_3_pop.png',  variant: 'artist' as const },
  { name: 'Jersey Shore',         badge: 'Outdoors', image: '/images/hike_2.jpeg',       variant: 'album'  as const },
  { name: 'STLCITYSC Home Opener',badge: 'Sports',   image: '/images/soccer_4.jpeg',     variant: 'album'  as const },
  { name: 'Terraria',             badge: 'Gaming',   image: '/images/terraria_pop.png',  variant: 'artist' as const },
  { name: 'Seattle',              badge: 'Outdoors', image: '/images/hike_3.jpeg',       variant: 'album'  as const },
  { name: '500 Days of Summer',   badge: 'Film',     image: '/images/500_days.jpg',      variant: 'album'  as const },
  { name: 'Copa Del Rey Semifinal',badge: 'Sports',  image: '/images/soccer_5.jpeg',     variant: 'album'  as const },
  { name: 'Barcelona',            badge: 'Outdoors', image: '/images/hike_4.jpeg',       variant: 'album'  as const },
  { name: 'La La Land',           badge: 'Film',     image: '/images/lalaland.jpg',      variant: 'album'  as const },
];

export default function Hobbies() {
  return (
    <div className="py-12">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h1 className="text-4xl lg:text-6xl font-thin text-gray-900 mb-6 text-center lg:text-left">hobbies.</h1>
        <p className="text-lg text-gray-400 max-w-xl mb-16 text-center lg:text-left">
          A collection of my favorite forms of entertainment.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, i) => (
            <div key={i} className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: `${i * 0.05}s` }}>
              <HobbyCard {...hobby} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
