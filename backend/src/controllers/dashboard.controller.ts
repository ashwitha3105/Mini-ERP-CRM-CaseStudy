import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
import { db } from '../config/database';
import { ok } from '../utils/response';
export const stats=async(_req:AuthRequest,res:Response,next:NextFunction)=>{try{const {rows}=await db.query(`SELECT COUNT(*) FILTER (WHERE status='Confirmed')::int total_orders, COALESCE(SUM(total) FILTER (WHERE status='Confirmed'),0)::numeric total_sales, COALESCE(SUM(total) FILTER (WHERE status='Confirmed' AND date_trunc('month',created_at)=date_trunc('month',CURRENT_DATE)),0)::numeric monthly_revenue, COUNT(*) FILTER (WHERE status='Draft')::int pending_payments FROM (SELECT c.id,c.status,c.created_at,COALESCE(SUM(ci.unit_price*ci.quantity),0) total FROM challans c LEFT JOIN challan_items ci ON ci.challan_id=c.id GROUP BY c.id) sales`);ok(res,rows[0]);}catch(e){next(e);}};
