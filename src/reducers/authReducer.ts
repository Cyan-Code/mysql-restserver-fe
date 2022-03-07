import { user } from '../interfaces/interface';
import typeAction from '../types/types'

const initialState = {
  name: '',
  id: '',
  level: ''
}

export const authReducer = (state:user, action:typeAction):(user|undefined) => {
  switch (action.type) {
    case 'Login':
      return {
        ...action.payload,
        name: action.payload.name,
        id: action.payload.id,
        level: action.payload.level
      }
    case 'Logout':
      return initialState
    default: return initialState;
  }
}


