import { FaCheck, FaClipboard, FaKey, FaLink } from "react-icons/fa";
import { SiUbuntu } from "react-icons/si";

import LinkButton from "../components/LinkButton";
import useTitle from "../hooks/Title";
import { useState } from "react";

export default function PGP() {
  useTitle("imtheo.lol - PGP");

  const fingerprint = "49EA 9587 0B2B 3953 9E3B 862A EE29 A0F9 F9D9 9E34";
  const encodedFingerprint = encodeURIComponent(fingerprint).replace(
    /%20/g,
    "+",
  );

  const [copied, setCopied] = useState<boolean>(false);

  async function copyFingerprint() {
    await navigator.clipboard.writeText(fingerprint);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <div className="centered">
        <h1 style={{ marginBottom: 0 }}>OpenPGP</h1>

        <p>
          I use OpenPGP to sign messages, git commits, verify my identity and
          encrypted emails/communication. You can find my public key and
          fingerprint below as well as some keyservers. Feel free to send me
          encrypted emails using these keys.
        </p>

        <div className="link-container">
          <LinkButton
            href="/pgp.asc"
            lowerText="Public Key"
            icon={<FaKey size={20} />}
          />
        </div>

        <h2>Fingerprint</h2>
        <div className="fingerprint-container">
          <code>{fingerprint}</code>
          <button onClick={copyFingerprint}>
            {!copied ? <FaClipboard size={14} /> : <FaCheck size={14} />}
          </button>
        </div>

        <h2>Keyservers</h2>
        <p>My public key is also available from these OpenPGP keyservers:</p>

        <div className="link-container">
          <LinkButton
            href={`https://keyserver.ubuntu.com/pks/lookup?search=${encodedFingerprint}&fingerprint=on&op=index`}
            lowerText="Ubuntu Keyserver"
            icon={<SiUbuntu size={20} />}
          />

          <LinkButton
            href={`https://keys.openpgp.org/search?q=${encodedFingerprint}`}
            lowerText="keys.openpgp.org"
            icon={<FaLink size={20} />}
          />
        </div>
      </div>
    </>
  );
}
