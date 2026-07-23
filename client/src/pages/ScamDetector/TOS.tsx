import useTitle from "../../hooks/Title";

export default function Terms() {
  useTitle("Terms of Service");

  return (
    <div className="centered">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0" }}>
        Terms of Service
      </h1>

      <p>
        By inviting or using this Discord bot, you agree to these Terms of
        Service.
      </p>

      <h2>Use of the Bot</h2>
      <p>
        This bot is designed to help detect common, known scam images shared in
        Discord servers. Detection is provided on a best effort basis and is not
        guaranteed to identify every scam or malicious image.
      </p>

      <h2>Availability</h2>
      <p>
        The bot may be updated, modified, temporarily unavailable, or
        permanently discontinued at any time without notice.
      </p>

      <h2>Responsibility</h2>
      <p>
        Server owners and moderators remain responsible for moderating their own
        communities. The bot is intended as an aid and should not be relied upon
        as the sole moderation tool.
      </p>

      <h2>Termination</h2>
      <p>
        Access to the bot may be restricted or revoked for any server or user if
        it is abused or used in a way that negatively affects the service.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:contact@imtheo.lol">contact@imtheo.lol</a>.
      </p>
    </div>
  );
}
