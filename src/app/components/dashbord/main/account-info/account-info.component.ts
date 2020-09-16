import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  user:any;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user.user
  }

}
