import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Principal } from "../components/home/Principal"


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
    to: 'login',
    name: 'login',
    path: '/login',
    Component: Login
  },
  {
    to: 'register',
    name: 'register',
    path: '/register',
    Component: Register
  }
]

