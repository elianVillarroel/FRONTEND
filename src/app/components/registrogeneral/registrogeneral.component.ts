import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router  } from '@angular/router';

import { FormsModule } from '@angular/forms'; // Importar FormsModule para [(ngModel)]
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registrogeneral',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './registrogeneral.component.html',
  styleUrls: ['./registrogeneral.component.css']
})

export class RegistrogeneralComponent 
{
  nombre: string = '';
  contrasena: string = '';
  email:string = '';
  numcontacto: number = 0;
  tipousuario: string = '';
  mensajeError = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrar() 
  {
    const usuarios = {
      nombre: this.nombre,
      contrasena: this.contrasena,
      email: this.email,
      numcontacto: this.numcontacto,
      tipousuario: this.tipousuario
    }; 


    this.authService.registrarusuario(usuarios).subscribe
    (
      (respuesta) => {

        console.log('Registro de usuario exitoso:', respuesta);
        if (this.tipousuario === 'Presidente OTB') 
        {
          this.router.navigate(['/condiciones']);
        } else { 
          if (this.tipousuario === 'Empresa') 
          {
            this.router.navigate(['/condiciones']);
          }else {
            if (this.tipousuario === 'Usuario') 
            {
              this.router.navigate(['/condiciones']);
            }else{ 
              if (this.tipousuario === 'Admin') 
              {
                this.router.navigate(['/condiciones']);
              }
            }
          }
        }; 
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        this.mensajeError = 'Datos incorrectos.';
        alert(this.mensajeError);
      }
    );
  }
} 