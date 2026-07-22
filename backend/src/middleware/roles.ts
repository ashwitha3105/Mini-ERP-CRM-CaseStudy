import {NextFunction,Response} from 'express'; import {AuthRequest,Role} from '../types';
export const allowRoles=(...roles:Role[])=>(req:AuthRequest,res:Response,next:NextFunction)=>!req.user||!roles.includes(req.user.role)?res.status(403).json({success:false,message:'Insufficient permissions'}):next();
