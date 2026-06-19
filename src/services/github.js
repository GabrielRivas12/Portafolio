const GITHUB_API = 'https://api.github.com';

export async function checkHasReleases(repo) {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${repo.owner?.login || repo.full_name?.split('/')[0]}/${repo.name}/releases?per_page=1`);
    if (!res.ok) return false;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0;
  } catch {
    return false;
  }
}

export async function fetchRepoByFullName(fullName) {
  const res = await fetch(`${GITHUB_API}/repos/${fullName}`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export async function fetchUserRepos(username) {
  const res = await fetch(`${GITHUB_API}/users/${username}/repos?per_page=100&sort=updated`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export function filterRepos(repos, selectedNames) {
  return repos
    .filter(repo => selectedNames.includes(repo.name))
    .sort((a, b) => selectedNames.indexOf(a.name) - selectedNames.indexOf(b.name));
}

export function formatRepoToProject(repo, images = [], isContributed = false) {
  const title = repo.name
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim();
  return {
    name: repo.name,
    title,
    description: repo.description || 'Sin descripción',
    html_url: repo.html_url,
    topics: repo.topics || [],
    language: repo.language,
    homepage: repo.homepage,
    owner: repo.owner?.login,
    isContributed,
    images,
  };
}
