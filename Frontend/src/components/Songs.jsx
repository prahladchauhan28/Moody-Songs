import React from 'react'

const Songs = () => {
    const recommendations = [
  {
    title: "Good Vibrations",
    artist: "The Beach Boys",
    color: "bg-orange-500",
  },
  {
    title: "Walking on Sunshine",
    artist: "Katrina and the Waves",
    color: "bg-gray-700",
  },
  {
    title: "Best Day of My Life",
    artist: "American Authors",
    color: "bg-fuchsia-500",
  },
  {
    title: "On Top of the World",
    artist: "Imagine Dragons",
    color: "bg-blue-500",
  },
];
  return (
    <div>
       <div className="mt-8">
          <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-3">
            Recommendations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recommendations.map((song, index) => (
              <div
                key={index}
                className="bg-[#1b2a3a] p-3 rounded-xl hover:bg-[#243447] transition"
              >
                <div className={`w-full h-20 ${song.color} rounded-md mb-2`} />
                <div className="text-sm font-semibold leading-tight">
                  {song.title}
                </div>
                <div className="text-xs text-gray-400">{song.artist}</div>
                <button className="mt-2 text-white text-sm">▶</button>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Songs
