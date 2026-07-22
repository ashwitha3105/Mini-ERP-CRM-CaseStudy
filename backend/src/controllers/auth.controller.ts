import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types';
import * as service from '../services/auth.service';
import { ok } from '../utils/response';

export const login = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    ok(res, await service.login(req.body.email, req.body.password));
  } catch (e) {
    next(e);
  }
};


export const me = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    ok(res, {
      message: "User profile",
      user: req.user
    });
  } catch (e) {
    next(e);
  }
};
