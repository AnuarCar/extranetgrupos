import { Component, OnInit } from '@angular/core';
import { HabitacionService } from '../../../service/habitacion.service';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { Habitacion } from '../../../model/Habitacion';
import { Router } from '@angular/router';
import { NgForm, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/model/Proveedor';
import { Tipohabitacion } from 'src/app/model/Tipohabitacion';


@Component({
  selector: 'app-habitaciones-edit',
  templateUrl: './habitaciones-edit.component.html',
  styleUrls: ['./habitaciones-edit.component.css']
})
export class HabitacionesEditComponent implements OnInit {

  HabitacionEditForm: FormGroup;
  loading = false;
  //hab:Habitacion = new Habitacion();
  habUpdate:Habitacion = new Habitacion();
  submitted = false;
  msg_error = false;
  proveedor:Proveedor[];
  tipoHabitacion:Tipohabitacion[];
  
  
  constructor(private habServ: HabitacionService, private _router : Router, private formBuilder: FormBuilder, private proveServ : ProveedorService) {
   }

   get f() { return this.HabitacionEditForm.controls; } 


   ngOnInit(): void {

    //Cargar información de tipo de habitacion
    this.habServ.ObtenerTipo_habitaciones().subscribe(res => {
      this.tipoHabitacion = res;
    },
    erro => {
    console.log("error al cargar negociacion")
    })


    this.Editar();
  
    //Creaci{on de FormBuilder
    this.HabitacionEditForm = this.formBuilder.group({
    tipo_Habitacion:[''],
    proveedor:[''],
    capacidadMaxima:['', Validators.required],
    capacidadMinima:[''],
    numeroAdultos:[''],
    numeroNinos:[''],
   })
 }
 

 Editar(){
  //this.loading = true; 
  //Obtener el ID de la habitación selecionada en la tabla
  let idHabitacion=localStorage.getItem("idHabitacion");
  console.log(idHabitacion);
  //Conexión a servicio que trae la información de la habitación por ID Habitacion
  this.habServ.ObtenerHabitacionId(+idHabitacion).subscribe(data => {
    this.habUpdate=data;
    console.log("Obtener habitacion ID "+ this.habUpdate.idtipoHabitacion);
    this.f.tipo_Habitacion.setValue(this.habUpdate.idtipoHabitacion);
    this.f.capacidadMaxima.setValue(this.habUpdate.capacidadMaxima);
    this.f.capacidadMinima.setValue(this.habUpdate.capacidadMinima);
    this.f.numeroAdultos.setValue(this.habUpdate.numeroAdultos);
    this.f.numeroNinos.setValue(this.habUpdate.numeroNinos);

   });
   //Conexión a servicio que trae la información del proveedor asignado a una habitación.
   this.habServ.ObtenerProveedorporIdhabitacion(+idHabitacion).subscribe(res => {
     this.proveedor = res;
     this.f.proveedor.setValue(this.proveedor);
   },
   error => {
     console.log(error);
   });
 }

 onSubmit(){
  this.submitted = true;
  if (this.HabitacionEditForm.invalid) {
     return;
  }

   this.loading = true;
   debugger
   let idHabitacion=localStorage.getItem("idHabitacion");
   this.habUpdate.idhabitacion=idHabitacion;
   this.habUpdate.idtipoHabitacion=this.f.tipo_Habitacion.value;
   this.habUpdate.capacidadMaxima=this.f.capacidadMaxima.value;
   this.habUpdate.capacidadMinima=this.f.capacidadMinima.value;
   this.habUpdate.numeroAdultos=this.f.numeroAdultos.value;
   this.habUpdate.numeroNinos=this.f.numeroNinos.value;
   this.habServ.ActualizarHabitacion(this.habUpdate).subscribe(
     data =>{
       this.habUpdate=data;
       console.log("Recibido")
       this._router.navigate(['/main-habitaciones']);

     },
     erro => {
       this.loading = false;
       this.msg_error=true;
       console.log(erro);
       console.log(this.habUpdate);
     }
   );
 }

}
