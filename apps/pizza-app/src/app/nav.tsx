import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { IRoute } from './utils/route'

export function NavigationMenu({
  routes,
  currentPage,
}: {
  routes: IRoute[]
  currentPage: string | undefined
}) {
  useEffect(() => {
    document.title = `${currentPage} - Pizza Ipsum`
    document.body.focus()
    window.scrollTo(0, 0)
  }, [currentPage])

  return (
    <div>
      <img src="assets/logo.svg" alt="Logo" className="logo" />
      <ul>
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <NavLink to={route.path}>{route.niceName}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}