import {
  FaEnvelope,
  FaGithub,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { TbBrandMatrix } from "react-icons/tb";
import { SiForgejo } from "react-icons/si";
import LinkButton from "../components/LinkButton";
import useTitle from "../hooks/Title";
import DiscordWidget from "../components/DiscordInfo";

function Home() {
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

          {/*<LinkButton
            href="https://discord.com/users/1081551899397992509"
            upperText="Discord"
            lowerText="@meowpurrpur"
            icon={<FaDiscord size={20} />}
          />*/}

          <LinkButton
            href="https://t.me/theolol"
            upperText="Telegram"
            lowerText="@theolol"
            icon={<FaTelegram size={20} />}
          />

          <LinkButton
            href="https://matrix.to/#/@theo:imtheo.lol"
            upperText="Matrix"
            lowerText="@theo:imtheo.lol"
            icon={<TbBrandMatrix size={20} />}
          />
        </div>

        <h2>Other accounts</h2>
        <div className="link-container">
          <LinkButton
            href="https://github.com/meowpurrpur"
            upperText="Github"
            lowerText="meowpurrpur"
            icon={<FaGithub size={20} />}
          />

          <LinkButton
            href="https://git.imtheo.lol/theo"
            upperText="Forgejo"
            lowerText="theo"
            icon={<SiForgejo size={20} />}
          />

          <LinkButton
            href="https://www.youtube.com/@meowpurrpur"
            upperText="YouTube"
            lowerText="@meowpurrpur"
            icon={<FaYoutube size={20} />}
          />

          <LinkButton
            href="https://www.tiktok.com/@meowpurrpur"
            upperText="TikTok"
            lowerText="@meowpurrpur"
            icon={<FaTiktok size={20} />}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
