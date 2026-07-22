import {Response,NextFunction} from 'express'; import {AuthRequest} from '../types'; import * as s from '../services/customer.service'; import {ok} from '../utils/response';
export const list=async(req:AuthRequest,res:Response,n:NextFunction)=>{try{ok(res,await s.listCustomers(req.query));}catch(e){n(e);}};
export const get=async(req:AuthRequest,res:Response,n:NextFunction)=>{try{ok(res,await s.customerById(+req.params.id));}catch(e){n(e);}};
export const create=async(req:AuthRequest,res:Response,n:NextFunction)=>{try{ok(res,await s.createCustomer(req.body),201);}catch(e){n(e);}};
export const update=async(req:AuthRequest,res:Response,n:NextFunction)=>{try{ok(res,await s.updateCustomer(+req.params.id,req.body));}catch(e){n(e);}};
export const followup=async(req:AuthRequest,res:Response,n:NextFunction)=>{try{ok(res,await s.addFollowup(+req.params.id,req.body,req.user!.id),201);}catch(e){n(e);}};
export const followups=async(
req:AuthRequest,
res:Response,
n:NextFunction
)=>{
    try{
        ok(
            res,
            await s.getFollowups(+req.params.id)
        );
    }
    catch(e){
        n(e);
    }
};
export const pendingFollowups = async (
req:AuthRequest,
res:Response,
next:NextFunction
)=>{
    try{
        ok(
            res,
            await s.getPendingFollowups()
        );
    }
    catch(e){
        next(e);
    }
};