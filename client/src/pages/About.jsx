import useTitle from "../hooks/Title";
import LinkButton from "../components/LinkButton";

function About() {
  useTitle("imtheo.lol - about");

  return (
    <>
      <div className="centered">
        <h1 style={{ marginBottom: 0 }}>About me</h1>
        <p>
          As you probably know, my name is Theo, though most people online know
          me as <span className="accent-gradient">@meowpurrpur</span>. I've been
          into programming, computers, and pretty much anything tech-related for
          as long as I can remember. I also enjoy playing games and listening to
          music!
        </p>

        <p>
          I have experience with a wide range of programming languages and
          frameworks. For backend systems and desktop applications, I mainly
          work with C++ and occasionally Rust. On the frontend side, I mostly
          use React with Vite. I also have extensive experience working with
          PostgreSQL databases. Beyond software development, I've spent time
          working with networking and infrastructure, including configuring and
          securing networks, as well as deploying and managing servers.
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
            icon={<img src="Icons/CPP.png" width={20}></img>}
          />

          <LinkButton
            href="https://rust-lang.org"
            lowerText="Rust"
            icon={<img src="Icons/Rust.svg" width={20}></img>}
          />

          <LinkButton
            href="https://dotnet.microsoft.com/en-us/languages/csharp"
            lowerText="C#"
            icon={<img src="Icons/CSharp.png" width={20}></img>}
          />

          <LinkButton
            href="https://go.dev"
            lowerText="Go"
            icon={<img src="Icons/Go.png" width={20}></img>}
          />

          <LinkButton
            href="https://www.python.org"
            lowerText="Python"
            icon={<img src="Icons/Python.png" width={20}></img>}
          />

          <LinkButton
            href="https://luau.org"
            lowerText="LuaU"
            icon={<img src="Icons/LuaU.png" width={20}></img>}
          />

          <LinkButton
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            lowerText="JavaScript"
            icon={<img src="Icons/JS.png" width={20}></img>}
          />

          <LinkButton
            href="https://www.typescriptlang.org"
            lowerText="TypeScript"
            icon={<img src="Icons/TS.png" width={20}></img>}
          />
        </div>

        <h3>Libraries & Frameworks</h3>
        <div className="link-container">
          <LinkButton
            href="https://react.dev"
            lowerText="React"
            icon={<img src="Icons/React.png" width={20}></img>}
          />

          <LinkButton
            href="https://tailwindcss.com"
            lowerText="Tailwind"
            icon={<img src="Icons/Tailwind.png" width={20}></img>}
          />

          <LinkButton
            href="https://www.electronjs.org"
            lowerText="Electron"
            icon={<img src="Icons/Electron.png" width={20}></img>}
          />

          <LinkButton
            href="https://v2.tauri.app"
            lowerText="Tauri"
            icon={<img src="Icons/Tauri.png" width={20}></img>}
          />

          <LinkButton
            href="https://expressjs.com"
            lowerText="Express"
            icon={<img src="Icons/Express.png" width={20}></img>}
          />
        </div>
      </div>
    </>
  );
}

export default About;
