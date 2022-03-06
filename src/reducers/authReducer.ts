


const authReducer = (state:any, { type, payload }:any) => {
  switch (type) {
  case 'login':
    return { ...state, ...payload }

  default:
    return {}
  }
}

export default authReducer;