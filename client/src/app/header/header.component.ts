import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSignIn: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.getActiveUser().subscribe(user => {
      this.isSignIn = !!user
    })
  }

}
