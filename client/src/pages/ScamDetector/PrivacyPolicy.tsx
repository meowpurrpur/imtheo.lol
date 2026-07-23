import useTitle from "../../hooks/Title";

export default function Privacy() {
  useTitle("Privacy Policy");

  return (
    <div className="centered">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0" }}>
        Privacy Policy
      </h1>

      <p>
        This Privacy Policy explains what information the bot stores and how it
        is used.
      </p>

      <h2>Information Stored</h2>
      <p>The bot stores only the information required to operate:</p>

      <ul>
        <li>Discord server (guild) IDs.</li>
        <li>Server invite links when configured by administrators.</li>
      </ul>

      <h2>Image Processing</h2>
      <p>
        Image attachments are scanned using Optical Character Recognition (OCR)
        to detect common, known scam images. Images are processed only for the
        duration of the scan and are immediately discarded afterwards. The bot
        does not permanently store image attachments.
      </p>

      <h2>Data Usage</h2>
      <p>
        Stored data is used solely to provide the bot's functionality and is not
        sold or shared with third parties except where required by law.
      </p>

      <h2>Data Removal</h2>
      <p>
        When the bot is removed from a server, stored data associated with that
        server may be deleted. Server administrators may also request removal of
        stored data by contacting the developer.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, contact{" "}
        <a href="mailto:contact@imtheo.lol">contact@imtheo.lol</a>.
      </p>
    </div>
  );
}
