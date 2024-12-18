import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router  } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para [(ngModel)]
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  nombre:string = '';
  contrasena:string = '';
  tipousuario:string = '';
  mensajeError = '';

  constructor(private authService: AuthService,private router: Router) {}
  
  iniciarSesion() {
    const usuario = {
      nombre: this.nombre,
      contrasena: this.contrasena,
      tipousuario: this.tipousuario
    };

    console.log('Tipo de usuario:', this.tipousuario);
    this.authService.login(usuario).subscribe(
      (respuesta) => {
        console.log('Inicio de sesión exitoso:', respuesta);
        if (this.tipousuario === 'Presidente OTB') 
          {
            this.router.navigate(['/bienvenidopresidente', this.nombre]);
          } else { 
            if (this.tipousuario === 'Empresa') 
            {
              this.router.navigate(['/bienvenidopresidente',  this.nombre]);
            }else {
              if (this.tipousuario === 'Usuario') 
              {
                this.router.navigate(['/bienvenidopersona', this.nombre]);
              }else{ 
                if (this.tipousuario === 'Admin') 
                {
                  this.router.navigate(['/bienvenidoadmin']);
                }
              }
            }
          }; 

      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.mensajeError = 'Usuario o contraseña incorrectos.';
        alert(this.mensajeError);
      }
    );    
  }
}
