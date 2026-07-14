import { getLanguageColor } from "../modules/languageColors";
import { RepoOutput } from "./repos";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string | null;
  updated_at: string;
};

export async function getRepositories(): Promise<RepoOutput[]> {
  const username = process.env.GITHUB_USERNAME;
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`,
    {
      headers: {
        Authorization: process.env.GITHUB_API_TOKEN
          ? `Bearer ${process.env.GITHUB_API_TOKEN}`
          : "",
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.status}`);
  }

  const repos: GitHubRepo[] = await response.json();
  return repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    url: repo.html_url,
    language: repo.language,
    languageColor: getLanguageColor(repo.language || ""),
    updatedAt: repo.updated_at,
    source: "github",
  }));
}
