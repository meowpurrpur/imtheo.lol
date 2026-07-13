import { getLanguageColor } from "../modules/languageColors";
import { getRepositories as getRepositoriesGithub } from "../controllers/github";
import { RepoOutput } from "./github";

type ForgejoRepo = {
  id: number;
  name: string;
  description: string | null;
  stars_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
  updated_at: string;
};

const ALLOWED_REPOS = ["imtheo.lol", "liveserver", "RobloxUpdateTracker"];

export async function getRepositories(): Promise<RepoOutput[]> {
  const githubRepos = await getRepositoriesGithub();

  const username = process.env.FORGEJO_USERNAME;
  const response = await fetch(
    `${process.env.FORGEJO_BASE_URL}/api/v1/users/${username}/repos`,
    {
      headers: {
        Authorization: process.env.FORGEJO_API_TOKEN
          ? `token ${process.env.FORGEJO_API_TOKEN}`
          : "",
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.status}`);
  }

  const repos: ForgejoRepo[] = await response.json();
  const allowedSet = new Set(ALLOWED_REPOS);
  const githubMap = new Map(githubRepos.map((repo) => [repo.name, repo]));

  return repos
    .filter((repo) => allowedSet.has(repo.name))
    .map((repo) => {
      const githubRepo = githubMap.get(repo.name);

      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stars: repo.stars_count + (githubRepo?.stars ?? 0),
        forks: repo.forks_count + (githubRepo?.forks ?? 0),
        url: repo.html_url,
        language: repo.language,
        languageColor: getLanguageColor(repo.language || ""),
        updatedAt: repo.updated_at,
      };
    })
    .sort((a, b) => {
      return ALLOWED_REPOS.indexOf(a.name) - ALLOWED_REPOS.indexOf(b.name);
    });
}
