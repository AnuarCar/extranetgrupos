import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { AllotmentService } from 'src/app/service/allotment.service';
import { Allotment } from 'src/app/model/Allotment';
import { Proveedor } from 'src/app/model/Proveedor';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-allotment',
  templateUrl: './allotment.component.html',
  styleUrls: ['./allotment.component.css']
})
export class AllotmentComponent implements OnInit {

  AllotmentForm: FormGroup;
  loading = false;
  allot:Allotment;
  submitted = false;
  msg_error = false;    
  proveedor:Proveedor[];

  constructor(private allotmentService: AllotmentService,private _router: Router, private formBuilder: FormBuilder, private proveServ : ProveedorService) {    
   }

   get f() { return this.AllotmentForm.controls; } 

  ngOnInit(): void {

     //Cargar información de proveedores para registro de contratos
     this.proveServ.ObtenerProveedores().subscribe(res => {
     this.proveedor = res;
    },
      error => {
        console.log("error al cargar todos los proveedores");
      }
    )

    this.AllotmentForm = this.formBuilder.group({
      proveedorid:['', Validators.required],
      idhabitacion_prov:['', Validators.required],
      cantidad:['', Validators.required],
      fechadesde:['', Validators.required],
      fechahasta:['', Validators.required], 
    })

    this.allot = new Allotment();
    this.allot.proveedor = {};
    this.allot.habitacion = {};

    
  }

  onSubmit(){
    this.submitted = true;
    if (this.AllotmentForm.invalid) {
      return;
    }

    this.loading = true;
    debugger
    //this.allot.proveedor.idproveedor=this.f.proveedorid.value;
    this.allot.habitacion.idhabitacion=this.f.idhabitacion_prov.value;
    this.allot.cantidad=this.f.cantidad.value;
    this.allot.fechaDesde=this.f.fechadesde.value;
    this.allot.fechaHasta=this.f.fechahasta.value;
    this.allotmentService.registrarAllotment(this.allot).subscribe(
      data =>{
        console.log("Recibido");
        this._router.navigate(['/main-allotment']);
      },
      error => {
        this.loading = false;
        this.msg_error=true;
      }
    );

  }


}
