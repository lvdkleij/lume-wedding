import React, { useState } from 'react';

const SPOTIFY_ACCESS_TOKEN = '<YOUR_ACCESS_TOKEN>'; // Replace with real token
const PLAYLIST_ID = '0EaNZpqpvLpH8ReCTZFaIV';

export const SpotifyPlaylistManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchTracks = async () => {
    if (!searchTerm) return;

    setIsLoading(true);
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
        },
      }
    );
    const data = await res.json();
    setResults(data.tracks.items || []);
    setIsLoading(false);
  };

  const addToPlaylist = async (trackUri: string) => {
    await fetch(`https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ uris: [trackUri] }),
    });
    alert('Added to playlist!');
  };

  return (
    <div className="p-4 space-y-4">
      <iframe
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`}
        width="100%"
        height="352"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowFullScreen
      ></iframe>

      <div className="space-y-2">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Search for a track"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={searchTracks}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* <ul className="space-y-2">
        {results.map((track) => (
          <li key={track.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <strong>{track.name}</strong> – {track.artists.map((a: any) => a.name).join(', ')}
            </div>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              onClick={() => addToPlaylist(track.uri)}
            >
              Add
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
