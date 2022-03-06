import jwt from "jsonwebtoken";

interface token {
  id: string,
  level: string,
  name: string,
}

export const validarJWT = (token:string) => {
  
  try {
    const tokenA = jwt.verify( token, 'myT0K3M' ) as token;
    return tokenA
  } catch (error) {
    console.log(error);
  }
}
