import LinkButton from "../components/LinkButton";
import { FaHome } from "react-icons/fa";
import useTitle from "../hooks/Title";

export default function NotFound() {
  useTitle("imtheo.lol - 404");

  return (
    <>
      <div className="centered">
        <h1
          style={{ fontSize: "2.5rem", marginBottom: "0" }}
          className="accent"
        >
          404
        </h1>

        <p>
          Looks like this page wasn't found... if you think this is a mistake
          please contact me!
        </p>

        <LinkButton href="/" lowerText="Home" icon={<FaHome size={20} />} />
      </div>
    </>
  );
}
