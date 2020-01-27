import { Component, OnInit } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  slides: { image: string }[];
  constructor() {}

  ngOnInit() {
    this.slides = [
      { image: 'assets/images/landscape.jpeg' },
      { image: 'assets/images/landscape2.jpeg' },
    ];
  }
}
