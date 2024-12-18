import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterModule , Router} from '@angular/router';

@Component({
  selector: 'app-bienvenidoregistro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bienvenidoregistro.component.html',
  styleUrls: ['./bienvenidoregistro.component.css'],
})

export class BienvenidoregistroComponent implements OnInit {
  usuario: any = {
    nombre: null,
    contrasena: null,
    tipousuario: null
  }//anadi una var usuario
  eventos: any[] = [];
  nuevoEvento: any = {
    nombre: '',
    fecha: '',
    hora_inicio: null,
    hora_fin: null,
    capacidad_personas: null,
    tipo_evento: '',
    descripcion: '',
    id_usuario: null
  };

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.usuario.nombre = this.route.snapshot.paramMap.get('User'); // Obtén el nombre desde la URL
    console.log('Nombre del usuario:', this.usuario.nombre);
  
    if (this.usuario.nombre) {
      this.loadEventos(); // Carga los eventos solo si se obtuvo el nombre
    } else {
      console.error('No se pudo obtener el nombre del usuario de la URL.');
    }
  }
  
  async loadEventos() {
    try {
      this.eventos = await this.apiService.getEventoscreador(this.usuario.nombre);
      console.log('Eventos cargados:', this.eventos);
    } catch (error) {
      console.error('Error al cargar los eventos:', error);
    }
  } 
  
  verEvento(idEvento: number) {
    this.router.navigate(['/verevento', idEvento]);
  }

  goToRegistrar() {
    this.router.navigate(['/registroevento1', this.usuario.nombre]);  
  }
}