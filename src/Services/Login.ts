import { ICadaster } from '../Controllers/loginController';
import { database } from '../db';

export function Login(payload: ICadaster) {
  let Task:Array<any> = []
  let i = 0
  database.forEach((index: ICadaster) => {
    if(index.name == payload.name && index.password == payload.password) {
      Task.push(true)
    }
  })
  if(Task[i] === true) {
    i++
    return {ok:true, login: payload.name}
  }
  return {
    ok:false, why:'Not found data!'
  }
}