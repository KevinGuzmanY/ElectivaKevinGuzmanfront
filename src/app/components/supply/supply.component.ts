import { Component, OnInit } from '@angular/core';
import {Producto} from '../../Model/Producto';
import {ServiceService} from '../../Service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {

  productos : Producto[];
  supplyProduct: Producto = new Producto();
  supplyInfo: object;
  valorUnidad: number;
  unidades: number;
  id: number;

  constructor(private service: ServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getProductos().subscribe(
      data => {this.productos = data; }
    );
  }
  supplyPdt(){
    var e = (document.getElementById('inputGroupSelect01')) as HTMLSelectElement;
    var sel = parseInt(e.value);
    this.id = sel;
    this.supplyProduct.id = this.id;
    let data = this.unidades + '' + this.valorUnidad;
    this.service.supplyProduct(this.supplyProduct, this.unidades, this.valorUnidad).subscribe(
      data => {alert('Abastecido con exito'); this.router.navigate(['list']); }
    );
  }


}
