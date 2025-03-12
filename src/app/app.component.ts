import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule, CalendarModule, FormsModule],  // Incluye FormsModule y CalendarModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nuevo-proyecto';
  cars = [
    { brand: 'Toyota', year: 2020 },
    { brand: 'Honda', year: 2021 },
    { brand: 'Ford', year: 2022 }
  ];
  date: Date = new Date();  // Inicializa la propiedad 'date'
}
