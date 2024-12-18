import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminosycondiciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminosycondiciones.component.html',
  styleUrls: ['./terminosycondiciones.component.css']
})
export class TerminosycondicionesComponent {
constructor(private router: Router) {}

goToInicioSesion() {
    this.router.navigate(['/iniciosesion']);
  }
}
