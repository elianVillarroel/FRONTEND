import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { HomeComponent } from './components/home/home.component'; //importamos los componentes
import { RegistrogeneralComponent } from './components/registrogeneral/registrogeneral.component';
import { FinregistroComponent } from './components/finregistro/finregistro.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { BienvenidoregistroComponent } from './components/bienvenidoregistro/bienvenidoregistro.component';
import { BienvenidoadminComponent } from './components/bienvenidoadmin/bienvenidoadmin.component';
import { RegistroeventoComponent } from './components/registroevento/registroevento.component';
import { MapaeventosComponent } from './components/mapaeventos/mapaeventos.component';
import { TerminosycondicionesComponent } from './components/terminosycondiciones/terminosycondiciones.component';
import { PermisosdeeventoComponent } from './components/permisosdeevento/permisosdeevento.component';
import { QreventosComponent } from './components/qreventos/qreventos.component';
import { PagoexitosoComponent } from './components/pagoexitoso/pagoexitoso.component';
import { PagoreservaComponent } from './components/pagoreserva/pagoreserva.component';
import { AprobacioneventosComponent } from './components/aprobacioneventos/aprobacioneventos.component';
import { IniciopaginaComponent } from './components/iniciopagina/iniciopagina.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { VerEventoPresiComponent } from './components/ver-evento-presi/ver-evento-presi.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
  [
    HomeComponent ,
    RegistrogeneralComponent,
    FinregistroComponent,
    BienvenidoregistroComponent,
    RegistroeventoComponent,
    CalendarioComponent,
    MapaeventosComponent,
    TerminosycondicionesComponent,
    PermisosdeeventoComponent,
    QreventosComponent,
    PagoexitosoComponent,
    PagoreservaComponent,
    AprobacioneventosComponent,
    IniciopaginaComponent,
    IniciosesionComponent,
    BienvenidoadminComponent,
    VerEventoPresiComponent,
    CommonModule,  
    RouterLink,
    RouterOutlet

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  eventos: any[] = [];
  user: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log(this.loadEventos());
  }

  async loadEventos() {
    try {
      this.eventos = await this.apiService.getEventosusuarionormal();
      console.log(this.eventos)
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  }

  async loadEventosAdmin() {
    try {
      this.eventos = await this.apiService.getEventosadmin();
      console.log(this.eventos)
    } catch (error) {
      console.error('Error al cargar eventos administrador:', error);
    }
  }
}
