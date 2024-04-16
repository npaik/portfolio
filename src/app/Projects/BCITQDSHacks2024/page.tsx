import Link from "next/link";
import Image from "next/image";
import Button from "../../Components/Button";

export default function BCITQDSHacks2024() {
  const project = {
    name: "BCIT QDSHacks 2024",
    url: "https://bcit-qdshacks-2024-patpet.vercel.app/",
    github: "https://github.com/npaik/bcit-qdshacks-2024-patpet",
    preview: "/patpet.png",
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
                width={800}
                height={450}
                className="duration-300 ease-in-out transform hover:scale-105"
                style={{ height: "auto", width: "auto" }}
              />
            </div>
          </div>
        </Link>
        <Button link={project.github} text={"</> Code"} />
        <Button link={project.url} text={"Live Site"} />
      </div>
      <div className="text-left w-full max-w-4xl px-4 pt-10">
        <p>some texts</p>
      </div>
    </div>
  );
}
