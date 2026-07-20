import { FaEnvelope } from "react-icons/fa";
import {
  SiCodeberg,
  SiForgejo,
  SiGithub,
  SiMatrix,
  SiTelegram,
} from "react-icons/si";
import LinkButton from "../components/LinkButton";
import useTitle from "../hooks/Title";
import DiscordWidget from "../components/DiscordInfo";

export default function Home() {
  useTitle("imtheo.lol");

  return (
    <>
      <div className="centered">
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0" }}>
          Hello, i'm <span className="accent-gradient">theo</span>.
        </h1>

        <p>
          I am a self-taught software developer with experience in a wide range
          of programming languages and technologies. I learned most of my skills
          on my own through building projects, experimenting, and figuring
          things out as I go, I am pretty comfortable adapting to new tools and
          stacks quickly. I focus on writing solid, clean code and keep
          improving by just building things and learning from what breaks or
          works well.
        </p>

        <h2>Where to contact me</h2>
        <DiscordWidget userId={"1081551899397992509"} />
        <div className="link-container">
          <LinkButton
            href="mailto:contact@imtheo.lol"
            upperText="Email"
            lowerText="contact@imtheo.lol"
            icon={<FaEnvelope size={20} />}
          />

          <LinkButton
            href="https://t.me/theolol"
            upperText="Telegram"
            lowerText="@theolol"
            icon={<SiTelegram size={20} />}
          />

          <LinkButton
            href="https://matrix.to/#/@theo:imtheo.lol"
            upperText="Matrix"
            lowerText="@theo:imtheo.lol"
            icon={<SiMatrix size={20} />}
          />
        </div>

        <h2>Find my code</h2>
        <div className="link-container">
          <LinkButton
            href="https://git.imtheo.lol/theo"
            upperText="Forgejo"
            lowerText="theo"
            icon={<SiForgejo size={20} />}
          />

          <LinkButton
            href="https://github.com/meowpurrpur"
            upperText="Github"
            lowerText="meowpurrpur"
            icon={<SiGithub size={20} />}
          />

          <LinkButton
            href="https://codeberg.org/meowpurrpur"
            upperText="Codeberg"
            lowerText="meowpurrpur"
            icon={<SiCodeberg size={20} />}
          />
        </div>
      </div>
    </>
  );
}
