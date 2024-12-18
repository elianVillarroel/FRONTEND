import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterModule , Router} from '@angular/router';

@Component({
  selector: 'app-bienvenidopersona',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bienvenidopersona.component.html',
  styleUrls: ['./bienvenidopersona.component.css'],
})

export class BienvenidopersonaComponent implements OnInit {
  usuario: any = {
    nombre: null,
    contrasena: null,
    tipousuario: null
  }//anadi una var usuario
  
  eventos: any[] = [];
  error: boolean = false;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadEventos();
    this.usuario.nombre = this.route.snapshot.paramMap.get('User'); //parra toner el nombre usuario
    console.log('nombre del user:',this.usuario.nombre); //para mmostrar si se obtuvo correctamente 
  }

  async loadEventos() {
    try {
      this.eventos = await this.apiService.getEventosusuarionormal();
      if (this.eventos.length === 0) {
        console.warn('No hay eventos disponibles.');
      } else {
        console.log('Eventos cargados:', this.eventos);
      }
      this.error = false;
    } catch (error) {
      console.error('Error al cargar eventos:', error);
      this.error = true;
      this.eventos = [];
    }
  }

  goToRegistrar() {
    this.router.navigate(['/registroevento1', this.usuario.nombre]);  
  }
}