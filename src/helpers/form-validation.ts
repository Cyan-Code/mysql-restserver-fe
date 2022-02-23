import validator from 'validator';

interface form {
  login?: login
  register?: register
}

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

export const formvalidation = (f: form) => {
  
  switch (f) {
    case f.login:
        const {login} = f;
        if ( (login?.email || login?.password ) === '') return false
        if (!validator.isEmail(login?.email || '')) return false
        if (!validator.isStrongPassword(login?.password || '')) return false
      break;
    case f.register:
      const {register} = f;
      if (( register?.email
        || register?.nombre
        || register?.password
        || register?.passwordConf) === '') return false
      
//TODO: FINISH THEM
      break;
    
    default:
      break;
  }
}


