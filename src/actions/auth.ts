import { swAlert } from "../helpers/handleAlerts";
import { handleFetch } from "../helpers/handleFetch";
import { validarJWT } from "../helpers/handleToken";


export const startLogin = (user:any) => {
  return async (dispatch:any) => {
    await handleFetch({
      method:'POST',
      path: '/auth/login'
    }, user)
    .then(resp => {
      if (resp.state !== 'ok') {
        const passing = {icon: 'error', msg: resp.msg, title: 'Error en el registro', timer: 5000}
        swAlert(passing);
      } else {
        const passing = {icon: 'success', msg: resp.msg, title: 'Autenticado', timer: 1000}
        swAlert(passing);
        const tokenVerify = validarJWT(resp.token);
        dispatch(startLoginUnSync(tokenVerify))
      }
    })
  }
}

const startLoginUnSync = (payload:any) => ({
  type: 'login',
  payload
})

