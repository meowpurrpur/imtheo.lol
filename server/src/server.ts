import express from "express";
import path from "node:path";
import { config } from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import { discordClient } from "./modules/discordClient";

config({ path: path.join(__dirname, "../../.env"), quiet: true });
const isDev = process.env.NODE_ENV !== "production";

import projectsRouter from "./routes/projects";
import discordRouter from "./routes/discord";
import consola from "consola";

const app = express();

const clientDirectory = path.join(__dirname, "../../client");
const buildDirectory = path.join(clientDirectory, "dist");
app.use(
  express.static(path.join(__dirname, "../static"), {
    dotfiles: "allow",
    setHeaders: (res, path) => {
      if (
        path.endsWith("/.well-known/matrix/client") ||
        path.endsWith("/.well-known/matrix/server")
      ) {
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
      }
    },
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", true);

app.use("/projects", projectsRouter);
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

consola.start(
  `Starting webserver on port ${process.env.EXPRESS_PORT}, env: ${process.env.NODE_ENV}...`,
);

app.listen(process.env.EXPRESS_PORT, async () => {
  consola.success(
    `Webserver started on http://localhost:${process.env.EXPRESS_PORT}`,
  );

  consola.start(`Logging into Discord client...`);
  await discordClient.login(process.env.DISCORD_BOT_TOKEN);

  consola.success(
    `Discord client ready, user: ${discordClient.user?.username}`,
  );
});
