import Link from "next/link";
import Image from "next/image";
import GithubButton from "../../Components/GithubButton";
import LiveButton from "../../Components/LiveButton";

export default function AncientHillWineryRedesign() {
  const project = {
    name: "Ancient Hill Winery Redesign",
    url: "https://ancienthillwinery-redesign.vercel.app/",
    github: "https://github.com/npaik/ancienthillwinery-redesign",
    preview: "/redesign.png",
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
          Website Redesign: Elevating User Experience with Modern Web Practices
        </h1>
        <h2 className="text-lg font-semibold">Introduction and Motivation</h2>
        <p>
          Every summer, I explore the wineries in the Kelowna region. This
          activity is both a personal passion and a cultural exploration. During
          one such expedition, I encountered a winery with a website that seemed
          frozen. Recognizing the potential to enhance its online presence, I
          embarked on a project to redesign the winery`&#39;`s website, ensuring
          it reflects the elegance and modernity of today`&#39;`s digital
          landscape.
        </p>
        <h2 className="text-lg font-semibold">
          Current Challenges and Proposed Solutions
        </h2>
        <h2 className="text-lg font-semibold">1. Security Enhancements</h2>
        <p>
          Current Issue: The existing website lacks HTTPS, posing a security
          risk and diminishing user trust. Solution: Implement SSL/TLS
          encryption to safeguard user data and enhance credibility.
        </p>

        <h2 className="text-lg font-semibold">2. Design and User Interface</h2>
        <p>
          Current Issue: An outdated design with misaligned images and
          underutilized space. Solution: Introduce a minimalistic layout with
          high-resolution, full-width imagery that adapts responsively to
          various devices. Images should be dynamic, rotating through a carousel
          to showcase different aspects of the winery.
        </p>
        <h2 className="text-lg font-semibold">
          3. Content Presentation and Accessibility
        </h2>
        <p>
          Current Issue: Reliance on static images for content delivery hinders
          accessibility and SEO. Solution: Convert content into HTML text,
          ensuring it`&#39;`s searchable, scalable, and accessible. Integrate
          SEO best practices like meta tags and alt text to boost visibility.
        </p>
        <h2 className="text-lg font-semibold">
          4. Typography and Visual Hierarchy
        </h2>

        <p>
          Current Issue: Uniform font sizes create a flat informational
          hierarchy. Solution: Employ varied font sizes and styles for headings,
          subheadings, and body text to guide the user`&#39;`s eye and improve
          content digestion.
        </p>
        <h2 className="text-lg font-semibold">5. Navigation and Usability</h2>
        <p>
          Current Issue: A nondescript navigation bar with limited
          functionality. Solution: Enhance the navigation bar with clear,
          prominent text and drop-down menus to improve user flow and site
          usability.
        </p>
        <h2 className="text-lg font-semibold">
          6. Contact and Social Media Integration
        </h2>

        <p>
          Current Issue: Inconspicuous contact details and outdated social media
          icons. Solution: Display contact information prominently, update
          social media icons, and ensure all contact methods, such as phone
          numbers and emails, are interactive (click-to-call/mailto).
        </p>

        <h2 className="text-lg font-semibold">7. E-Commerce Capabilities</h2>
        <p>
          Current Issue: No direct means to purchase wines online. Solution:
          Develop an e-commerce platform within site with clear CTAs for
          purchasing, such as `&#39;`Buy Case`&#39;` or `&#39;`Add to
          Cart`&#39;`. Each wine should have its dedicated page with detailed
          descriptions and high-quality images.
        </p>
        <h2 className="text-lg font-semibold">
          8. Interactive and Engaging Content
        </h2>
        <p>
          Current Issue: Lack of engaging elements that capture the
          winery`&#39;`s story and products. Solution: Introduce interactive
          elements such as video tours, a timeline of the winery`&#39;`s
          history, and customer reviews to create an immersive experience.
        </p>
        <h2 className="text-lg font-semibold">
          9. Enhancing Credibility and Engagement
        </h2>

        <p>
          Current Issue: Empty spaces and large blocks of text. Solution:
          Utilize space effectively with customer testimonials, awards, and a
          visual timeline. Break large text into manageable sections with
          subheadings and include interactive elements like quizzes or polls
          about wine preferences.
        </p>
        <h2 className="text-lg font-semibold">10. Visual Storytelling</h2>
        <p>
          Current Issue: More visuals are needed to convey the winery`&#39;`s
          heritage and quality. Solution: Integrate historical photos, detailed
          vineyard maps, and info-graphics about wine-making processes to enrich
          the narrative and engage visitors.
        </p>
        <h2 className="text-lg font-semibold">Conclusion</h2>
        <p>
          The redesign of the Ancient Hill Winery website is not merely about
          aesthetic enhancement but about transforming the site into a dynamic,
          secure, and user-friendly platform that serves as a digital gateway to
          the winery`&#39;`s experience. By addressing the current shortcomings
          and implementing modern web practices, the redesigned website will
          attract more visitors, provide valuable information, and facilitate an
          easier connection with the winery, whether for educational purposes or
          direct wine purchases.
        </p>
      </div>
    </div>
  );
}
