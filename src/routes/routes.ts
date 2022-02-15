import { Auth } from "../components/Auth"
import { Principal } from "../components/Principal"


interface Route {
  to: string,
  name: string,
  path: string,
  Component: () => JSX.Element
}

export const routes:Route[] = [
  {
    to: 'principal',
    name:'principal',
    path:'/principal',
    Component: Principal
  },
  {
    to: 'auth',
    name: 'auth',
    path: '/auth',
    Component: Auth
  }
]

