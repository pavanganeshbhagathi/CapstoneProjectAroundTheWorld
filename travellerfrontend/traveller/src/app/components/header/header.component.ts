import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  singOut(): any
  {

    this.authService.signOut();

  }
}
