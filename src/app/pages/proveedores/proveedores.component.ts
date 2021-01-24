import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../service/proveedor.service';
import { Proveedor } from '../../model/Proveedor';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  ProveedorForm: FormGroup;
  loading = false;
  prov:Proveedor;
  submitted = false;
  msg = '';

  //this.prov.tipoProveedor.idtipoProveedor = 


  constructor(private provedorServ : ProveedorService, private _router : Router, private formBuilder: FormBuilder) { }

  get f() { return this.ProveedorForm.controls; }

  ngOnInit(): void {
    this.ProveedorForm = this.formBuilder.group({
      idProv:['', Validators.required],
      idtipoProv:['', Validators.required],  
      cadenaProv:['', Validators.required],
      nombreProv:['', Validators.required],
      checkinProv:['', Validators.required],
      checkoutProv:['', Validators.required],
      estrellasProv:['', Validators.required],
      paisProv:['', Validators.required],
      CiudadProv:['', Validators.required],
      direccionProv:['', Validators.required],
      telefonoProv:['', Validators.required],
      descripcionProv:['', Validators.required],
      nombreggeneralProv:['', Validators.required],
      emailggeneralProv:['', Validators.required], 
      notificarggeneralProv:['', Validators.required],
      telefonoggeneralProv:['', Validators.required],
      nombregcomercialProv:['', Validators.required],
      emailgcomercialProv:['', Validators.required],
      notificargcomercialProv:['', Validators.required],
      telefonogcomercialProv:['', Validators.required],
      nombrecreservasProv:['', Validators.required],
      emailcreservasProv:['', Validators.required],
      notificarcreservasProv:['', Validators.required],
      telefonocreservasProv:['', Validators.required],
      nombrecgruposProv:['', Validators.required],
      emailcgruposProv:['', Validators.required],
      notificarcgruposProv:['', Validators.required],
      telefonocgruposProv:['', Validators.required],

    })

    this.prov = new Proveedor();
    this.prov.tipoProveedor = {};

  }

  onSubmit(){

    this.submitted = true;
    if (this.ProveedorForm.invalid) {
      return;
    }

    this.loading = true;
    debugger
    this.prov.idproveedor=this.f.idProv.value;
    this.prov.tipoProveedor.idtipoProveedor=this.f.idtipoProv.value;
    this.prov.cadena=this.f.cadenaProv.value;
    this.prov.nombre=this.f.nombreProv.value;
    this.prov.checkin=this.f.checkinProv.value;
    this.prov.checkout=this.f.checkoutProv.value;
    this.prov.estrellas=this.f.estrellasProv.value;
    this.prov.pais=this.f.paisProv.value;
    this.prov.ciudad=this.f.CiudadProv.value;
    this.prov.direccion=this.f.direccionProv.value;
    this.prov.telefono=this.f.telefonoProv.value;
    this.prov.descripcionHotel=this.f.descripcionProv.value;
    this.prov.nombreGerenteGeneral=this.f.nombreggeneralProv.value;
    this.prov.emailGerenteGeneral=this.f.emailggeneralProv.value;
    this.prov.notificarGerenteGeneral=this.f.notificarggeneralProv.value;
    this.prov.telefonoGerenteGeneral=this.f.telefonoggeneralProv.value;
    this.prov.nombreGerenteComercial=this.f.nombregcomercialProv.value;
    this.prov.emailGerenteComercial=this.f.emailgcomercialProv.value;
    this.prov.notificarGerenteComerial=this.f.notificargcomercialProv.value;
    this.prov.telefonoGerenteComercial=this.f.telefonogcomercialProv.value;
    this.prov.nombreContactoReservas=this.f.nombrecreservasProv.value;
    this.prov.emailContactoReservas=this.f.emailcreservasProv.value;
    this.prov.notificarContactoReservas=this.f.notificarcreservasProv.value;
    this.prov.telefonoContactoReservas=this.f.telefonocreservasProv.value;
    this.prov.nombreContactoGrupos=this.f.nombrecgruposProv.value;
    this.prov.emailContactoGrupos=this.f.emailcgruposProv.value;
    this.prov.notificarContactoGrupos=this.f.notificarcgruposProv.value;
    this.prov.telefonoContactoGrupos=this.f.telefonocgruposProv.value;
    console.log(JSON.stringify(this.prov));
    this.provedorServ.registrarProveedor(this.prov).subscribe(
      data =>{
        console.log("Recibido");
        this._router.navigate(['/preferencias']);
      }  ,

      error => {
        JSON.stringify(this.prov);
        console.log(this.prov);
        //console.log(error);

        this.msg = error.error;
      }
    );

    this.loading = false;

  }



  registerProveedor(){
    this.provedorServ.registrarProveedor(this.prov).subscribe(
      data =>{
        console.log("Recibido");
        this._router.navigate(['/preferencias']);
      }  ,

      error => {
        JSON.stringify(this.prov);
        console.log(this.prov);
        //console.log(error);

        this.msg = error.error;
      }

    )
  }


}
