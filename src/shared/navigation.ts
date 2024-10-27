export const Routes = {
  HOME: '/',
  PROJECTS: '/projects',
  CONTACT: '/contact',
}

export const DynamicRoutes = {
  PROJECT_DETAILS: (id: string | number) => `${Routes.PROJECTS}/${id}`,
}
