﻿import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.sass']
})
export class FooterComponent {
  today: number = Date.now();
}
