import { useNavigate } from "react-router-dom";

export default function GameCenter() {
  const navigate = useNavigate();

  const games = [
    {
      title: "Catch the Drops",
      emoji: "💧",
      route: "/game1",
      desc: "Catch the falling drops and score points",
    },
    {
      title: "Jump Over the Rocks",
      emoji: "🪨",
      route: "/game2",
      desc: "Jump over obstacles using the space key",
    },
    {
      title: "Ping Pong",
      emoji: "🏃‍♂️",
      route: "/game3",
      desc: "Bounse the ball with paddle",
    },
    {
      title: "Balloon Shooter",
      emoji: "🚀",
      route: "/game4",
      desc: "Shoot the floating baloon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-6 py-10">
      
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-sky-400 text-center mb-10">
        🎮 Game Center
      </h1>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {games.map((game, index) => (
          <div
            key={index}
            onClick={() => navigate(game.route)}
            className="cursor-pointer bg-slate-950 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-800 hover:border-sky-400"
          >
            <div className="text-5xl mb-4">{game.emoji}</div>

            <h2 className="text-2xl font-bold text-sky-400 mb-2">
              {game.title}
            </h2>

            <p className="text-slate-400 text-sm">
              {game.desc}
            </p>

            <button className="mt-6 px-4 py-2 bg-sky-400 text-slate-900 rounded-lg font-semibold hover:bg-sky-500">
              Play →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
