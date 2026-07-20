import useTitle from "../hooks/Title";
import LinkButton from "../components/LinkButton";
import {
  SiCplusplus,
  SiElectron,
  SiExpress,
  SiGo,
  SiJavascript,
  SiLuau,
  SiPython,
  SiReact,
  SiRust,
  SiSharp,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
} from "react-icons/si";

function About() {
  useTitle("imtheo.lol - about");

  return (
    <>
      <div className="centered">
        <h1 style={{ marginBottom: 0 }}>About me</h1>
        <p>
          As you probably know, my name is Theo, though I go by the username{" "}
          <span className="accent-gradient">@meowpurrpur</span>. I've been
          interested in programming, computers, and pretty much anything
          tech-related for as long as I can remember. I also enjoy playing games
          and listening to music!
        </p>

        <p>
          I have experience with lots of programming languages and frameworks.
          For desktop applications, I mainly work with C++ and occasionally Rust
          or Go. On the frontend side, I mostly use React with Vite. I also have
          extensive experience working with PostgreSQL databases. Beyond
          software, I've spent time working with networking and infrastructure,
          including configuring and securing networks, as well as deploying and
          managing servers.
        </p>

        <h2 style={{ margin: 0 }}>Tech</h2>
        <p>
          A list of programming languages, libraries and frameworks I have
          experience with.
        </p>

        <h3>Languages</h3>
        <div className="link-container">
          <LinkButton
            href="https://isocpp.org"
            lowerText="C++"
            icon={<SiCplusplus size={20} />}
          />

          <LinkButton
            href="https://rust-lang.org"
            lowerText="Rust"
            icon={<SiRust size={20} />}
          />

          <LinkButton
            href="https://dotnet.microsoft.com/en-us/languages/csharp"
            lowerText="C#"
            icon={<SiSharp size={20} />}
          />

          <LinkButton
            href="https://go.dev"
            lowerText="Go"
            icon={<SiGo size={20} />}
          />

          <LinkButton
            href="https://www.python.org"
            lowerText="Python"
            icon={<SiPython size={20} />}
          />

          <LinkButton
            href="https://luau.org"
            lowerText="LuaU"
            icon={<SiLuau size={20} />}
          />

          <LinkButton
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            lowerText="JavaScript"
            icon={<SiJavascript size={20} />}
          />

          <LinkButton
            href="https://www.typescriptlang.org"
            lowerText="TypeScript"
            icon={<SiTypescript size={20} />}
          />
        </div>

        <h3>Libraries & Frameworks</h3>
        <div className="link-container">
          <LinkButton
            href="https://react.dev"
            lowerText="React"
            icon={<SiReact size={20} />}
          />

          <LinkButton
            href="https://tailwindcss.com"
            lowerText="Tailwind"
            icon={<SiTailwindcss size={20} />}
          />

          <LinkButton
            href="https://www.electronjs.org"
            lowerText="Electron"
            icon={<SiElectron size={20} />}
          />

          <LinkButton
            href="https://v2.tauri.app"
            lowerText="Tauri"
            icon={<SiTauri size={20} />}
          />

          <LinkButton
            href="https://expressjs.com"
            lowerText="Express"
            icon={<SiExpress size={20} />}
          />
        </div>
      </div>
    </>
  );
}

export default About;
