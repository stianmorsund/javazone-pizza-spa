// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css'

import { LiveAnnouncher } from './announcher'

import { Route, Routes, useLocation } from 'react-router-dom'
import { getCurrentPageNicename, IRoute } from './utils/route'
import { Home } from './home'
import { Order } from './order'
import { NavigationMenu } from './nav'

const routes: IRoute[] = [
  { path: '/', niceName: 'Hjem', component: Home },
  { path: '/order', niceName: 'Bestill pizza', component: Order },
]

export function App() {
  const location = useLocation()
  const currentPage = getCurrentPageNicename({
    location: location.pathname,
    routes,
  })
  return (
    <>
      <nav>
        <NavigationMenu
          routes={routes}
          currentPage={currentPage}
        ></NavigationMenu>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </main>
    </>
  )
}

export default App
