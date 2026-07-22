import jwt from 'jsonwebtoken'; import {env} from '../config/env'; import {Role} from '../types';
export const signToken=(user:{id:number;email:string;role:Role})=>jwt.sign(user,env.jwtSecret,{expiresIn:env.jwtExpiresIn} as jwt.SignOptions);
export const verifyToken=(token:string)=>jwt.verify(token,env.jwtSecret) as {id:number;email:string;role:Role};
