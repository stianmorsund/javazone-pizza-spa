// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css'

import { LiveAnnouncher } from './announcher'

import { Route, Routes, useLocation } from 'react-router-dom'
import { getCurrentPageNicename, IRoute } from './utils/route'
import { Home } from './home'
import { Side2 } from './side2'
import { NavigationMenu } from './nav'

const routes: IRoute[] = [
  { path: '/', niceName: 'Hjem', component: Home },
  { path: '/side-2', niceName: 'Side 2', component: Side2 },
]

export function App() {
  const location = useLocation().pathname
  const currentPage = getCurrentPageNicename({ location, routes })
  return (
    <>
      <NavigationMenu routes={routes}></NavigationMenu>
      <LiveAnnouncher page={currentPage}></LiveAnnouncher>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/side-2" element={<Side2 />} />
      </Routes>
      <NavigationMenu routes={routes}></NavigationMenu>
    </>
  )
}

export default App
