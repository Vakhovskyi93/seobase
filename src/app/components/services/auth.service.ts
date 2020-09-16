import { Injectable } from '@angular/core';
import {AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  constructor(
    private fireAouth: AngularFireAuth
  ) { }
  login(email: string, password: string) {
        return new Promise((res,rej) => {
          this.fireAouth.signInWithEmailAndPassword(email, password)

            .then( user => res(user))

            .catch(err => rej(err))
        })
  }
  checkAuth() {
    return this.fireAouth.authState.pipe(auth => auth)
  }
  logOut() {
   return  this.fireAouth.signOut()
  }
  save(data) {
    this.user = data
  }


}

