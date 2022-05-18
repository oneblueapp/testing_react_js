import { Request, Response } from 'express';
import { Cadaster } from '../Services/Cadaster';
import { Login } from '../Services/Login';

export interface ICadaster {
  name: string
  password: string
}

export class CadasterController {
  cadasterController(req: Request, res: Response) {
    const { name, password }: ICadaster = req.body
    
    if (!name || !password) {
      return res.json({ ok: false, why: 'Not found data!' })
    }
    if(typeof(name) !== "string" || typeof(password) !== "string") {
      return res.status(500).json({ ok: false, why: 'format is wrong' })
    }


    const user = Cadaster({ name, password })
    if (user.ok === false) {

      return res.status(404).json(user)
    }
    return res.json(user)

  }
}