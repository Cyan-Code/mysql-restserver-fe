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

type returnForm = {
  flag: boolean,
  obj:object
}

export const useValidationLogin = ({email, password}: login):returnForm => {//Todo: Retornar valroes interpretables o un
  let flag:boolean = true;
  console.log(flag);
  let obj:object = {}
  if (email.length === 0 || password.length === 0) {
    flag = false;
    obj = {
      icon: 'error',
      msg:'Revisa tus credenciales',
      title: 'Ingreso'
    }
    console.log(flag);
  }
  if (!validator.isEmail(email)) {
    flag = false;
    obj = {
      icon:'error',
      msg: 'Formato de Email invalido',
      title: 'Ingreso'
    }
    console.log(flag);
  }
  console.log(flag);
  return {
    flag,
    obj
  }
}


export const useValidationRegister = ({email, password, nombre, passwordConf}: register):boolean => {
  if(email.length === 0 || password.length === 0 || nombre.length === 0 || passwordConf.length === 0){ return false }
  if (password !== passwordConf) { return false }
  if (!validator.isEmail(email) || !validator.isStrongPassword(password)) { return false }
  return true
}


