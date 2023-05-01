import type { ProjectModel } from '@models/index';
import { portableTextToHtml } from 'astro-sanity'
import { paginateProjectsQuery } from './queries';

export const isRouteActive = (currentPath: string, path: string) =>
  currentPath === path ? 'active' : '';

export const sanityPortableText = (portabletext: Array<Object>) => {
  return portableTextToHtml(portabletext);
}

export const getPaginateProjects = async (limit: number, offset: number): Promise<ProjectModel[]> => {
const response = await fetch(import.meta.env.PUBLIC_SANITY_BASE_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: paginateProjectsQuery(limit, offset)
  })
});
const { allProject } = (await response.json())?.data;

return allProject;
}