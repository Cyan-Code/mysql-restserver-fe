import jwt from "jsonwebtoken";
import { token } from "../interfaces/interface";


export const validarJWT = (token:string):(token|undefined) => {
  const tokenA = jwt.verify( token, 'myT0K3M' ) as token;
  return tokenA
}
