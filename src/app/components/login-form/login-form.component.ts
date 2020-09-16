import { Component, OnInit ,ViewChild } from '@angular/core';
 import { AuthService} from "../services/auth.service";
import { Router } from "@angular/router";
 import { FlashMessagesService } from "angular2-flash-messages";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  @ViewChild('form') form;
  @ViewChild('formPass') formPass;
  @ViewChild('formEmail') formEmail;


  constructor(
    private authService: AuthService,
    private router: Router,
     public flashMessage: FlashMessagesService,

  ) { }

  ngOnInit(): void {

    this.authService.checkAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/accountinfo'])
      }
    })
  }

  onSubmit() {

    if (!this.formEmail.valid || !this.formPass.valid) {

      this.flashMessage.show(`Invalid Email or Password`, {
        cssClass:'alert-danger over',
        showCloseBtn: true,
        closeOnClick: true,
        timeOut: 10000
      })

    } else {
      this.authService.login(this.email, this.password)
        .then( user => {
          this.authService.save(user)
          this.router.navigate(['/accountinfo'])
          this.form.reset()
        })
        .catch(err => {
          console.log(err)
          this.flashMessage.show(`${err.message}`, {
            cssClass:'alert-danger over',
            showCloseBtn: true,
            closeOnClick: true,
            timeOut: 10000
          })
        })


    }



  }

}
