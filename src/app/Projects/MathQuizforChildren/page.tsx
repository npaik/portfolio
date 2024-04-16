import Link from "next/link";
import Image from "next/image";
import GithubButton from "../../Components/GithubButton";
import LiveButton from "../../Components/LiveButton";

export default function MathQuiz() {
  const project = {
    name: "Math Quiz for Children",
    url: "https://d1qrtsxpwm67dt.cloudfront.net/",
    github: "https://github.com/npaik/SST-MathGame",
    preview: "/mathgame.png",
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
          Introduction to Math Quiz for Children
        </h1>
        <p>
          In the digital age, interactive learning tools are indispensable.
          Recognizing the need for an engaging educational platform, I developed
          Math Quiz for Children, an app designed to make learning mathematics
          enjoyable and accessible. This app allows children to enhance their
          math skills directly from any device without additional downloads or
          installations.
        </p>
        <h2 className="text-lg font-semibold">Concept and Vision</h2>
        <p>
          The app was born from a simple vision: transforming how children learn
          math. By leveraging the convenience of web technology, Math Quiz for
          Children allows students to practice math anytime, anywhere. This
          flexibility makes it an excellent resource for parents and teachers
          seeking to integrate fun and educational content into their teaching
          methods.
        </p>
        <h2 className="text-lg font-semibold">
          Technology Stack and Development
        </h2>
        <p>
          To bring this vision to life, I utilized a modern and efficient tech
          stack: Frontend: Developed using TypeScript and React, the frontend is
          designed to be interactive and user-friendly. Backend: The backend
          architecture is built on AWS Lambda functions and API Gateway,
          creating a serverless environment that scales automatically and
          maintains performance. Database and Storage: PostgreSQL for database
          management and AWS S3 buckets for data storage ensure robust and
          secure handling of quiz data. Authentication: Kinde Auth manages user
          authentication, providing a secure and seamless user experience.
        </p>
        <h2 className="text-lg font-semibold">Features and Functionality</h2>
        <p>
          The core functionality of Math Quiz for Children revolves around its
          interactive quizzes: Quiz Creation: Teachers and parents can create
          customized math quizzes, which are then stored in the database for
          student access. Color-coded Feedback: To enhance learning, quizzes use
          color coding to indicate performance—grey for unattempted questions,
          green for correct answers, and red for incorrect answers. This visual
          feedback helps students quickly identify areas needing improvement.
          Difficulty Levels: Quizzes can be filtered by difficulty levels,
          allowing students to challenge themselves comfortably.
        </p>
        <h2 className="text-lg font-semibold">Challenges and Improvements</h2>
        <p>
          While the app has been successful, there are areas slated for
          enhancement: Question Bank Expansion: Future updates will include a
          more extensive base of questions at various difficulty levels,
          allowing students to dive right into practice without needing custom
          questions. Performance Optimization: Currently, the app experiences
          slight delays when fetching questions from the database. Optimizing
          this aspect of the app will improve the overall user experience and
          engagement.
        </p>
        <h2 className="text-lg font-semibold">
          Conclusion and Looking Forward
        </h2>
        <p>
          Math Quiz for Children is more than just a tool; it`&#39;`s part of a
          larger mission to make learning enjoyable and accessible for every
          child. As the app evolves, I am committed to continuously improving
          its features and usability, ensuring it remains an invaluable resource
          for educational development.
        </p>
      </div>
    </div>
  );
}
