import Link from "next/link";
import Image from "next/image";

export default function PokemonMatchingGame() {
  const project = {
    name: "Pokemon Matching Game",
    url: "https://pokemonmatchnig.vercel.app/",
    preview: "/cardmatching.png",
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="text-center space-y-4 w-full max-w-4xl px-4">
        <h1 className="text-2xl font-semibold pb-10">{project.name}</h1>
        <Link href={project.url} passHref>
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
      <div className="text-left w-full max-w-4xl px-4 pt-10">
        <p>some texts</p>
      </div>
    </div>
  );
}