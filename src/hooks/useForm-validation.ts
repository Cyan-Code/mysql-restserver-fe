import validator from 'validator';

interface register {
  email: string,
  password: string,
  passwordConf: string,
  nombre: string
}
interface login {
  email: string,
  password: string,
}
//TODO: Deberian de retornar un objeto para incluir en el Swal
export const useValidationLogin = ({email, password}: login):object => {//Todo: Retornar valroes interpretables o un
  let errors = {}
  if (email.length === 0 || password.length === 0) { 
    return errors = {
      mama:'longitud'
    }
  }
  if (!validator.isEmail(email)) {
    return errors = {
      papa:'email'
    }
  }
  return errors;
}


export const useValidationRegister = ({email, password, nombre, passwordConf}: register):boolean => {
  if(email.length === 0 || password.length === 0 || nombre.length === 0 || passwordConf.length === 0){ return false }
  if (password !== passwordConf) { return false }
  if (!validator.isEmail(email) || !validator.isStrongPassword(password)) { return false }
  return true
}


