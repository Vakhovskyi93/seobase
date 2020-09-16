import { Injectable } from '@angular/core';
import { AuthService } from "../components/services/auth.service";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean> {



    return  this.authService.checkAuth().pipe(map(auth => {

          if( !auth ) {
            this.router.navigate(['/login'])
            return false
          } else {
            console.log(auth)
            return true
          }
        })
    )




    // return  this.authService.checkAuth().subscribe( auth => {
    //   console.log(auth)
    //   if( !auth ) {
    //     this.router.navigate(['/login'])
    //     return false
    //   } else {
    //     return true
    //   }
    // })
  }

}
