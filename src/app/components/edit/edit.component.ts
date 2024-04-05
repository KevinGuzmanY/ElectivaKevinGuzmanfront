import { Component, OnInit } from '@angular/core';
import {Producto} from "../../Model/Producto";
import {ServiceService} from "../../Service/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  producto: Producto = new Producto();
  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto(){
    JSON.stringify(localStorage.getItem('id'));
    let id: number = JSON.parse(localStorage.getItem('id') as string) as number;

    this.service.getById(id).subscribe(
      data => {
        this.producto = data;
      });
  }
  actualizar(){
     this.service.updateProduct(this.producto).subscribe(
       data => {alert('actualizado'); this.route.navigate(['list']); }
     );
  }


}
