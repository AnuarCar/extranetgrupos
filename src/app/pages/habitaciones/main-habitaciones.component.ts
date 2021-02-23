import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HabitacionService } from '../../service/habitacion.service';
import { Habitacion } from 'src/app/model/Habitacion';
import { Tipohabitacion } from 'src/app/model/Tipohabitacion';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-habitaciones',
  templateUrl: './main-habitaciones.component.html',
  styleUrls: ['./main-habitaciones.component.css']
})
export class MainHabitacionesComponent implements OnDestroy, OnInit {

  habitacion:Habitacion[];
  tipoHabitacion:Tipohabitacion[];
  hab:Habitacion = new Habitacion();
  loading = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private habServ: HabitacionService, private router:Router) { }

  ngOnInit(): void {

    //Cargar información de tipo de habitacion
    this.habServ.ObtenerTipo_habitaciones().subscribe(res => {
      this.tipoHabitacion = res;  
    },
    erro => {
      console.log("error al cargar negociacion")
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json'
      }
    };

    //Cargar información de habitaciones
    this.loading =true;
    this.habServ.ObtenerHabitacionesProveedorTipo().subscribe(res => {
    this.habitacion = res;
    this.dtTrigger.next();
    this.loading = false;
    },
    erro => {
       console.log("error al cargar habitaciones")
    }
    )  
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();

  }


  Editar(habitacion:Habitacion):void{
    localStorage.setItem("idHabitacion", String(habitacion.idhabitacion));

    this.router.navigate(['/habitaciones-edit']);
  }

}
