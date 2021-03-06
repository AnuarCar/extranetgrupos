import { Router, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { PreferenciasComponent } from './pages/preferencias/preferencias.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { ProveedorService } from './service/proveedor.service';
import { FormDirective } from './constant/form.directive';
import { DataTablesModule } from "angular-datatables";
import { MainProveedoresComponent } from './pages/proveedores/main-proveedores.component';
import { ContratosComponent } from './pages/contratos/contratos.component';
import { MainContratosComponent } from './pages/contratos/main-contratos.component';
import { MainHabitacionesComponent } from './pages/habitaciones/main-habitaciones.component';
import { HabitacionesComponent } from './pages/habitaciones/habitaciones.component';
import { HabitacionesEditComponent } from './pages/habitaciones/habitaciones-edit/habitaciones-edit.component';
import { AllotmentComponent } from './pages/allotment/allotment.component';
import { MainAllotmentComponent } from './pages/allotment/main-allotment.component';


registerLocaleData(es);

const routes: Routes = [
  { path: 'preferencias', component: PreferenciasComponent },
  { path: 'main-proveedores', component:MainProveedoresComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'main-contratos', component:MainContratosComponent},  
  { path: 'contratos', component: ContratosComponent },
  { path: 'main-habitaciones', component:MainHabitacionesComponent },
  { path: 'habitaciones', component:HabitacionesComponent },
  { path: 'habitaciones-edit', component:HabitacionesEditComponent },
  { path: 'allotment', component: AllotmentComponent },
  { path: 'main-allotment', component: MainAllotmentComponent },
  { path: '', component: PreferenciasComponent, pathMatch: 'full' },

  //El '/' se puede camboas por el nombre de la carpeta, por ejemplo para re-dirigir a una pagina 404
  //Comment testing
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    PreferenciasComponent,
    ProveedoresComponent,
    FormDirective,
    MainProveedoresComponent,
    ContratosComponent,
    MainContratosComponent,
    MainHabitacionesComponent,
    HabitacionesComponent,
    HabitacionesEditComponent,
    AllotmentComponent,
    MainAllotmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProveedorService,
    { provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
