export default function ProjectsPage() {
  const projects = [
    {
      name: "Ancient Hill Winery Redesign",
      url: "https://ancienthillwinery-redesign.vercel.app/",
      preview: "redesign.png",
    },
    {
      name: "BCIT QDSHacks 2024",
      url: "https://bcit-qdshacks-2024-patpet.vercel.app/",
      preview: "patpet.png",
    },
    {
      name: "Find Waldo Web App",
      url: "https://findwaldo-web-holy-fog-8052.fly.dev/",
      preview: "findwaldo.png",
    },
    {
      name: "Expense Tracker App",
      url: "https://seashark1-npaik.fly.dev/",
      preview: "expensetracker.png",
    },
    {
      name: "Tonyeebrary E-Book library",
      url: "https://tonyeeebrary.vercel.app",
      preview: "tonyeeebrary.png",
    },
    {
      name: "Gaon Restaurant Blog",
      url: "https://blog-gaon.vercel.app/",
      preview: "restaurantblog.png",
    },
    {
      name: "Bank Account Management",
      url: "https://bankaccount.azurewebsites.net",
      preview: "bankaccount.png",
    },
    {
      name: "Words Game Phaser",
      url: "https://wordsgamephaser.vercel.app",
      preview: "typinggame.png",
    },
    {
      name: "Game of YUT - Board Game",
      url: "https://boardgame-eight.vercel.app/",
      preview: "boardgame.png",
    },
    {
      name: "Pokemon Matching Game",
      url: "https://pokemonmatchnig.vercel.app/",
      preview: "cardmatching.png",
    },
    {
      name: "Pokemon Card Trader",
      url: "https://pokemoncardtrader.fly.dev",
      preview: "randomcards.png",
    },
    {
      name: "Unity Runner Game - in Progress",
      url: "https://nakhyunpaik.com",
      preview: "unitygame.png",
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col justify-center items-center">
      <h4 className="text-center text-4xl mb-4">Projects Page</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View project: ${project.name}`}
            className="bg-white text-black border-1 border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden flex flex-col"
          >
            <div
              className="w-full flex-grow"
              style={{
                height: "200px",
                backgroundImage: `url('${project.preview}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="p-2 text-center">{project.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
