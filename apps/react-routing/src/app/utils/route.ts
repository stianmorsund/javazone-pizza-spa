export interface IRoute {
  path: string
  niceName: string
  component: () => unknown
}

export const getCurrentPageNicename = ({
  location,
  routes,
}: {
  location: string
  routes: IRoute[]
}) => routes.find((r) => r.path === location)?.niceName
