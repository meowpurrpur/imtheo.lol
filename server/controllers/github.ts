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

type RepoOutput = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  url: string;
  language: string | null;
  updatedAt: string;
};

const ALLOWED_REPOS = ["ConsoleRenderer", "IconsInWorld", "RobloxUpdateTracker"];

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

  return repos
    .filter((repo) => ALLOWED_REPOS.includes(repo.name))
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      language: repo.language,
      updatedAt: repo.updated_at,
    }));
}
