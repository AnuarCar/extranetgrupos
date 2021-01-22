import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../service/proveedor.service';
import { Proveedor } from '../../model/Proveedor';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  public prov = new Proveedor();
  msg = '';

  constructor(private provedorServ : ProveedorService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerProveedor(){
    this.provedorServ.registrarProveedor(this.prov).subscribe(
      data =>{
        console.log("Recibido");
        this._router.navigate(['/preferencias']);
      }  ,

      error => {
        console.log("Check it");
        this.msg = error.error;
      }

    )
  }


}
