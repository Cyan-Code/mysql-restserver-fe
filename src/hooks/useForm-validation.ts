import validator from 'validator';

interface register {
  id: string,
  password: string,
  passwordConf: string,
  name: string,
  level: string
}
interface login {
  id: string,
  password: string,
}

export const useValidationLogin = ({id, password}: login):boolean => {//Todo: Retornar valroes interpretables o un
  if (id.length === 0 || password.length === 0) return false
  return true;
}


export const useValidationRegister = ({id, password, name, passwordConf}: register):boolean => {
  if(id.length === 0 || password.length === 0 || name.length === 0 || passwordConf.length === 0){ return false }
  if (password !== passwordConf) { return false }
  if (!validator.isStrongPassword(password)) { return false }
  return true
}


