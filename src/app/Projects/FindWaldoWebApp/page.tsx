import Link from "next/link";
import Image from "next/image";

export default function FindWaldoWebApp() {
  const project = {
    name: "Find Waldo Web App",
    url: "https://findwaldo-web-holy-fog-8052.fly.dev/",
    preview: "/findwaldo.png",
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="text-center space-y-4 w-full max-w-4xl px-4">
        <h1 className="text-2xl font-semibold pb-10">{project.name}</h1>
        <Link href={project.url} target="_blank" passHref>
          <div className="cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
              <Image
                src={project.preview}
                alt={`Preview of ${project.name}`}
                layout="responsive"
                width={800}
                height={450}
                objectFit="cover"
                className="duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="text-left w-full max-w-4xl px-4 pt-10 space-y-4">
        <h1 className="text-xl font-bold text-indigo-500">
          Welcome to Find Waldo: A Game Full of Surprises
        </h1>
        <p>
          Once upon a time, in a world filled with gadgets and games, I had a
          bright idea. Why not make a game that takes us back to the fun of
          looking through picture books, where you try to find that one guy in
          the striped shirt? That’s how Find Waldo started. It’s a game where
          kids from 5 to 10 years old can jump into colorful worlds on their
          screens, looking for Waldo without bumping into anything scary or too
          grown-up.
        </p>

        <h2 className="text-lg font-semibold">
          The Start of Something Special
        </h2>
        <p>
          Find Waldo isn’t just any game. It’s a special place on the internet
          made just for kids. Remember those Where’s Waldo? books? I turned that
          idea into a fun game you can play on a computer or tablet. It’s all
          about having a good time while getting better at noticing small
          details.
        </p>

        <h2 className="text-lg font-semibold">Making the Game</h2>
        <p>
          To build this game, I used React with TypeScript as my paint and brush
          to make it look pretty and fun. Then, I used .NET with C# to make sure
          everything worked right when you played.
        </p>
        <p>
          I’ve used Neon PostgreSQL and Drizzle ORM to keep track of all the
          different users and scores. To ensure you could play the game without
          any hiccups, I used Swagger to check where you are in the game and
          SignalR to let you play in real-time.
        </p>

        <h2 className="text-lg font-semibold">A Little Bump in the Road</h2>
        <p>
          Creating Find Waldo mainly was smooth sailing, but I hit a snag. I
          used pictures of Waldo that I didn’t make myself, which meant I
          couldn’t share the game with everyone just yet. But don’t worry! I
          have plans to create new pictures that are all ours so everyone can
          play.
        </p>

        <h2 className="text-lg font-semibold">What’s Next?</h2>
        <p>
          I’m dreaming big for Find Waldo. Imagine inviting your friends to
          different rooms in the game where you can all look for Waldo together.
          That’s going to be a lot of fun!
        </p>

        <h2 className="text-lg font-semibold">The Story So Far</h2>
        <p>
          Launching Find Waldo has been an amazing journey. It’s a game that
          shows how awesome it can be to play something just fun and good for
          the brain. It’s a little reminder that adventure and discovery aren’t
          just for the big kids.
        </p>
        <p>
          And that’s the story of Find Waldo. It’s more than a game—it’s a new
          adventure, a challenge, and a lot of fun all rolled into one. And the
          best part? It’s just getting started.
        </p>
      </div>
    </div>
  );
}
