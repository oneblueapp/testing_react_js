import { ICadaster } from '../Controllers/loginController';
import { database } from '../db';

export function Cadaster(payload: ICadaster) {
  let Task: Array<any> = []
  let i = 0
  database.forEach((index: ICadaster) => {
    if (index.name == payload.name) {
      Task.push(true)
    }
  })
  if (Task[i] === true) {
    i++
    return {
      ok: false, why: 'User already exists'
    }
  }
  database.push(payload)
  return {
    ok: true, user: {
      name: payload.name
    }
  }
}