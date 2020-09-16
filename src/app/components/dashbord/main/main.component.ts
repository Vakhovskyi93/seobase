import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLogin: boolean = false;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {



    this.authService.checkAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })

  }
  logOut(){

    this.authService.logOut()
      .then(() => {
        this.router.navigate(['/login'])

      })

  }

}
