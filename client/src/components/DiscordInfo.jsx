import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";

export default function DiscordWidget({ userId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    async function loadInfo() {
      try {
        setLoading(true);

        const res = await fetch(`/discord/${userId}/info`);
        if (!res.ok) {
          throw new Error("Failed to fetch Discord info");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    loadInfo();
  }, [userId]);

  return (
    <a className="discord-card" href={`https://discord.com/users/${userId}`}>
      {!loading && data ? (
        <>
          {data.banner ? (
            <img className="discord-card-banner" src={data.banner} />
          ) : (
            <div
              className="discord-card-banner"
              style={{ backgroundColor: data.banner_color }}
            />
          )}

          <FaDiscord className="discord-card-icon" size={24} />

          <div className="discord-card-avatar-wrapper">
            <img
              className="discord-card-avatar"
              src={data.avatar}
              alt="avatar"
            />

            {data.avatar_decoration && (
              <img
                className="discord-card-avatar-deco"
                src={data.avatar_decoration}
                alt="avatar-decoration"
              />
            )}

            <span className={`discord-status discord-status-${data.status}`} />
          </div>

          <div className="discord-card-content">
            <div className="discord-card-name">{data.name}</div>
            <div className="discord-card-username">@{data.username}</div>
          </div>
        </>
      ) : (
        <>
          <div
            className="discord-card-banner"
            style={{ backgroundColor: "var(--text-primary)" }}
          />

          <FaDiscord className="discord-card-icon" size={24} />

          <div className="discord-card-avatar-wrapper">
            <span className={`discord-status discord-status-offline`} />
          </div>

          <div className="discord-card-content">
            <div className="discord-card-name">loading...</div>
            <div className="discord-card-username">@...</div>
          </div>
        </>
      )}
    </a>
  );
}
