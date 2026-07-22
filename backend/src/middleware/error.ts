import {ErrorRequestHandler,RequestHandler} from 'express';
export const notFound:RequestHandler=(req,res)=>res.status(404).json({success:false,message:`Route ${req.method} ${req.path} not found`});
export const errorHandler:ErrorRequestHandler=(err,req,res,next)=>{console.error(err);res.status(err.status||500).json({success:false,message:err.message||'Internal server error'});};
