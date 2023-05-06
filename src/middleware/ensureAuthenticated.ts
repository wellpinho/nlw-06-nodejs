import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticated (
  req: Request, 
  res: Response, 
  next: NextFunction) {
    
    // 1) Receber o token
    const authToken = req.headers.authorization;

    // Validar se token esta inserido
    if (!authToken) {
      return res.status(401).end();
    }

    const [, token] = authToken.split(' ');

    // validar se token é válido
    try {
      const { sub, } = verify(token, 'YOUR-TOKEN') as IPayload;

      // recuperar infos do user
      req.user_id = sub;
      
      return next();
    } catch (error) {
      return res.status(401).end();
    }
}
