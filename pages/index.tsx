import Head from "next/head";
import style from "./index.module.scss";

interface Skill {
  name: string;
  link: string;
  desc: string;
}

const skills: Skill[] = [
  {
    name: ".NET Core & .NET 6",
    link: "https://en.wikipedia.org/wiki/.NET",
    desc: "My ideal choice for writing backend services",
  },
  {
    name: "Amazon Web Services",
    link: "https://aws.amazon.com/",
    desc: "AWS is my favorite cloud. I really like S3, DynamoDb, CloudFront, CloudWatch and more!",
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    desc: "My favorite JS library for building user interfaces",
  },
  {
    name: "NextJS",
    link: "https://nextjs.org/",
    desc: "One of my favorite frameworks for React",
  },
  {
    name: "Gatsby",
    link: "https://www.gatsbyjs.com/",
    desc: "One of my favorite frameworks for React",
  },
  {
    name: "Redux",
    link: "https://redux.js.org/",
    desc: "Great library for global state management",
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/en/",
    desc: "Great tool for various things such as writing backend services",
  },
  {
    name: "NoSQL",
    link: "https://aws.amazon.com/dynamodb/",
    desc: "DynamoDb is my favorite managed NoSQL database",
  },
  {
    name: "Serverless",
    link: "https://martinfowler.com/articles/serverless.html",
    desc: `BaaS and FaaS are my favorite choices when hosting a service`,
  },
  {
    name: "Jamstack",
    link: "https://jamstack.org/",
    desc: `Jamstack is the new standard architecture for the web`,
  },
  {
    name: "DevOps",
    link: "https://en.wikipedia.org/wiki/DevOps",
    desc: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops)",
  },
  {
    name: "Coffee",
    link: "https://lelit.com/product/bianca-pl162t/",
    desc: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops)",
  },
  {
    name: "JavaScript",
    link: "https://en.wikipedia.org/wiki/JavaScript",
    desc: "I like JavaScript, seriously!",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    desc: "TypeScript is a strict syntactical superset of JavaScript and adds static typing to the language.",
  },
  {
    name: "WebGL",
    link: "https://www.khronos.org/webgl/wiki/Main_Page",
    desc: "WebGL (Web Graphics Library) is a JavaScript API for rendering high-performance interactive 3D and 2D graphics.",
  },
];

const links = [
  {
    url: "https://www.linkedin.com/in/jon-trausti/",
    type: "linkedin",
    icon: "",
    text: "LinkedIn",
  },
  {
    url: "https://github.com/raRaRa",
    type: "github",
    icon: "",
    text: "GitHub",
  },
  {
    url: "https://stackoverflow.com/users/388073/j%c3%b3n-trausti-arason",
    type: "stackoverflow",
    icon: "",
    text: "StackOverflow",
  },
  {
    url: "https://twitter.com/jon_rarara",
    type: "Twitter",
    icon: "",
    text: "Twitter",
  },
];

export default function Home() {
  return (
    <div className={style.profile}>
      <Head>
        <title>Jón Trausti Arason</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <figure>
          <div className="bg-gray-500 bg-gradient-to-br from-gray-500 to-gray-200">
            <img className="" src="/images/jta.jpg" />
          </div>
          <h1 className="mt-10 block text-xl font-semibold">
            Jón Trausti Arason
          </h1>
          <h2 className="mt-2 text-gray-500">
            Husband, father of three and a full-stack programmer.
          </h2>
          <figcaption className="max-w-7xl m-auto text-sm md:text-lg text-gray-600 pt-10 pl-2 pr-2 sm:pl-10 sm:pr-10 md:pl-30 md:pr-30 break-words">
            <h2 className="mb-5">
              Hi, my name is Jón Trausti and I'm from Reykjavík, Iceland, planet
              Earth, Milky Way, Universe 42B6.
            </h2>
            <p>
              I have passion for programming, solving problems and studying new
              tech.
              {` `}
              I've been programming since I was around 12 years old, which all
              started when I had the luck to tinker with{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Delphi_(software)"
              >
                Delphi
              </a>
              .{` `}I wrote my first online pictionary game called Skissa with
              ActionScript and .NET, which was popular in Iceland around 2007.
              I've written multiple websites, services and games throughout the
              years since then.
              {` `}
            </p>
            <p className="mt-5">
              More recently I've been writing services using .NET Core & Node.js
              and using managed solutions such as Lambda (FaaS) and API Gateway
              to run them in the cloud.
              {` `}
              For frontend I like to use React with Gatsby and NextJS, which are
              also hosted with{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://martinfowler.com/articles/serverless.html"
              >
                serverless
              </a>{" "}
              solutions such as S3, CloudFront and Cloudflare Pages.
              {` `}I also have great experience with databases such as MSSQL and
              DynamoDb, but I always prefer managed solutions such as DynamoDb
              and S3, which has completely transformed how I think about
              databases today.
            </p>
            <p className="mt-5">
              I could talk about tech all day, so please don't hesitate to{" "}
              <a href="mailto:icewolfy@gmail.com" title="icewolfy@gmail.com">
                contact me
              </a>{" "}
              if you want to learn more!
            </p>
          </figcaption>
        </figure>
        <section className="mt-20 bg-gray-200 pt-10 pb-14 bg-gradient-to-br from-gray-200 to-gray-50">
          <h2 className="text-md text-center text-gray-400 uppercase italic font-bold">
            favorite tech topics
          </h2>
          <div className="text-xs md:text-sm break-words mx-5 pt-6">
            {skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                title={skill.desc}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-2 bg-gray-400 text-white rounded-full my-1 mx-2 break-words whitespace-pre-wrap transition-transform transform hover:scale-110"
              >
                {skill.name}
              </a>
            ))}
          </div>
        </section>
        <section className="mt-10 mb-20">
          {/* <h2 className="text-xl text-center text-gray-500 uppercase italic font-bold">links</h2> */}
          <div className="text-lg align-text-top inline-block pt-6">
            {links.map((link) => (
              <a
                target="_blank"
                key={link.url}
                href={link.url}
                className="flex px-5 py-2 items-center justify-center text-gray-600 rounded-full m-1 align-text-top opacity-75 hover:opacity-100 transition-opacity"
              >
                <span className="flex">{link.text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex ml-1 w-4 h-4 md:w-5 md:h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-400 mb-10">
        This page is written in NextJS and hosted in Cloudflare Pages.
      </footer>
    </div>
  );
}
