import {Request, Response, NextFunction} from "express";

import { UserModel } from './user.model';

export class UsersRoutes { 
  // public authRoutes: AuthRoutes = new AuthRoutes();
  
  public routes(router, prefix): void {

    // this.authRoutes.routes(router, `${prefix}/auth`);

    router.get(`${prefix}/`, async (req: Request, res: Response) => {
      const users = await UserModel.find();
      res.status(200).json(users);
    });

    router.post(`${prefix}/transfer`, async (req: Request, res: Response) => {
    const fromUser = await UserModel.findById(req.body.userId);
  
      res.status(200).json({
        users: {
          from: fromUser,
          to: 'toUser'
        }
      })
    })
  }
}
