import express from "express";
import path from "node:path";
import { config } from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import { discordClient } from "./modules/discordClient";

config({ path: path.join(__dirname, "../.env") });
const isDev = process.env.NODE_ENV !== "production";

import githubRouter from "./routes/github";
import discordRouter from "./routes/discord";

const app = express();

const clientDirectory = path.join(__dirname, "../client");
const buildDirectory = path.join(clientDirectory, "dist");
app.use(express.static(path.join(__dirname, "static"), { dotfiles: "allow" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", true);

app.use("/github", githubRouter);
app.use("/discord", discordRouter);

app.all("/offsets*", (req, res) => {
  const url = new URL(req.originalUrl, `https://${req.headers.host}`);
  const suffix = url.pathname.toLowerCase().startsWith("/offsets")
    ? url.pathname.slice(8)
    : url.pathname;

  const targetPath = suffix || "/";
  res
    .status(308)
    .set("Location", `https://offsets.imtheo.lol${targetPath}`)
    .end();
});

if (isDev) {
  app.use(
    createProxyMiddleware({
      target: "http://localhost:5173",
      changeOrigin: true,
      ws: true,
    }),
  );
} else {
  app.use(express.static(buildDirectory));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildDirectory, "index.html"));
  });
}

app.listen(process.env.EXPRESS_PORT, async () => {
  await discordClient.login(process.env.DISCORD_BOT_TOKEN);

  console.log(
    `[imtheo.lol] server started on port ${process.env.EXPRESS_PORT}`,
  );

  console.log(
    `[imtheo.lol] bot running, user: ${discordClient.user?.username}`,
  );
});
