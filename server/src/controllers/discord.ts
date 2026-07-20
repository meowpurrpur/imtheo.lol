import { discordClient } from "../modules/discordClient";

type DiscordInfo = {
  name: string;
  username: string;
  avatar?: string;
  avatar_decoration?: string;
  banner?: string;
  banner_color?: number;
  status: string;
};

const cacheTTL = 30_000;
const userCache = new Map<string, { data: DiscordInfo; expiresAt: number }>();

function getAssetExtention(id: string): string {
  return id.startsWith("a_") ? "gif" : "png";
}

export async function getUserInfo(userId: string): Promise<DiscordInfo | null> {
  const now = Date.now();

  const cached = userCache.get(userId);
  if (cached && cached.expiresAt > now) return cached.data;

  const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
    },
  });

  if (response.status == 404) return null;
  if (!response.ok)
    throw new Error(`Failed to fetch discord info: ${response.status}`);

  const user = await response.json();
  const guild = await discordClient.guilds.fetch(
    process.env.DISCORD_GUILD_ID ?? "",
  );

  var member;
  try {
    member = await guild.members.fetch(userId);
  } catch (e) {
    return null;
  }

  const banner = user.banner
    ? `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.${getAssetExtention(user.banner)}?size=256`
    : "";

  const avatar = user.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${getAssetExtention(user.avatar)}?size=256`
    : "";

  const avatarDecoration = user.avatar_decoration_data
    ? `https://cdn.discordapp.com/media/v1/collectibles-shop/${user.avatar_decoration_data.sku_id}/animated`
    : "";

  const data: DiscordInfo = {
    name: member.user.globalName || member.user.username,
    username: member.user.username,
    avatar: avatar,
    avatar_decoration: avatarDecoration,
    banner: banner,
    banner_color: user.banner_color ?? "#dcd9d6",
    status: member.presence?.status ?? "offline",
  };

  userCache.set(userId, {
    data,
    expiresAt: now + cacheTTL,
  });

  return data;
}
