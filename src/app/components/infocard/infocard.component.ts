import { Component, OnInit } from '@angular/core';
import {Producto} from '../../Model/Producto';
import {ServiceService} from '../../Service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {
  balance: number;
  existenciasTotales: number;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getFullBalance().subscribe(
      data => {this.balance = data; }
    );
    this.service.getStock().subscribe(
      data => {this.existenciasTotales = data; }
    );
  }

}
