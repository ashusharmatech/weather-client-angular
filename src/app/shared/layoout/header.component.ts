import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router) {
    this.username = localStorage.getItem('username');
  }

  ngOnInit() {
  }
}
