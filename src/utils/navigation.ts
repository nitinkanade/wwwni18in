/**
 * Navigation & URL Helper for Astro Base Path handling
 */
export function getUrl(path: string): string {
  if (!path) return import.meta.env.BASE_URL;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
