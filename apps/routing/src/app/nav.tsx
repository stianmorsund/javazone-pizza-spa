import React from 'react'
import { Link } from 'react-router-dom'
import { IRoute } from './utils/route'

export class NavigationMenu extends React.Component<{
  routes: IRoute[]
  currentPage: string | undefined
}> {
  override componentDidUpdate() {
    // document.title = `${this.props.currentPage} - Pizza`
    // document.body.focus()
    // window.scrollTo(0, 0)
  }
  override render() {
    return (
      <div>
        <img src="assets/logo.svg" alt="Logo" className="logo" />
        <ul>
          {this.props.routes.map((route, index) => {
            return (
              <li key={index}>
                <Link to={route.path}>{route.niceName}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
