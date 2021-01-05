import { Router, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { PreferenciasComponent } from './pages/preferencias/preferencias.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';


registerLocaleData(es);

const routes: Routes = [
  { path: 'preferencias', component: PreferenciasComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: '', component: PreferenciasComponent, pathMatch: 'full' },
  //El '/' se puede camboas por el nombre de la carpeta, por ejemplo para re-dirigir a una pagina 404
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    PreferenciasComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
