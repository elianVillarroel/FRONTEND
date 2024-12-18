import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service'; // Asegúrate de que el servicio AuthService esté importado si es necesario
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderListModule } from 'primeng/orderlist';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,  // Asegúrate de que HttpClientModule esté en los imports
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    OrderListModule,
  ],
  providers: [AuthService], // Si el AuthService no es un proveedor en un archivo diferente
  bootstrap: [AppComponent]
})
export class AppModule {}
