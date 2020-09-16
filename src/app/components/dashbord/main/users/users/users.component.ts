import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:any;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.user.user
  }

}
