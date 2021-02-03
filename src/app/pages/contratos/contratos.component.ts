import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../service/contrato.service';
import { Contrato } from '../../model/Contrato';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/model/Proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  ContratoForm: FormGroup;
  loading = false;
  contra:Contrato;
  submitted = false;
  msg_error = false;
  proveedor:Proveedor[];



  constructor(private contratoServ : ContratoService, private _router: Router, private formBuilder: FormBuilder, private proveServ : ProveedorService) {
   }

   get f() { return this.ContratoForm.controls; } 

  ngOnInit(): void {

    //Cargar información de tipo proveedor para registro de contratos
      this.proveServ.ObtenerProveedores().subscribe(res => {
      this.proveedor = res;
    },
      error => {
        console.log("error al cargar");
      }
    )

    this.ContratoForm = this.formBuilder.group({
      tipoNegociacion:['', Validators.required],
      proveedor:['', Validators.required],
      //nombre_propiedad:['', Validators.required],
      prctComision:['', Validators.required],
      iva:['', Validators.required],
      fee:['', Validators.required], 
    })

    this.contra = new Contrato();
    this.contra.tipoNegociacion = {};
    this.contra.proveedor = {};
  }

  onSubmit(){
    this.submitted = true;
    if (this.ContratoForm.invalid) {
      return;
    }

    this.loading = true;
    debugger
    this.contra.tipoNegociacion.idtipoNegociacion=this.f.tipoNegociacion.value;
    this.contra.proveedor.idproveedor=this.f.proveedor.value;
    this.contra.porcentajeComision=this.f.prctComision.value;
    this.contra.iva=this.f.iva.value;
    this.contra.feeImpuestoHotelero=this.f.fee.value;
    console.log(JSON.stringify(this.contra));
    this.contratoServ.registrarContrato(this.contra).subscribe(
      data =>{
        console.log("Recibido")
        this._router.navigate(['/main-proveedores']);
      },
      erro => {
        this.loading = false;
        this.msg_error=true;
      }
    );
  }

}
