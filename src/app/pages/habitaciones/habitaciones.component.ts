import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../service/habitacion.service';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { Habitacion } from '../../model/Habitacion';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/model/Proveedor';
import { Tipohabitacion } from 'src/app/model/Tipohabitacion';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  HabitacionForm: FormGroup;
  loading = false;
  hab:Habitacion;
  submitted = false;
  msg_error = false;
  proveedor:Proveedor[];
  tipoHabitacion:Tipohabitacion[];

  constructor(private habServ: HabitacionService, private _router : Router, private formBuilder: FormBuilder, private proveServ : ProveedorService) { 
  }

  get f() { return this.HabitacionForm.controls; } 


  ngOnInit(): void {

     //Cargar información de proveedores para registro de habitaciones
     this.proveServ.ObtenerProveedores().subscribe(res => {
      this.proveedor = res;
    },
      error => {
        console.log("error al cargar todos los proveedores");
      }
    )


    //Cargar información de tipo de habitacion
     this.habServ.ObtenerTipo_habitaciones().subscribe(res => {
     this.tipoHabitacion = res;
  

    },
    erro => {
        console.log("error al cargar negociacion")
    }
  )
 
    this.HabitacionForm = this.formBuilder.group({
      tipo_Habitacion:['', Validators.required],
      proveedor:['', Validators.required],
      capacidadMaxima:['', Validators.required],
      capacidadMinima:['', Validators.required],
      numeroAdultos:['', Validators.required],
      numeroNinos:['', Validators.required],
    })

    


    this.hab = new Habitacion();
    //this.hab.tipoHabitacion = {};
    this.hab.proveedor = {};


  }

  onSubmit(){
    this.submitted = true;
    if (this.HabitacionForm.invalid) {
      return;
    }

    this.loading = true;
    debugger
    this.hab.idtipoHabitacion=this.f.tipo_Habitacion.value;
    //this.hab.proveedor.idproveedor=this.f.proveedor.value;
    //Asignar valor 'id_proveedor' al servicio.
    this.habServ.idProveedor=this.f.proveedor.value;
    this.hab.capacidadMaxima=this.f.capacidadMaxima.value;
    this.hab.capacidadMinima=this.f.capacidadMinima.value;
    this.hab.numeroAdultos=this.f.numeroAdultos.value;
    this.hab.numeroNinos=this.f.numeroNinos.value;
    this.habServ.registerhabitacion(this.hab).subscribe(
      data =>{
        console.log("Recibido")
        this._router.navigate(['/main-habitaciones']);
      },
      erro => {
        this.loading = false;
        this.msg_error=true;
      }
    );
  }
}
