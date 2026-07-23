import { getRepositories as getRepositoriesGithub } from "./github";
import { getRepositories as getRepositoriesForgejo } from "./forgejo";

export type RepoOutput = {
  id: number;
  name: string;
  description: string | null;
  stars: number;
  forks: number;
  url: string;
  language: string | null;
  languageColor: string;
  updatedAt: string;
  source: "github" | "forgejo";
};

const allowedRepos: Record<string, ("github" | "forgejo")[]> = {
  "imtheo.lol": ["forgejo", "github"],
  liveserver: ["forgejo", "github"],
  RobloxUpdateTracker: ["forgejo", "github"],
  ScamDetector: ["forgejo", "github"],
  Joseph: ["github"],
  ConsoleRenderer: ["github"],
};
const repoOrder = Object.keys(allowedRepos);

async function fetchRepositories(): Promise<RepoOutput[]> {
  switch (process.env.REPO_SOURCE) {
    case "github":
      return getRepositoriesGithub();
    case "forgejo":
      return getRepositoriesForgejo();
    case "mixed":
      return Promise.all([
        getRepositoriesGithub(),
        getRepositoriesForgejo(),
      ]).then(([github, forgejo]) => [...github, ...forgejo]);
    default:
      return [];
  }
}

function isAllowedRepo(repo: RepoOutput) {
  return allowedRepos[repo.name]?.includes(repo.source) ?? false;
}

function mergeRepositories(repos: RepoOutput[]): RepoOutput[] {
  const merged = new Map<string, RepoOutput>();

  for (const repo of repos) {
    const existing = merged.get(repo.name);
    const preferredSource = allowedRepos[repo.name]?.[0];

    if (!existing) {
      merged.set(repo.name, { ...repo });
      continue;
    }

    existing.stars += repo.stars;
    existing.forks += repo.forks;

    if (repo.source === preferredSource) {
      Object.assign(existing, {
        url: repo.url,
        description: repo.description,
        language: repo.language,
        languageColor: repo.languageColor,
        source: repo.source,
      });
    }
  }

  return [...merged.values()].sort(
    (a, b) => repoOrder.indexOf(a.name) - repoOrder.indexOf(b.name),
  );
}

export async function getRepositories(): Promise<RepoOutput[]> {
  const repositories = await fetchRepositories();

  return mergeRepositories(repositories.filter(isAllowedRepo));
}
