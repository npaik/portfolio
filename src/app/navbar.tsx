import Link from "next/link";

export default async function NavBar({ className }: { className?: string }) {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <Link className="text-4xl font-bold text-white" href="/">
        Tony Paik
      </Link>
      <div className="flex items-center space-x-4">
        <Link
          className="mt-4 ml-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
          href="/AboutMe"
        >
          About Me
        </Link>
        <Link
          href="/Projects"
          className="mt-4 ml-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
        >
          Projects
        </Link>
        <Link
          href="/Contact"
          className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
