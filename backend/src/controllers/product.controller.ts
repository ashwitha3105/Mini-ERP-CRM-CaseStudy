import {Response,NextFunction} from 'express'; import {AuthRequest} from '../types'; import * as product from '../services/product.service'; import * as inventory from '../services/inventory.service'; import {ok} from '../utils/response';
export const list=async(_req:AuthRequest,res:Response,next:NextFunction)=>{try{ok(res,await product.listProducts());}catch(e){next(e);}};
export const get=async(req:AuthRequest,res:Response,next:NextFunction)=>{try{ok(res,await product.productById(+req.params.id));}catch(e){next(e);}};
export const create=async(req:AuthRequest,res:Response,next:NextFunction)=>{try{ok(res,await product.createProduct(req.body),201);}catch(e){next(e);}};
export const update=async(req:AuthRequest,res:Response,next:NextFunction)=>{try{ok(res,await product.updateProduct(+req.params.id,req.body));}catch(e){next(e);}};
export const remove=async(req:AuthRequest,res:Response,next:NextFunction)=>{try{ok(res,await product.deleteProduct(+req.params.id));}catch(e){next(e);}};
export const movement=async(req:AuthRequest,res:Response,next:NextFunction)=>{try{ok(res,await inventory.adjustStock({...req.body,productId:+req.params.id},req.user!.id),201);}catch(e){next(e);}};
export const movements=async(req:AuthRequest,res:Response,next:NextFunction)=>{try{ok(res,await inventory.movements(+req.params.id));}catch(e){next(e);}};

