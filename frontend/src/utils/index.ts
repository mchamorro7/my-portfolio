export const isRouteActive = (currentPath: string, path: string) =>
  currentPath === path ? 'active' : '';
