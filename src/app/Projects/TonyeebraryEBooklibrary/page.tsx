import Link from "next/link";
import Image from "next/image";
import GithubButton from "../../Components/GithubButton";
import LiveButton from "../../Components/LiveButton";

export default function TonyeebraryEBooklibrary() {
  const project = {
    name: "Tonyeebrary E-Book library",
    url: "https://tonyeeebrary.vercel.app/",
    github: "https://github.com/npaik/tonyeeebrary",
    preview: "/tonyeeebrary.png",
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
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
        <div className="flex justify-end items-center space-x-4">
          <GithubButton link={project.github} text={"</> Code"} />
          <LiveButton link={project.url} text={"Live Site"} />
        </div>
      </div>
      <div className="text-left w-full max-w-4xl px-4 pt-10 space-y-4">
        <h1 className="text-xl font-bold text-indigo-500">
          Tonyeebrary: A Personal E-Book Library App
        </h1>
        <h2 className="text-lg font-semibold">Introduction and Concept</h2>
        <p>
          In an era where digital consumption of literature is as prevalent as
          ever, Tonyeebrary offers a personalized reading experience. This app
          allows users to build their own e-book collection from files they
          already own, bypassing the limitations of commercial e-book platforms
          like Amazon Kindle, Apple, or Google Books. Tonyeebrary is for those
          who desire a customizable and portable reading hub.
        </p>
        <h2 className="text-lg font-semibold">
          Technology Stack and Functionality
        </h2>
        <p>
          To create a robust and user-friendly e-book library, I employed a
          modern tech stack: Frontend Development: The app uses React, Next.js,
          and TypeScript, providing a seamless and dynamic user interface.
          Database and Storage: PostgreSQL for database management and AWS S3
          buckets for cloud storage ensure efficient handling and accessibility
          of e-book files. E-Book Rendering: EPUB.js renders e-book files,
          allowing users to read EPUB-format books directly in the browser.
          Authentication: NextAuth is implemented for secure user
          authentication, ensuring that each user`&#39;`s library is private and
          accessible only to them.
        </p>
        <h2 className="text-lg font-semibold">Core Features</h2>
        <p>
          Tonyeebrary stands out with its functionality tailored for avid
          readers: E-Book Upload and Access: Users can upload EPUB files to
          their personal database and access their collection on any device,
          providing a genuinely portable library. Cross-Device Synchronization:
          Cloud storage ensures the user`&#39;`s library is synced across all
          devices, allowing them to pick up where they left off, regardless of
          the device used.
        </p>
        <h2 className="text-lg font-semibold">Proposed Enhancements</h2>
        <p>
          While Tonyeebrary currently meets the basic needs of digital readers,
          there are several enhancements planned to broaden its capabilities:
          File Format Support: Future updates will include support for other
          popular text and e-book formats, increasing the app`&#39;`s
          versatility. Text-to-Speech Feature: An upcoming feature is
          text-to-speech functionality, where the app will read books aloud to
          users while highlighting the text being read. This will not only
          enhance accessibility but also allow users to enjoy books in a
          hands-free mode, making it convenient for multitasking or visually
          impaired readers.
        </p>
        <h2 className="text-lg font-semibold">Conclusion</h2>
        <p>
          Tonyeebrary is more than just an e-book reader; it is a gateway to a
          personalized reading experience. Allowing users to manage their
          digital library independently of commercial platforms empowers them to
          curate their literary world as they see fit. The planned updates aim
          to make Tonyeebrary an even more comprehensive tool for readers of all
          types, reinforcing its position as a versatile and user-centred
          application.
        </p>
      </div>
    </div>
  );
}
