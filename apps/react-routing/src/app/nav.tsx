import React from 'react'
import { Link } from 'react-router-dom'
import { IRoute } from './utils/route'

export class NavigationMenu extends React.Component<{ routes: IRoute[] }> {
  override render() {
    return (
      <nav>
        <ul>
          {this.props.routes.map((route, index) => {
            return (
              <li key={index}>
                <Link to={route.path}>{route.niceName}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}
