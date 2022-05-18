import { Request, Response } from 'express';
import { Login } from '../Services/Login';

export interface ICadaster {
  name: string
  password: string
}

export class LoginController {
  loginController(req: Request, res: Response) {
    const { name, password }: ICadaster = req.body

    if(typeof(name) !== "string" || typeof(password) !== "string") {
      return res.status(500).json({ ok: false, why: 'format is wrong' })
    }

    if (!name || !password) {
      return res.json({ ok: false, why: 'Not found data!' })
    }

    const user = Login({ name, password })
    if (user.ok === false) {

      return res.status(404).json(user)
    }
    return res.json(user)

  }
}