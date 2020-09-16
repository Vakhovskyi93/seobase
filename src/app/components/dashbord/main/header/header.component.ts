import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: any;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.email = this.authService.user.user.email;

  }

}
