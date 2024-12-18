import { Component} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule , Router} from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para [(ngModel)]
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registroevento',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './registroevento.component.html',
  styleUrls: ['./registroevento.component.css']
})

export class RegistroeventoComponent {

  usuario: any = {
    nombre: null
  }
  

  nombre: string = '';
  tipo_evento: string = '';
  descripcion: string = '';
  id_usuario: string = '';
  id_espacio: string = '';
  fecha_evento: string = '';
  capacidad_personas: number = 0;
  hora_inicio: number = 0;
  hora_fin: number = 0;
  tipo_pago: string = '';
  img_evento: string = '';
  mensajeError = '';
  

  constructor(private authService: AuthService, private router: Router,private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.usuario.nombre= this.route.snapshot.paramMap.get('User'); //para poner el nombre usuario
    console.log('nombre del user:',this.usuario.nombre); //para mmostrar si se obtuvo correctamente 
  }

  volverBienvenidaPresi()
  {
    this.router.navigate(['/bienvenidopresidente', this.usuario.nombre]); 
  }

  registrarevento() {
    const evento = {
      nombre: this.nombre,
      tipo_evento: this.tipo_evento,
      descripcion: this.descripcion,
      id_usuario: this.usuario.nombre,
      id_espacio: this.id_espacio,
      fecha_evento: this.fecha_evento,  // Usa la fecha en el formato adecuado
      capacidad_personas: this.capacidad_personas,
      hora_inicio: this.hora_inicio,
      hora_fin: this.hora_fin,
      tipo_pago: this.tipo_pago,
      img_evento: this.img_evento
    };
  
    // Llamada al servicio para registrar el evento
    this.authService.registrarevento(evento).subscribe(
      (respuesta) => {
        console.log('Registro de evento exitoso:', respuesta);
  
        // Navegación según el tipo de pago
        if (this.tipo_pago === 'Qr') {
          this.router.navigate(['/qrreserva']);
        } else if (this.tipo_pago === 'Tarjeta') {
          this.router.navigate(['/pagoreserva']);
        }
      },
      (error) => {
        console.error('Error al registrar evento:', error);
        this.mensajeError = 'Verifica los datos.';
        alert(this.mensajeError);
      }
    );
  }
}
