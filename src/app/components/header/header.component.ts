import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.to('#headerImg', {
      duration: 10,
      delay: 0.4,
      y: 0,
      repeat: -1,
      ease: 'slow',
      rotateY: 360,
    });
  }



}
