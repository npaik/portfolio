import Link from "next/link";
import Image from "next/image";
import GithubButton from "../../Components/GithubButton";
import LiveButton from "../../Components/LiveButton";

export default function BCITQDSHacks2024() {
  const project = {
    name: "BCIT QDSHacks 2024",
    url: "https://bcit-qdshacks-2024-patpet.vercel.app/",
    github: "https://github.com/npaik/bcit-qdshacks-2024-patpet",
    preview: "/patpet.png",
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
          MindPet: Your Virtual Pet and Personal Assistant
        </h1>
        <h2 className="text-lg font-semibold">Inspiration and Purpose</h2>
        <p>
          Navigating the demanding life of a student, with over eight courses
          per term, can be overwhelming, often leading to neglected personal
          care. Observing how students diligently care for their pets, we
          conceived MindPet. This virtual pet encourages you to manage your
          wellbeing as meticulously as a real pet. This platform offers a unique
          blend of companionship and productivity, designed for students who
          face constraints like strict schedules or no-pet housing policies.
        </p>
        <h2 className="text-lg font-semibold">Design and Technology</h2>
        <p>
          MindPet was meticulously crafted using a comprehensive and modern tech
          stack: Design: The user interface was prototyped on Figma, ensuring a
          visually appealing and intuitive design. Frontend: Built with React,
          utilizing Vite as the build tool and TailwindCSS for styling, the app
          provides a seamless and responsive user experience. Backend:
          Express.js serves as the backbone of the server side, handling API
          requests efficiently. Chat Functionality: Integration with the OpenAI
          API enables the chatbot feature, allowing users to engage in
          meaningful interactions with their virtual pet.
        </p>
        <h2 className="text-lg font-semibold">Core Features</h2>
        <p>
          MindPet introduces several engaging features to enhance the user
          experience: Interactive Pet Care: Users can feed, play with, and put
          their kitten to sleep, mirroring real-life pet interactions. Chat with
          Your Pet: Leveraging the OpenAI API, the virtual pet can assist with
          research and respond intelligently to user queries, making it a
          helpful study partner. Task Management: Users can add tasks to their
          to-do list and receive timely reminders to help them stay on top of
          their studies.
        </p>
        <h2 className="text-lg font-semibold">Challenges Faced</h2>
        <p>
          Developed during a 48-hour hackathon, MindPet posed several
          challenges: Diverse Team Dynamics: Working in a team with varying
          skill sets and technical backgrounds, I streamlined the development
          process to maintain functionality without the need for complex
          technologies. Documentation and API Integration: Initial challenges
          included a need for more detailed documentation for integrating the
          OpenAI API, requiring creative problem-solving to implement the
          chatbot feature.
        </p>
        <h2 className="text-lg font-semibold">Future Directions</h2>
        <p>
          While MindPet has laid a strong foundation, there are several
          enhancements planned: User Authentication: Transitioning from local
          storage to a proper login system to enhance security and user
          personalization. Database Integration: Implementing a database to
          manage user schedules and tasks more effectively. Enhanced
          Notifications: Introducing notifications to alert users when their
          virtual pet needs attention, adding an element of realism and urgency.
          Behavioural Dynamics: A feature where the virtual cat exhibits more
          dynamic behaviours, such as `&#34;`running away`&#34;` if neglected
          for too long, to encourage regular interaction.
        </p>
        <h2 className="text-lg font-semibold">Conclusion</h2>
        <p>
          MindPet is more than just a virtual pet—it`&#39;`s a companion that
          grows with you, supporting your academic and personal wellbeing. As we
          continue to develop and refine MindPet, we aim to introduce more
          features that enrich the user experience and foster a supportive
          virtual environment for students.
        </p>
      </div>
    </div>
  );
}
