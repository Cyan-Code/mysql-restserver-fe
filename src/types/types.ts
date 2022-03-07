import { user } from "../interfaces/interface"

type typeAction = 
  | { type: 'Login', payload:user }
  | { type: 'Logout', payload:user }

export default typeAction;
