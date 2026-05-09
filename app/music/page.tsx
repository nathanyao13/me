import Keyword from '@/app/components/Keyword';

export default function Music() {
  return (
    <div className="py-12">
      <div className="max-w-screen-2xl mx-auto px-8">
        <h1 className="text-6xl font-thin text-gray-900 mb-6">music.</h1>
        <p className="text-lg text-gray-400 max-w-xl mb-16">
          I live to listen to music. Here are some of my favorite artists, albums, and songs. Here is my {' '}
          <Keyword href="https://open.spotify.com/user/yaonathan?si=6044d42c396d479c" color="#ef4444" external squiggly>Spotify!</Keyword>
        </p>
        <div className="grid grid-cols-2 gap-6">
          <p className="text-gray-400">cards coming soon</p>
        </div>
      </div>
    </div>
  );
}