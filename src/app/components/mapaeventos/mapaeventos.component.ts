import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Select } from 'primeng/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { OrderListModule } from 'primeng/orderlist';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-mapaeventos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, Select],
  templateUrl: './mapaeventos.component.html',
  styleUrls: ['./mapaeventos.component.css']
})
export class MapaeventosComponent {
    eventos: any[] = [];
    error: boolean = false;
    formGroup: FormGroup;
  


    constructor(private apiService: ApiService) {
      this.formGroup = new FormGroup({
        selectedCity: new FormControl(null), // Valor inicial nulo
      });
  
    }
  
    ngOnInit(): void {
      this.loadEventos();
    }
  

    async loadEventos() {
      try {
        const data = await this.apiService.getEventosusuarionormal();

        this.eventos = data.map(evento=>({
          name: evento.nombre || evento.title || 'Evento sin nombre',
          code: evento.id || evento.code || evento._id,
        }));
       

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
  
  

}
