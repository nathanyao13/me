import ArtistCard from '@/app/components/ArtistCard';
import AlbumCard from '@/app/components/AlbumCard';
import SongCard from '@/app/components/SongCard';

const artists = [
  { name: 'Olivia Rodrigo', image: '/images/olivia_rodrigo.png', href: 'https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG?si=nFDk2KawRs6Ten_s3xSpGA' },
  { name: 'Drake', image: '/images/drake.png', href: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4?si=SmsYeRacTYWYD5FRHlt9jw' },
  { name: 'Mac Miller', image: '/images/mac_miller.png', href: 'https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U?si=-msBAn_ZR3CzF-wXJ_5TDA' },
  { name: 'Playboi Carti', image: '/images/playboi_carti.png', href: 'https://open.spotify.com/artist/699OTQXzgjhIYAHMy9RyPD?si=c9ND3w0mRw2sQWkcs-8BtA' },
  { name: 'Dominic Fike', image: '/images/dominic_fike.png', href: 'https://open.spotify.com/artist/6USv9qhCn6zfxlBQIYJ9qs?si=QUFsTCjEQN-S4F5F4jZiPA' },
  { name: 'Sade', image: '/images/sade.png', href: 'https://open.spotify.com/artist/47zz7sob9NUcODy0BTDvKx?si=K6HKymnRTOuOdYfG_XR8Lg' },
  { name: 'Geese', image: '/images/geese.png', href: 'https://open.spotify.com/artist/0WCo84qtCKfbyIf1lqQWB4?si=V5MgoTpxRFiqYOmBHh0fIg' },
  { name: 'TV Girl', image: '/images/tv_girl.png', href: 'https://open.spotify.com/artist/0Y6dVaC9DZtPNH4591M42W?si=eohegiZiR4aRTRHqSrvnYA' },
  { name: 'Lil Uzi Vert', image: '/images/uzi.png', href: 'https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz?si=VQg2AS6vS7mZj16S2MhZFA' },
  { name: 'The Strokes', image: '/images/strokes.png', href: 'https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V?si=8LJxwMeMT1isK3KQ_hUcXA' }
];

const albums = [
  { title: 'MM..FOOD', image: '/images/mm_food_mfdoom.jpg', href: 'https://open.spotify.com/album/1UcS2nqUhxrZjrBZ3tHk2N?si=XxwjnGv2T5O9t-_wnntmpA' },
  { title: '3D Country', image: '/images/3d_country_geese.jpg', href: 'https://open.spotify.com/album/4RT2pNX9ZXCB0LtqfI2sdJ?si=ZoZ-a3lIS0qQ2az7InrjDQ' },
  { title: 'Circles', image: '/images/circles_mac.jpeg', href: 'https://open.spotify.com/album/5sY6UIQ32GqwMLAfSNEaXb?si=xHUP89lTTAeiKa1fkvKOJg' },
  { title: 'Die Lit', image: '/images/die_lit_carti.jpg', href: 'https://open.spotify.com/album/7dAm8ShwJLFm9SaJ6Yc58O?si=XDEh15mbRte1-TjK2rmdRA' },
  { title: 'Graduation', image: '/images/graduation_kanye.jpeg', href: 'https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3?si=MMcnanFaQLiY_dP_JRkPBg' },
  { title: 'The Queen Is Dead', image: '/images/queen_is_dead_smiths.png', href: 'https://open.spotify.com/album/5Y0p2XCgRRIjna91aQE8q7?si=a-Ad1et4RwSI5A3JKZ5xvg' },
];

const songs = [
  { title: 'DÁKITI', artist: 'Bad Bunny', image: '/images/dakiti.png', href: 'https://open.spotify.com/track/47EiUVwUp4C9fGccaPuUCS?si=8264c9ba20674b7e' },
  { title: 'Evicted', artist: 'Nemzzz', image: '/images/evicted.jpeg', href: 'https://open.spotify.com/track/7fa52ALD2bCARSLj7R0BUw?si=acceeaf0303444fb' },
  { title: 'Heartache Medication', artist: 'John Pardi', image: '/images/heartache_med.jpg', href: 'https://open.spotify.com/track/5qdQPrWmZv8xYhMJCDrdHF?si=dabb2fbf3e564851' },
  { title: 'Just Like Heaven', artist: 'The Cure', image: '/images/just_like_heaven.jpeg', href: 'https://open.spotify.com/track/76GlO5H5RT6g7y0gev86Nk?si=1ed7b66c1a1c40cc' },
  { title: 'Killing My Borrowed Time', artist: 'Geese', image: '/images/killing_my_borrowed_time.jpg', href: 'https://open.spotify.com/track/53JhpHJVdE0TxXiZ6p387I?si=97cf51077b86409a' },
  { title: 'Misty', artist: 'Ella Fitzgerald', image: '/images/misty.jpeg', href: 'https://open.spotify.com/track/4kF394GKEnI13QdZBM9mxM?si=01de1f2ec8674fbf' },
  { title: 'Ron Artest', artist: 'Babyface Ray', image: '/images/ron_artest.jpeg', href: 'https://open.spotify.com/track/4Wlz0HsHZlJy0NDK2h6jq6?si=2330b081036a4b7f' },
  { title: 'Semi-Charmed Life', artist: 'Third Eye Blind', image: '/images/semi-charmed_life.jpeg', href: 'https://open.spotify.com/track/42et6fnHCw1HIPSrdPprMl?si=14d113c40c3241c5' },
  { title: 'Walking on a Dream', artist: 'Empire of the Sun', image: '/images/walking_on_a_dream.png', href: 'https://open.spotify.com/track/5r5cp9IpziiIsR6b93vcnQ?si=3e5b73a2d7054882' },
  { title: '夜に駆ける', artist: 'YOASOBI', image: '/images/夜に駆ける.jpg', href: 'https://open.spotify.com/track/3dPtXHP0oXQ4HCWHsOA9js?si=af337c51614d4652' },
  { title: '起风了', artist: 'Zhou Shen', image: '/images/起风了.jpeg', href: 'https://open.spotify.com/track/59IPPEcm1dL7zu5sKM6II0?si=22c70508b86345f0' },
];

export default function Music() {
  return (
    <div className="py-12">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h1 className="text-4xl lg:text-6xl font-thin text-gray-900 mb-6">music.</h1>
        <p className="text-lg text-gray-400 max-w-3xl mb-16">
          I live to listen to music. Here are a few of the many artists, albums, and songs I like.
        </p>


        <h2 className="text-2xl font-thin text-gray-400 mb-6">artists.</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mb-16">
          {artists.map((artist, i) => (
            <div key={artist.name} className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: `${i * 0.05}s` }}>
              <ArtistCard name={artist.name} image={artist.image} href={artist.href} />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-thin text-gray-400 mb-6">albums.</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mb-16">
          {albums.map((album, i) => (
            <div key={album.title} className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: `${i * 0.05}s` }}>
              <AlbumCard title={album.title} image={album.image} href={album.href} />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-thin text-gray-400 mb-6">songs.</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mb-16">
          {songs.map((song, i) => (
            <div key={song.title} className="col-span-1 aspect-square px-2 pb-4 card-animate" style={{ animationDelay: `${i * 0.05}s` }}>
              <SongCard title={song.title} artist={song.artist} image={song.image} href={song.href} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}