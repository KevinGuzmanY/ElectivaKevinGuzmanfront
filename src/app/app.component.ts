import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }


    seeList(){
      this.router.navigate(['list']);
    }
    newProduct(){
    this.router.navigate(['add']);
    }
    supplyProduct(){
     this.router.navigate(['supply']);
    }

}
